# Dot Drop / Put a Dot On It: Baldessari activities

**`dot-drop.html` is the main activity:** an arcade-style art game for high schoolers. Spin the chance machine for a found film still, a mission and a palette; a film-leader countdown rolls; dots drop in with combos and points in 45 seconds; spin a caption; then the poster is revealed under a spotlight in a gallery with a museum label, score and artist type. No photos of visitors are used. Edit `CONFIG`, `PALETTES`, `CAPTIONS` and `MISSIONS` at the top of its script.

The calmer kiosk version and the paper kit are described below.

A 60-second graphic design activity for the College of Art and Design admissions table.
Visitors take a photo (or pick a "found" film still), cover faces with bold colored dots
in the manner of John Baldessari, add a deadpan caption, and leave with a finished poster.

## What's here

| File | What it is |
|---|---|
| `index.html` | Tablet/laptop app. Attract screen → Picture → Cover → Caption → Done. |
| `print.html` | No-screen paper kit: table sign, 4 poster cards, caption slips, facilitator sheet. |
| `stills.js` | The four found film stills, drawn in code so there are no photos to license. |

No build step and no internet required once the files are on the device.

## Running it at an event

1. Host the folder somewhere with HTTPS (GitHub Pages works: *Settings → Pages → Deploy from branch*).
   The live camera needs HTTPS. Opened as a local file, "Take my photo" falls back to the device's camera/photo picker.
2. Open it on an iPad in Safari, then *Share → Add to Home Screen* for a full-screen kiosk.
   Turn on *Guided Access* so visitors can't leave the app.
3. The attract screen loops on its own. A visitor taps **Make one** and follows the four steps.
4. **Send it to my phone** opens the share sheet (AirDrop, Messages, email). **Save image** downloads a 1080×1350 PNG.
5. After 75 seconds of no activity it goes back to the attract screen. Finished pieces show as a wall behind the start screen (stored on that device only).

**Speed controls for a busy table**
- **Let chance decide** picks a still, dots every face and writes a caption in one tap. The visitor only has to change one thing.
- **Dot all faces** covers every face in a found still at once.
- A red bar counts down 60 seconds as a soft nudge. Nothing gets locked when it runs out.

## Customizing

At the top of the `<script>` in `index.html`:

```js
const CONFIG = {
  school: "College of Art and Design",
  program: "Graphic Design",
  hashtag: "",            // e.g. "#DotYourFace", printed on every poster
  timerSeconds: 60,
  idleResetSeconds: 75,
  galleryMax: 24,
};
```

`CAPTIONS` and `TALKING_POINTS` sit right below it. Colors are CSS variables at the top of the file.
In `print.html`, edit `SCHOOL` and `CAPTIONS` near the bottom.

## Paper kit supplies

- `print.html` printed on letter paper (cardstock for pages 2–3)
- Round color-coding dot stickers, ½" and ¾", in red, yellow, blue, green and orange
- Black markers
- Painter's tape for a wall of finished pieces

## Why Baldessari

John Baldessari (1931–2020) covered faces in found film stills and press photos with flat
colored dots, which started as price-tag stickers, and paired images with plain, literal text.
Taking away the face makes you look at posture, gesture and composition. That is image
selection, hierarchy, color and type, the core of graphic design, done in under a minute.
