# Specification

## Summary
**Goal:** Provide navigable word pages for every alphabet letter (A–Z) using static curated word lists.

**Planned changes:**
- Update the A–Z alphabet grid so every letter tile is consistently clickable and navigates to that letter’s words page.
- Refactor view/routing to support displaying a words page for any selected letter (A–Z), including updating the header subtitle based on the selected letter and view.
- Add static curated word lists for letters B–Z and unify them with the existing A list so the correct list and count render for the selected letter.
- Add a clear “Back to Alphabet” control on letter pages to return to the main grid.

**User-visible outcome:** Users can click any letter A–Z to view a dedicated page of curated words for that letter (with an accurate word count), see the header update to match the selected letter, and easily return to the main alphabet grid.
