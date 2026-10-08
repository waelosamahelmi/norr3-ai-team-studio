# Rig controls

Every control is a number. Send them with `NorrGhost.set({...})` or inside `controls` in a `ghost_act` call. Values are smoothed with springs, so the character always moves into a pose instead of jumping.

## Eyes

| Control | What it does | Min | Max | Default |
|---|---|---|---|---|
| `eyeOpenL` | Left eye open | 0 | 1.3 | 1 |
| `eyeOpenR` | Right eye open | 0 | 1.3 | 1 |
| `eyeArc` | Closed eye shape (sleep to smile) | -1 | 1 | -0.8 |
| `lookX` | Look left to right | -1 | 1 | 0 |
| `lookY` | Look down to up | -1 | 1 | 0 |
| `pupil` | Pupil size | 0.2 | 0.7 | 0.42 |
| `lidUpperL` | Left upper lid drop | 0 | 1 | 0 |
| `lidUpperR` | Right upper lid drop | 0 | 1 | 0 |
| `lidTilt` | Lid angle (sad to cross) | -1 | 1 | 0 |
| `lidLower` | Lower lid (smiling eyes) | 0 | 1 | 0 |

## Brows

| Control | What it does | Min | Max | Default |
|---|---|---|---|---|
| `browRaiseL` | Left brow raise | -1 | 1 | 0 |
| `browRaiseR` | Right brow raise | -1 | 1 | 0 |
| `browTiltL` | Left brow angle | -1 | 1 | 0 |
| `browTiltR` | Right brow angle | -1 | 1 | 0 |
| `browArch` | Brow arch | -0.6 | 1 | 0.3 |

## Mouth

| Control | What it does | Min | Max | Default |
|---|---|---|---|---|
| `mouthOpen` | Open | 0 | 1 | 0 |
| `mouthWide` | Width | 0.55 | 1.4 | 1 |
| `mouthSmile` | Smile to frown | -1 | 1 | 0.35 |
| `mouthRound` | Round (oo) | 0 | 1 | 0 |
| `mouthAsym` | Smirk | -1 | 1 | 0 |
| `teeth` | Teeth showing | 0 | 1 | 1 |
| `tongue` | Tongue up | 0 | 1 | 0 |

## Face

| Control | What it does | Min | Max | Default |
|---|---|---|---|---|
| `blush` | Blush | 0 | 1 | 0.25 |
| `glow` | Inner glow | 0 | 1 | 0.15 |

## Body

| Control | What it does | Min | Max | Default |
|---|---|---|---|---|
| `stretch` | Squash and stretch | -0.4 | 0.45 | 0 |
| `leanX` | Lean sideways | -0.45 | 0.45 | 0 |
| `leanZ` | Lean forward | -0.3 | 0.3 | 0 |
| `twist` | Twist | -0.8 | 0.8 | 0 |
| `turn` | Turn | -1.2 | 1.2 | 0 |
| `tilt` | Head tilt | -0.4 | 0.4 | 0 |
| `hover` | Float height | -0.3 | 0.7 | 0 |
| `skirt` | Hem flutter | 0 | 2 | 1 |
| `melt` | Melt | 0 | 0.2 | 0 |

## Hands

| Control | What it does | Min | Max | Default |
|---|---|---|---|---|
| `handLX` | Left hand x | -1.2 | 1.2 | 0 |
| `handLY` | Left hand y | -1 | 1.4 | 0 |
| `handLZ` | Left hand z | -1 | 1.2 | 0 |
| `handRX` | Right hand x | -1.2 | 1.2 | 0 |
| `handRY` | Right hand y | -1 | 1.4 | 0 |
| `handRZ` | Right hand z | -1 | 1.2 | 0 |

## Fingers

| Control | What it does | Min | Max | Default |
|---|---|---|---|---|
| `handLCurl` | Left fingers curl | 0 | 1 | 0.35 |
| `handRCurl` | Right fingers curl | 0 | 1 | 0.35 |
| `handLSpread` | Left fingers spread | 0 | 1 | 0.35 |
| `handRSpread` | Right fingers spread | 0 | 1 | 0.35 |
| `handLPoint` | Left index point | 0 | 1 | 0 |
| `handRPoint` | Right index point | 0 | 1 | 0 |
| `handLRoll` | Left wrist roll | -3.2 | 3.2 | 0 |
| `handRRoll` | Right wrist roll | -3.2 | 3.2 | 0 |

## States

| State | What it looks like |
|---|---|
| `idle` | Floats, follows the cursor with the eyes, blinks, small persona quirks. |
| `listening` | Eyes wide, brows up, leans in, small nods. |
| `talking` | Lip sync, brow emphasis, beat gestures with one hand. |
| `working` | Laptop pops in, types in bursts with finger taps and pressed keys, glances up. |
| `thinking` | Hand on chin, eyes up, pursed lips, lime dots orbit the head. |
| `resting` | Eyes closed, sinks and melts slightly, slow breathing, z bubbles. |

## Emotions

Blend over any state with an intensity from 0 to 1: `neutral`, `happy`, `joy`, `sad`, `surprised`, `confused`, `focused`, `proud`, `embarrassed`, `sleepy`, `excited`.

## Gestures

| Gesture | Length (s) |
|---|---|
| `wave` (Wave) | 2.1 |
| `nod` (Nod) | 1.2 |
| `shake` (Shake head) | 1.2 |
| `shrug` (Shrug) | 1.8 |
| `celebrate` (Celebrate) | 2.6 |
| `surprise` (Surprise) | 1.5 |
| `laugh` (Laugh) | 2.2 |
| `wink` (Wink) | 1 |
| `idea` (Idea) | 2 |
| `spin` (Spin) | 1.3 |
| `hop` (Hop) | 0.95 |
| `poke` (Poke) | 1.1 |
