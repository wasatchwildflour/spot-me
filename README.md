# Spot Me

A phone-first workout log for two people: build a plan for Back, Legs, Arms, Chest or Shoulders, log sets together, and keep every exercise badge fresh.

- **Plans:** pick a category, choose its focus areas (for example lats or upper back), the equipment you want, and how many exercises.
- **Badges:** every exercise is a badge whose ring drains over time. It is green for 7 days, then yellow, then red after 14 (adjustable in Settings).
- **Milestones:** awards that never expire.
- **Sync:** both phones share one log through Firebase (Firestore with anonymous sign-in). It also works offline at the gym and catches up when the phone reconnects.
- **Install:** add it to your home screen from Safari or Chrome.

Static site with no build step. `config.js` holds the Firebase web config. Those values are public identifiers, not secrets; access is controlled by the Firestore rules.
