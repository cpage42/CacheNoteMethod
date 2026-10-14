---
tags: [observatory, telescope, procedure, draft]
source: phone notes, first walkthrough, Thu Oct 8 2026 (8:09–9:41 PM)
---
# Telescope Operation (draft)
Back to [[Home]]

> [!warning] Draft from one walkthrough
> These notes are rebuilt from phone notes and follow-up answers. Anything marked **❓** is still a gap to fill at the next, more thorough tutorial. The original notes are at the bottom, word for word.

---

## The three telescopes
| | What it is | Status / notes |
|---|---|---|
| **T1** | The **public / laymen's telescope**. Visual only: you look through the eyepiece. | Aim it with the **red dot sight**. It has a **star tracker** to follow the sky. To-do from the walkthrough: get GoTo working. |
| **T2** | The main imaging scope: a reflector with a camera, on the Gemini-controlled mount. | The **top spotter scope works**. The **spotter near the camera needs to be fixed**. Camera runs at **−25 °C**. Remount it once everything is working. |
| **T3** | The **big Air Force-owned telescope**. | Not operating it yet. For later: it starts in **PWI**. |

## Software and hardware
| Name | What it does |
|---|---|
| **TheSky (64-bit)**, "Sky64" | Planetarium and mount control. Talks to the Gemini controller. Used for star sync and for taking image series. |
| **Gemini** | Mount controller (Losmandy Gemini). Centering with the hand paddles, plus the "cold start" reset. |
| **PWI** (PlaneWave Interface) | Alternate setup for the focuser; T3 starts here. |
| **PrimaLuce** | Flat-field panel / cover. Controls the flats. |
| **PHD** (PHD2) | Autoguiding through the guide scope. |
| **CCDStack** | Stacks images and extracts the data. |
| **localhost** | Local web page on the observatory PC for powering components on and off. |
| **Roof** | Roll-off roof, opened and closed by an **Arduino on COM14**. Master control is in **Klema's room**. |

---

## Startup (T2)
1. **Lights** are near the door.
2. **Roof:** open it with the Arduino roof control on **COM14**. (Master roof control is in Klema's room.)
3. **Power:** turn on the equipment from the **localhost** page.
4. Open **TheSky64**.
5. **Connect** the computer to the telescope. This is the one manual step: everything else should be automatic.
6. **Camera cooling:** set T2's camera to **−25 °C**.

> [!tip] If the mount acts weird
> Do a **cold start** of the Gemini controller.

## Pointing and centering
- The **park position** is about **10° off true north** (in azimuth).
- **Centering on an object:** on the Gemini hand controller, set the speed to **C (Center)**, then nudge the object into the middle with the **paddles**.
  - The other settings are **S** and **G** ❓. On Gemini hand controllers these are usually **S = Slew** (fastest, for big moves) and **G = Guide** (slowest, for fine corrections). Confirm next time.
- **Star synchronization** in some other program i cannot remember: once a known star is centered, sync on it, so the mount's pointing model knows where it really is.

## Focus
- Use **Focus tools** with **1/10 s exposures** and **9×9 binning**, for fast, light images while focusing.
- **Refocus** if the temperature changes or anything looks off.
- PWI has an alternate focuser setup.

## Flats
- **PrimaLuce controls the flats.** Procedure to be added.

## Guiding and imaging
1. **Turn on the guide scope**. It takes a picture every **2–3 s** and corrects the mount's tracking.
2. Run **PHD** (PHD2) for guiding.
3. **Take a series:** in **TheSky**, under **Camera → Take series**.
4. **Process:** use **CCDStack** to stack the images and extract the data.

## Shutdown
1. **Disconnect the camera.**
2. **Telescope tools → center back to 10° off north** (azimuth), the park position.
3. **Disconnect the telescope.**
4. **Go into localhost** and **switch off:**
   - Gemini
   - PlaneWave
   - Focus
5. **Close the PrimaLuce** and **shut it off.**
6. **Close the roof** (COM14).
7. Lights off, lock up.

---

## Gaps to fill at the next tutorial
- [ ] Confirm what **S** and **G** do on the Gemini controller
- [ ] PrimaLuce flats procedure
- [ ] How to connect the computer to the telescope (which program, which button)
- [ ] Which program has Focus tools
- [ ] TheSky series settings: exposure, filters, number of frames
- [ ] CCDStack workflow: calibration (darks/flats), alignment, what "extract data" means
- [ ] Fixing the spotter near T2's camera, and remounting T2
- [ ] Getting GoTo working on T1
- [ ] "Driver for observatory website being phased out": what replaces it?
- [ ] When to use the roof master control in Klema's room instead of COM14

---

> [!quote]- Original phone notes (Thu Oct 8, 2026), word for word
> | Time | Note |
> |---|---|
> | 8:09 | Lights near door |
> | 8:10 | Master control for roof in klemas room |
> | 8:13 | First telescope inside |
> | 8:13 | Analog |
> | 8:14 | Get goto working |
> | 8:16 | Telescope 2 |
> | 8:16 | Top spotter working well |
> | 8:17 | Get both working well |
> | 8:22 | Telescope 3 similar operation to 2 |
> | 8:22 | No fixes needed |
> | 8:24 | Remount telescope 2 when everything is working |
> | 8:31 | Run t2 at -25 |
> | 8:31 | Power components w localhost |
> | 8:32 | Open roof with com14 arduino open/close |
> | 8:32 | All on right monitor |
> | 8:32 | Left monitor |
> | 8:32 | The sky (64) |
> | 8:33 | Everything should be automatic minus connection computer telescope |
> | 8:33 | Cold start for weird |
> | 8:34 | Sky64 talks to Gemini controller |
> | 8:36 | Park location 10 deg off from true north |
> | 8:38 | Pwi alternate setup for focuser |
> | 8:38 | For t3 start in pwi |
> | 8:39 | Refocus if temp off or other weird shit |
> | 8:45 | Driver for observatory website being phased out |
> | 8:50 | Focus tools |
> | 8:50 | 1/10s |
> | 8:50 | 9x9 |
> | 8:51 | (For exposure/binning) |
> | 8:52 | Primaluce controls flats |
> | 8:57 | In Gemini to center |
> | 8:57 | C |
> | 8:57 | Operate paddles |
> | 8:58 | Star synchronization in 64 |
> | 8:59 | Turn on guide scope to take pics every 2/3 sec to make adjustments |
> | 8:59 | PhD guiding |
> | 9:04 | For series |
> | 9:04 | Take series |
> | 9:05 | Under camera |
> | 9:10 | Ccd stack to extract data |
> | 9:39 | Disconnect cam |
> | 9:39 | Telescope tools |
> | 9:39 | Center back to 10 off north |
> | 9:40 | (azi) |
> | 9:40 | Disconnect telescope |
> | 9:40 | Go into localhost |
> | 9:40 | Switch off: |
> | 9:40 | Gemini plane wave focus |
> | 9:41 | Close primaluca |
> | 9:41 | Shut off primaluca |
