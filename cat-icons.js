// Cartoon icons for the five workout groups: a lifter doing each group's signature
// move on a colored circle. Built from a few shapes so they stay small and editable.
const O = "#22262b", SK = "#f6c9a0", HAIR = "#4a3222", SHIRT = "#ffffff", SHORTS = "#2f3a4a", BAR = "#c9ced3", PLATE = "#ffd43b";
export const CAT_COLORS = { back: "#2fbfab", legs: "#ff9f43", arms: "#a77bf3", chest: "#ff6b6b", shoulders: "#4dabf7", cardio: "#f06595" };

const limb = (d, c = SK, w = 3.2) => `<path d="${d}" fill="none" stroke="${O}" stroke-width="${w + 2.2}" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const head = (x, y, r = 3.6) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${SK}" stroke="${O}" stroke-width="1.2"/><path d="M${x - r} ${y - .2}A${r} ${r} 0 0 1 ${x + r} ${y - .2}Q${x} ${y - r * .75} ${x - r} ${y - .2}z" fill="${HAIR}" stroke="${O}" stroke-width="1" stroke-linejoin="round"/>`;
const torso = d => `<path d="${d}" fill="${SHIRT}" stroke="${O}" stroke-width="1.2" stroke-linejoin="round"/>`;
const bar = (x1, x2, y) => limb(`M${x1} ${y}H${x2}`, BAR, 1.6);
const plate = (x, y, h = 8, w = 2.6) => `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="1" fill="${PLATE}" stroke="${O}" stroke-width="1.2"/>`;
const legsStand = limb("M14 22.5 13.6 28", SHORTS) + limb("M18 22.5 18.4 28", SHORTS);

const FIG = {
  // Pull-up
  back: bar(3, 29, 5) + limb("M10 5 11.8 15") + limb("M22 5 20.2 15") + legsStand + torso("M11.5 14.5h9l-1.4 8h-6.2z") + head(16, 11),
  // Barbell squat
  legs: limb("M13 17 9 21", SHORTS) + limb("M9 21 10 27") + limb("M19 17 23 21", SHORTS) + limb("M23 21 22 27") + torso("M12 11h8l-.6 6.5h-6.8z") + bar(3, 29, 10) + plate(4.6, 10) + plate(27.4, 10) + limb("M12.5 12 9.5 10") + limb("M19.5 12 22.5 10") + head(16, 6.4, 3.3),
  // Double-biceps flex
  arms: legsStand + limb("M11.5 13.5 6.5 13.5 6.8 7.5") + limb("M20.5 13.5 25.5 13.5 25.2 7.5") + `<circle cx="8.6" cy="12" r="2.3" fill="${SK}" stroke="${O}" stroke-width="1.1"/><circle cx="23.4" cy="12" r="2.3" fill="${SK}" stroke="${O}" stroke-width="1.1"/>` + torso("M11.3 13h9.4l-1.5 9.5h-6.4z") + head(16, 8.6),
  // Bench press
  chest: `<path d="M7.5 23v5M24.5 23v5" stroke="${O}" stroke-width="2" stroke-linecap="round"/><rect x="5" y="20.5" width="22" height="3" rx="1.2" fill="#8a5a44" stroke="${O}" stroke-width="1.2"/>` + limb("M10 18.5 5.8 18.8", SHORTS) + limb("M5.8 18.8 5.4 27") + limb("M13 16.5V9.5") + limb("M19 16.5V9.5") + torso("M9.5 16h12.5a2.2 2.2 0 0 1 0 4.4H9.5z") + head(24.2, 16.4, 3) + bar(3.5, 28.5, 9) + plate(5.2, 9) + plate(26.8, 9),
  // Overhead dumbbell press
  shoulders: legsStand + limb("M11.8 15.5 8 12 8 5.8") + limb("M20.2 15.5 24 12 24 5.8") + torso("M11.5 14.5h9l-1.4 8h-6.2z") + head(16, 11) + bar(5.2, 10.8, 5.2) + plate(5.4, 5.2, 5, 2.2) + plate(10.6, 5.2, 5, 2.2) + bar(21.2, 26.8, 5.2) + plate(21.4, 5.2, 5, 2.2) + plate(26.6, 5.2, 5, 2.2),
  // Running on a treadmill
  cardio: limb("M25.5 25.5 27 14.5", BAR, 1.6) + `<rect x="4.5" y="24.5" width="22" height="3" rx="1.5" fill="${SHORTS}" stroke="${O}" stroke-width="1.2"/>` + limb("M14.2 12.8 10.6 15.6 12.2 18.4") + limb("M15.4 18.2 12.4 20.8", SHORTS) + limb("M12.4 20.8 9.2 22.2") + limb("M17.4 18 20.4 20.4", SHORTS) + limb("M20.4 20.4 19.4 24") + torso("M13.4 11.2h6.2l-1.6 7.4h-5.2z") + limb("M18.8 12.6 21.8 15.6 24.4 13.4") + head(17.6, 7.4, 3.3),
};
const cache = {};
export const catIcon = (c, size = 40) => {
  if (!FIG[c]) return "";
  return cache[c + size] || (cache[c + size] = `<svg class="cat-ic" width="${size}" height="${size}" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="15.5" fill="${CAT_COLORS[c]}"/><g>${FIG[c]}</g></svg>`);
};
