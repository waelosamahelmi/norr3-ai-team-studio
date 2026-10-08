// Minimal bridge: agent events in, ghost commands out to the browser.
// Node 18+. npm i @openrouter/sdk
// Starting point only. Rename the event types to the ones your agent sends.
import http from 'node:http';
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({ apiKey: process.env.OPENROUTER_API_KEY });
const VOICES = { nova: process.env.VOICE_NOVA, sunny: process.env.VOICE_SUNNY, pixel: process.env.VOICE_PIXEL, byte: process.env.VOICE_BYTE, delta: process.env.VOICE_DELTA };
const clients = new Set();
const audioStore = new Map();

function send(cmd) {
  const line = `data: ${JSON.stringify(cmd)}\n\n`;
  for (const res of clients) res.write(line);
}

// Map an agent event to one ghost command. Adjust to your payloads.
function toGhost(ev) {
  switch (ev.type) {
    case 'session.started':   return { state: 'listening', gesture: 'wave' };
    case 'turn.thinking':     return { state: 'thinking', think: ev.summary || '' };
    case 'tool.started':      return { state: 'working', status: ev.tool };
    case 'tool.finished':     return { gesture: 'nod' };
    case 'tool.error':        return { emotion: 'sad', intensity: 0.7, gesture: 'shake' };
    case 'turn.completed':    return { state: 'idle', emotion: 'happy', intensity: 0.7 };
    default:                  return null;
  }
}

async function speak(persona, text) {
  const stream = await openRouter.tts.createSpeech({
    speechRequest: { input: text, model: 'elevenlabs/eleven-turbo-v2', voice: VOICES[persona], speed: 1 }
  });
  const chunks = [];
  for await (const c of stream) chunks.push(Buffer.from(c));
  const id = Math.random().toString(36).slice(2);
  audioStore.set(id, Buffer.concat(chunks));
  return `/audio/${id}`;
}

http.createServer(async (req, res) => {
  if (req.url === '/events') {                       // the studio page listens here
    res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', 'Access-Control-Allow-Origin': '*' });
    clients.add(res); req.on('close', () => clients.delete(res)); return;
  }
  if (req.url.startsWith('/audio/')) {
    const buf = audioStore.get(req.url.split('/').pop());
    res.writeHead(buf ? 200 : 404, { 'Content-Type': 'audio/mpeg', 'Access-Control-Allow-Origin': '*' }); return res.end(buf);
  }
  if (req.method === 'POST' && req.url === '/agent') { // point your agent's webhook here
    let body = ''; for await (const c of req) body += c;
    const ev = JSON.parse(body || '{}');             // verify the webhook signature here before trusting it
    if (ev.type === 'ghost_act') send(ev.input);     // the model called the tool directly
    else if (ev.type === 'message.completed') send({ say: ev.text, audio: await speak(ev.persona || 'nova', ev.text) });
    else { const cmd = toGhost(ev); if (cmd) send(cmd); }
    res.writeHead(204); return res.end();
  }
  res.writeHead(404); res.end();
}).listen(8787, () => console.log('bridge on http://localhost:8787'));

// In the page:
// const es = new EventSource('http://localhost:8787/events');
// es.onmessage = e => { const c = JSON.parse(e.data);
//   if (c.audio) NorrGhost.speakAudio('http://localhost:8787' + c.audio, c.say); else NorrGhost.apply(c); };
