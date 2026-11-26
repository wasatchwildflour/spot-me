// Exercise library. cat = workout category, opt = sub-option within it.
export const CATS = {
  back:      { n: "Back",      opts: { width: "Width", thick: "Thickness", lower: "Lower back", traps: "Traps" } },
  legs:      { n: "Legs",      opts: { quads: "Quads", hams: "Hamstrings", glutes: "Glutes", calves: "Calves" } },
  arms:      { n: "Arms",      opts: { biceps: "Biceps", triceps: "Triceps", forearms: "Forearms" } },
  chest:     { n: "Chest",     opts: { upper: "Upper", mid: "Middle", lower: "Lower", fly: "Flys" } },
  shoulders: { n: "Shoulders", opts: { front: "Front", side: "Side", rear: "Rear" } },
  cardio:    { n: "Cardio",    opts: { steady: "Steady", hiit: "Intervals", climb: "Climb" } },
};
export const CAT_ORDER = ["back", "legs", "arms", "chest", "shoulders", "cardio"];
export const LIFT_CATS = ["back", "legs", "arms", "chest", "shoulders"];
export const EQ = { barbell: "Barbell", dumbbell: "Dumbbells", machine: "Machine", cable: "Cable", bodyweight: "Bodyweight", cardio: "Cardio machine" };
export const EQ_GROUPS = { free: { n: "Free weights", eq: ["barbell", "dumbbell"] }, machine: { n: "Machines", eq: ["machine"] }, cable: { n: "Cables", eq: ["cable"] }, bodyweight: { n: "Bodyweight", eq: ["bodyweight"] }, cardio: { n: "Cardio machines", eq: ["cardio"] } };
// Home gym equipment. Placeholder until the real home equipment list is added.
export const HOME_EQ = ["dumbbell", "bodyweight"];
export const WHERE = {
  barbell: "Squat racks, bench stations or a platform in the free-weight area.",
  dumbbell: "The dumbbell racks; grab a bench if the move needs one.",
  machine: "The selectorized or plate-loaded machine lines. Set the seat and pads before your first set.",
  cable: "Any cable column or crossover station. Set the pulley height and attachment first.",
  bodyweight: "Open turf, a pull-up/dip station, or the stretching area.",
  cardio: "The cardio floor: treadmills, bikes, rowers, ellipticals and stair climbers.",
};

export const EX = [];
function X(id, n, cat, opt, eq, t, m, steps, cues, avoid, flags) {
  EX.push(Object.assign({ id, n, cat, opt, eq, t, m, steps, cues, avoid }, flags || {}));
}

/* ============ CHEST ============ */
X("bb-bench","Barbell Bench Press","chest","mid","barbell","c","Chest, triceps, front delts",
["Lie on a flat bench with your eyes under the bar and feet flat on the floor.","Grip a little wider than shoulder width. Pull your shoulder blades together and down.","Unrack and hold the bar over your shoulders with arms straight.","Lower under control to your mid-chest, elbows about 45° from your sides.","Press up and slightly back until your arms are straight."],
["Butt stays on the bench, small arch in the upper back","Wrists stacked over elbows","Use a spotter or safety arms for heavy sets"],"Bouncing the bar off your chest or flaring your elbows straight out.");
X("db-bench","Dumbbell Bench Press","chest","mid","dumbbell","c","Chest, triceps, front delts",
["Sit on a flat bench with dumbbells on your thighs, then lie back and kick them up to chest level.","Press them up over your chest, palms facing your feet.","Lower slowly until your elbows are just below the bench line.","Press up and slightly together without clanking the bells."],
["Shoulder blades pinned back","Control the bottom"],"Lowering too deep and letting the shoulders roll forward.");
X("machine-chest","Machine Chest Press","chest","mid","machine","c","Chest, triceps",
["Set the seat so the handles line up with your mid-chest.","Sit with your back flat on the pad and grip the handles.","Press forward until your arms are nearly straight.","Return slowly until you feel a stretch in your chest."],
["Safe to push close to failure","Shoulders down and back"],"Letting the weight stack slam between reps.");
X("smith-bench","Smith Machine Bench Press","chest","mid","machine","c","Chest, triceps",
["Set a flat bench under the Smith bar so it lines up with your mid-chest.","Set the safety stops just above chest height.","Grip slightly wider than shoulders, rotate the hooks to unrack.","Lower to your chest, then press straight up.","Rotate the bar back onto the hooks when done."],
["Great for training without a spotter","Keep elbows at 45°"],"Bench set too far forward or back so the bar lands on your neck or belly.");
X("pushup","Push-up","chest","mid","bodyweight","c","Chest, triceps, core",
["Hands slightly wider than shoulders, body straight from head to heels.","Lower your chest to just above the floor, elbows about 45° out.","Press back up to straight arms.","Elevate your hands on a bench to make it easier, feet on a bench to make it harder."],
["Squeeze glutes and abs to stay rigid","Chest leads, hips follow"],"Hips sagging or head dropping.",{bw:1});
X("incline-bb","Incline Barbell Press","chest","upper","barbell","c","Upper chest, front delts, triceps",
["Use an incline bench station or a bench set to 30° in a rack.","Grip slightly wider than shoulders and unrack.","Lower to your upper chest, just below the collarbone.","Press straight up until your arms lock out."],
["Feet planted, shoulder blades squeezed","Bar path straight up and down"],"Lifting your hips off the bench to flatten the angle.");
X("incline-db","Incline Dumbbell Press","chest","upper","dumbbell","c","Upper chest, front delts",
["Set an adjustable bench to 30–45°.","Kick the dumbbells up and hold them at upper-chest height.","Press up over your upper chest until your arms are straight.","Lower under control until you feel a stretch across the upper chest."],
["30° keeps it on the chest, not the shoulders","Elbows slightly tucked"],"Setting the bench too steep, which turns it into a shoulder press.");
X("incline-machine","Incline Machine Press","chest","upper","machine","c","Upper chest, front delts",
["Set the seat so the handles start at upper-chest height.","Sit tall with your back on the pad.","Press up and forward until your arms are straight.","Return slowly to a stretch."],
["Drive through the heel of your palm","Keep your chest up"],"Seat too low so the press turns into a shoulder press.");
X("low-high-fly","Low-to-High Cable Fly","chest","upper","cable","i","Upper chest",
["Set both pulleys at the lowest position with D-handles.","Step forward into a split stance, hands low by your hips, palms forward.","Sweep your hands up and together to about chin height.","Squeeze, then lower slowly along the same arc."],
["Fixed soft bend in the elbows","Think 'scoop up'"],"Shrugging the shoulders as the hands come up.");
X("decline-press","Decline Bench Press","chest","lower","barbell","c","Lower chest, triceps",
["Lock your legs under the pads of a decline bench.","Unrack the bar with arms straight over your lower chest.","Lower to your lower chest.","Press straight back up."],
["Use a spotter; unracking on a decline is awkward","Controlled tempo"],"Letting the bar drift toward your neck.");
X("dip","Dip (Assisted or Bodyweight)","chest","lower","bodyweight","c","Lower chest, triceps, front delts",
["Use the dip station or the assisted dip/chin machine (more assist weight makes it easier).","Support yourself with straight arms, lean your torso slightly forward.","Lower until your upper arms are about parallel to the floor.","Press back up to straight arms."],
["Lean forward for chest, stay upright for triceps","Shoulders away from ears"],"Dropping too deep, which stresses the front of the shoulder.",{bw:1});
X("high-low-fly","High-to-Low Cable Fly","chest","lower","cable","i","Lower chest",
["Set both pulleys high with D-handles.","Step forward, arms out wide and up, slight elbow bend.","Pull your hands down and together in front of your hips.","Squeeze, then return slowly."],
["Lean forward slightly","Hands meet around belly-button height"],"Bending the elbows into a pressing motion.");
X("cable-fly","Cable Fly (Mid)","chest","fly","cable","i","Chest",
["Set both pulleys at shoulder height with D-handles.","Step forward into a split stance, arms out wide with soft elbows.","Bring your hands together in a wide hugging arc in front of your chest.","Squeeze for a second, then let your arms open slowly."],
["Elbow angle stays fixed","Think 'hug a tree'"],"Turning it into a press by bending and straightening the elbows.");
X("pec-deck","Pec Deck Fly","chest","fly","machine","i","Chest",
["Set the seat so the handles are at chest height; adjust the start position for a comfortable stretch.","Sit tall with your back on the pad and grab the handles.","Bring the handles together in front of you in an arc.","Hold the squeeze, then return slowly."],
["Lead with the elbows","Don't let the shoulders roll forward"],"Starting too far back and straining the front of the shoulder.");
X("db-fly","Incline Dumbbell Fly","chest","fly","dumbbell","i","Chest, upper chest",
["Lie on a bench set to about 30° with dumbbells over your chest, palms facing in.","With a slight elbow bend, open your arms wide in an arc.","Stop at a deep stretch, about level with the bench.","Bring them back up the same arc and squeeze."],
["Light weight, slow tempo","Elbows soft but fixed"],"Going too heavy and pressing instead of flying.");

/* ============ BACK ============ */
X("lat-pulldown","Lat Pulldown","back","width","cable","c","Lats, biceps",
["Set the thigh pad so your legs are locked under it.","Grip the bar a little wider than shoulders, palms facing away.","Lean back slightly and pull the bar to your upper chest.","Squeeze your shoulder blades down, then let the bar rise slowly to a full stretch."],
["Pull elbows toward your back pockets","Chest up to meet the bar"],"Leaning way back and swinging the weight down.");
X("pullup","Pull-up (Assisted or Bodyweight)","back","width","bodyweight","c","Lats, biceps",
["Use a pull-up bar or the assisted pull-up machine (more assist weight makes it easier).","Grip shoulder width, palms facing away, and hang with straight arms.","Pull your chest toward the bar until your chin clears it.","Lower all the way down under control."],
["Start each rep by pulling the shoulders down","Note assist weight in the notes"],"Half reps that never reach a full hang.",{bw:1});
X("cg-pulldown","Close-Grip Pulldown","back","width","cable","c","Lats, biceps",
["Attach a V-handle to the pulldown station.","Sit with thighs under the pad, arms straight overhead.","Pull the handle to your upper chest, elbows tight to your sides.","Return slowly to a full stretch."],
["Lean back about 15°","Squeeze lats at the bottom"],"Rounding forward at the top and losing the stretch.");
X("sa-pulldown","Single-Arm Cable Pulldown","back","width","cable","i","Lats",
["Set a D-handle high on a cable column and kneel or sit facing it.","Hold the handle with one arm straight overhead.","Pull your elbow down to your side, slightly rotating your palm in.","Return slowly. Finish one side, then switch."],
["Big stretch at the top","Elbow drives to the hip"],"Twisting the torso to move the weight.");
X("straight-arm","Straight-Arm Pulldown","back","width","cable","i","Lats",
["Attach a straight bar or rope to a high pulley.","Step back, hinge slightly, arms straight out in front.","Sweep the bar down in an arc to your thighs, keeping arms straight.","Let it rise slowly back to eye level."],
["Feel it under the armpits","Elbows soft but locked in position"],"Bending the elbows into a triceps pushdown.");
X("seated-row","Seated Cable Row","back","thick","cable","c","Mid back, lats, biceps",
["Sit at the low row station with feet on the platform and knees slightly bent.","Grab the V-handle and sit tall with arms extended.","Row the handle to your belly button, driving elbows back.","Squeeze your shoulder blades, then return slowly to a full stretch."],
["Torso still, arms and back do the work","Chest proud"],"Rocking back and forth to move the weight.");
X("bb-row","Barbell Bent-Over Row","back","thick","barbell","c","Mid back, lats, rear delts",
["Hold the bar overhand just outside your knees.","Hinge at the hips until your torso is about 45°, back flat.","Row the bar to your lower ribs.","Lower under control to straight arms."],
["Brace your core","Bar stays close to your legs"],"Standing taller each rep and turning it into a shrug.");
X("db-row","One-Arm Dumbbell Row","back","thick","dumbbell","c","Lats, mid back",
["Put one knee and hand on a flat bench, other foot on the floor.","Hold a dumbbell in your free hand, arm hanging straight.","Row toward your hip, elbow close to your side.","Lower slowly. Finish all reps, then switch sides."],
["Pull to the hip, not the shoulder","Back flat like a table"],"Twisting the torso to heave the weight.");
X("machine-row","Chest-Supported Machine Row","back","thick","machine","c","Mid back, lats",
["Adjust the chest pad so you can reach the handles with arms fully extended.","Press your chest into the pad and grab the handles.","Row back, driving elbows behind you.","Squeeze and return slowly."],
["Chest stays on the pad","Wide grip = upper back, neutral grip = lats"],"Lifting your chest off the pad to cheat.");
X("tbar","T-Bar Row","back","thick","machine","c","Mid back, lats, traps",
["Load the T-bar row (or landmine with a V-handle). Stand on the platform.","Hinge forward with a flat back and grab the handles.","Row the weight to your chest.","Lower under control to straight arms."],
["Keep the chest up","Drive elbows back, not up"],"Rounding the lower back.");
X("deadlift","Conventional Deadlift","back","lower","barbell","c","Lower back, glutes, hamstrings",
["Stand with mid-foot under the bar, feet hip width.","Hinge down and grip just outside your legs, shins touching the bar.","Flatten your back, chest up, big breath and brace.","Push the floor away and stand up tall, bar sliding up your legs.","Lower by pushing hips back, then bending knees once the bar passes them."],
["Bar stays in contact with your legs","Hips and shoulders rise together"],"Rounding the lower back or jerking the bar off the floor.");
X("rack-pull","Rack Pull","back","lower","barbell","c","Lower back, traps, glutes",
["Set the safety arms in a rack so the bar sits just below your knees.","Grip just outside your legs, back flat, chest up.","Drive your hips forward to stand tall.","Lower the bar back to the pins under control."],
["Shorter range lets you go heavier","Squeeze glutes at the top"],"Leaning back at lockout.");
X("back-ext","Back Extension","back","lower","bodyweight","i","Lower back, glutes",
["Set the 45° bench so the pad sits just below your hip bones.","Cross your arms over your chest (hold a plate to add weight).","Lower your torso by hinging at the hips.","Raise back up until your body is in a straight line."],
["Squeeze glutes at the top","Stop at straight, don't over-arch"],"Hyperextending the lower back.",{bw:1});
X("shrug","Dumbbell Shrug","back","traps","dumbbell","i","Traps",
["Stand tall with heavy dumbbells at your sides.","Lift your shoulders straight up toward your ears.","Pause one second at the top.","Lower slowly."],
["Straight up and down","Arms stay straight"],"Rolling the shoulders in circles.");
X("bb-shrug","Barbell Shrug","back","traps","barbell","i","Traps",
["Set the bar in a rack at mid-thigh height and grip just outside your legs.","Stand tall holding the bar.","Shrug straight up and pause.","Lower slowly."],
["Use straps if your grip gives out first","Big pause at the top"],"Bending the elbows to help.");
X("farmer","Farmer's Carry","back","traps","dumbbell","i","Traps, grip, core",
["Pick up heavy dumbbells, one in each hand.","Stand tall, shoulders back.","Walk with short, quick steps for the target time.","Set them down with a flat back."],
["Log seconds in the reps field","Don't let the weights swing"],"Leaning or shuffling with a rounded back.",{time:1});

/* ============ SHOULDERS ============ */
X("ohp","Standing Overhead Press","shoulders","front","barbell","c","Front delts, triceps",
["Set the bar at upper-chest height in the rack. Grip just outside shoulders.","Unrack with the bar on your front shoulders.","Squeeze glutes and abs, then press the bar straight overhead.","Move your head back to let the bar pass, then push your head through at the top.","Lower to your upper chest under control."],
["Ribs down, don't lean back","Finish with biceps by your ears"],"Arching the lower back to push the weight up.");
X("db-shoulder","Seated Dumbbell Shoulder Press","shoulders","front","dumbbell","c","Front & side delts, triceps",
["Set a bench upright.","Bring dumbbells to shoulder height, palms forward.","Press up until arms are straight and the bells nearly touch.","Lower to about ear level."],
["Back flat on the pad","Wrists stacked over elbows"],"Lowering too far and losing tension.");
X("machine-shoulder","Machine Shoulder Press","shoulders","front","machine","c","Front delts, triceps",
["Set the seat so the handles start at shoulder height.","Sit with your back on the pad and grip the handles.","Press up until your arms are straight.","Lower slowly."],
["Steady tempo","Head against the pad"],"Seat too low so you start below the shoulder.");
X("arnold","Arnold Press","shoulders","front","dumbbell","c","Front & side delts",
["Sit on an upright bench holding dumbbells at chin height, palms facing you.","As you press up, rotate your palms to face forward.","Finish with arms straight overhead.","Reverse the rotation on the way down."],
["Smooth rotation","Lighter than a regular press"],"Rushing the rotation and losing control.");
X("front-raise","Dumbbell Front Raise","shoulders","front","dumbbell","i","Front delts",
["Stand tall holding dumbbells in front of your thighs.","With straight arms, raise one or both to eye level.","Pause, then lower slowly."],
["Brace your core","No leaning back"],"Swinging the weight up with your hips.");
X("lat-raise","Dumbbell Lateral Raise","shoulders","side","dumbbell","i","Side delts",
["Stand tall with light dumbbells at your sides, slight bend in the elbows.","Raise your arms out to the sides until they reach shoulder height.","Lead with your elbows.","Lower slowly over about two seconds."],
["Light weight, strict form","Think 'push the walls apart'"],"Swinging and shrugging the weight up.");
X("cable-lat","Cable Lateral Raise","shoulders","side","cable","i","Side delts",
["Set a pulley at the lowest position with a D-handle.","Stand side-on, holding the handle with the far hand across your body.","Raise your arm out to the side to shoulder height.","Lower slowly. Finish one side, then switch."],
["Constant tension","Lean away slightly for more range"],"Going too heavy and using momentum.");
X("machine-lat","Machine Lateral Raise","shoulders","side","machine","i","Side delts",
["Set the seat so the pivot lines up with your shoulders.","Place your arms against the pads.","Raise your elbows out to shoulder height.","Lower slowly."],
["Push with the elbows, not the hands","Pause at the top"],"Shrugging to start each rep.");
X("upright","Cable Upright Row","shoulders","side","cable","i","Side delts, traps",
["Attach a straight bar or rope to the low pulley.","Hold it in front of your thighs with a shoulder-width grip.","Pull up along your body, elbows leading, to lower-chest height.","Lower slowly."],
["Stop at lower chest to protect shoulders","Elbows higher than hands"],"Pulling too high with a narrow grip.");
X("rear-delt","Reverse Pec Deck","shoulders","rear","machine","i","Rear delts, upper back",
["On the pec deck, face the pad and set the handles to the rear position.","Grab the handles with arms straight out in front.","Sweep your arms back in a wide arc until they line up with your body.","Return slowly."],
["Soft bend in the elbows","Let the rear delts work, don't over-squeeze the back"],"Shrugging toward your ears.");
X("face-pull","Face Pull","shoulders","rear","cable","i","Rear delts, rotator cuff",
["Set a rope at face height.","Grab the rope ends, palms in, step back to straighten arms.","Pull toward your face, splitting the ends past your ears.","Rotate so your fists end beside your head, then return slowly."],
["Elbows high","Great for shoulder health"],"Pulling to the chest with elbows low.");
X("db-reverse-fly","Bent-Over Reverse Fly","shoulders","rear","dumbbell","i","Rear delts",
["Hold light dumbbells and hinge forward until your torso is nearly parallel to the floor.","Let the arms hang with a soft elbow bend.","Raise the dumbbells out to the sides.","Lower slowly."],
["Lead with the pinkies","Head neutral"],"Standing up as you lift.");

/* ============ ARMS ============ */
X("bb-curl","EZ-Bar Curl","arms","biceps","barbell","i","Biceps",
["Hold an EZ bar on the angled grips, arms straight.","Keep elbows pinned to your sides.","Curl the bar up toward your shoulders.","Squeeze, then lower slowly to full extension."],
["Elbows stay still","Full stretch at the bottom"],"Swinging the hips to throw the weight up.");
X("db-curl","Dumbbell Curl","arms","biceps","dumbbell","i","Biceps",
["Stand with dumbbells at your sides, palms forward.","Curl both up, elbows by your sides.","Squeeze at the top.","Lower slowly all the way down."],
["Turn the pinky up at the top","Alternate arms if form breaks"],"Elbows drifting forward.");
X("incline-curl","Incline Dumbbell Curl","arms","biceps","dumbbell","i","Biceps (long head)",
["Set a bench to about 45° and lie back with arms hanging straight down.","Curl the dumbbells up without moving your upper arms.","Lower slowly into the stretch."],
["Arms stay behind your body","Lighter than standing curls"],"Bringing the elbows forward.");
X("cable-curl","Cable Curl","arms","biceps","cable","i","Biceps",
["Attach a straight or EZ bar to the low pulley.","Stand close, arms straight, elbows by your sides.","Curl the bar to your shoulders.","Lower slowly against the cable."],
["Constant tension","Step back slightly"],"Leaning back to finish reps.");
X("preacher","Preacher Curl Machine","arms","biceps","machine","i","Biceps",
["Set the seat so your armpits sit snug on top of the pad.","Grab the handles with arms nearly straight.","Curl up until your forearms are vertical.","Lower slowly until arms are almost straight."],
["Don't lock out hard at the bottom","Pause at the top"],"Lifting your butt off the seat.");
X("conc-curl","Concentration Curl","arms","biceps","dumbbell","i","Biceps",
["Sit on a bench, feet wide, elbow braced against your inner thigh.","Let the dumbbell hang with your arm straight.","Curl up toward your shoulder, squeeze hard.","Lower slowly. Switch arms."],
["Upper arm stays glued to the thigh","Slow negative"],"Using the shoulder to lift.");
X("pushdown","Cable Rope Pushdown","arms","triceps","cable","i","Triceps",
["Attach a rope to the high pulley.","Elbows pinned to your sides, forearms up.","Push down until arms are straight, splitting the rope at the bottom.","Let it rise slowly to about 90°."],
["Upper arms don't move","Squeeze at lockout"],"Leaning over and pushing with bodyweight.");
X("bar-pushdown","Straight-Bar Pushdown","arms","triceps","cable","i","Triceps",
["Attach a straight bar to the high pulley.","Grip overhand, shoulder width, elbows at your sides.","Push down to straight arms.","Return slowly to 90°."],
["Wrists straight","Stand tall"],"Elbows flaring forward as it gets hard.");
X("oh-ext","Overhead Cable Extension","arms","triceps","cable","i","Triceps (long head)",
["Attach a rope to a low or mid pulley and face away from the stack.","Hold the rope behind your head, elbows forward.","Extend your arms overhead until straight.","Lower slowly for a deep stretch."],
["Keep elbows narrow","Staggered stance for balance"],"Elbows flaring wide.");
X("skull","EZ-Bar Skull Crusher","arms","triceps","barbell","i","Triceps",
["Lie on a flat bench holding an EZ bar over your chest.","Bend only at the elbows to lower the bar toward your forehead.","Stop just behind your head, then extend back up."],
["Elbows point at the ceiling","Light and controlled"],"Elbows flaring and turning it into a press.");
X("cgbp","Close-Grip Bench Press","arms","triceps","barbell","c","Triceps, chest",
["Set up like a bench press with hands about shoulder width.","Lower to your lower chest, elbows tucked.","Press up to lockout."],
["No narrower than shoulder width","Elbows brush your sides"],"Gripping too narrow and straining the wrists.");
X("tri-dip-machine","Seated Dip Machine","arms","triceps","machine","c","Triceps, chest",
["Set the seat so the handles are at your sides with elbows bent.","Grab the handles and sit tall.","Press down until your arms are straight.","Return slowly to about 90°."],
["Chest up","Shoulders down"],"Shoulders creeping up toward the ears.");
X("db-kickback","Dumbbell Kickback","arms","triceps","dumbbell","i","Triceps",
["Brace one hand on a bench, hinge forward with a flat back.","Upper arm tight to your side and parallel to the floor.","Straighten your arm back fully.","Lower to 90° slowly."],
["Upper arm stays locked","Light weight, hard squeeze"],"Swinging the upper arm.");
X("hammer","Hammer Curl","arms","forearms","dumbbell","i","Brachialis, forearms, biceps",
["Hold dumbbells at your sides, palms facing each other.","Curl them up keeping the neutral grip.","Pause, then lower slowly."],
["Builds arm thickness","Wrists straight"],"Using body swing.");
X("reverse-curl","Reverse-Grip EZ Curl","arms","forearms","barbell","i","Forearms, brachialis",
["Hold an EZ bar with palms facing down, hands shoulder width.","Elbows pinned to your sides.","Curl up to shoulder height.","Lower slowly."],
["Lighter than normal curls","Keep wrists flat"],"Letting the wrists bend back.");
X("wrist-curl","Dumbbell Wrist Curl","arms","forearms","dumbbell","i","Forearm flexors",
["Sit with forearms on your thighs, palms up, wrists just past your knees.","Let the dumbbells roll down to your fingertips.","Curl your wrists up as high as you can.","Lower slowly."],
["High reps work well","Forearms stay down"],"Lifting the forearms off your legs.");

/* ============ LEGS ============ */
X("squat","Barbell Back Squat","legs","quads","barbell","c","Quads, glutes, hamstrings",
["Set the bar at upper-chest height and the safety arms just below your bottom position.","Rest the bar on your upper back, hands just outside shoulders.","Unrack, step back, feet shoulder width, toes slightly out.","Brace, then sit down and back until thighs are at least parallel.","Drive up through your whole foot."],
["Knees track over toes","Big breath before each rep","Always set the safety arms"],"Knees caving inward or heels lifting.");
X("goblet","Goblet Squat","legs","quads","dumbbell","c","Quads, glutes",
["Hold a dumbbell vertically against your chest.","Feet shoulder width, toes out slightly.","Squat down between your knees, elbows inside your thighs.","Stand back up, squeezing glutes at the top."],
["Great warm-up squat","Stay tall"],"Rounding forward.");
X("leg-press","Leg Press","legs","quads","machine","c","Quads, glutes",
["Sit with your back flat and feet shoulder width in the middle of the platform.","Release the safety handles.","Lower until your knees reach about 90°.","Press back up without locking your knees.","Re-engage the safeties when done."],
["Higher feet = more glutes, lower = more quads","Lower back stays on the pad"],"Going so deep your hips curl off the seat.");
X("hack","Hack Squat Machine","legs","quads","machine","c","Quads, glutes",
["Back on the pad, shoulders under the pads.","Feet shoulder width in the middle of the platform.","Release the safety and squat as deep as you can control.","Drive back up through your mid-foot."],
["Knees can travel forward here","Slow on the way down"],"Bouncing out of the bottom.");
X("smith-squat","Smith Machine Squat","legs","quads","machine","c","Quads, glutes",
["Set the bar at shoulder height and step under it.","Feet slightly in front of your body, shoulder width.","Unhook the bar and squat to parallel.","Stand back up and re-hook when done."],
["Feet slightly forward lets you sit straight down","Set the safety stops"],"Feet directly under the bar, which stresses the knees.");
X("split-squat","Bulgarian Split Squat","legs","quads","dumbbell","c","Quads, glutes",
["Stand about two feet in front of a bench, rear foot laces-down on it.","Hold dumbbells at your sides.","Lower straight down until the back knee nearly touches the floor.","Drive up through the front foot. Finish one side, then switch."],
["Lean forward slightly for more glutes","Front heel stays down"],"Standing too close to the bench.");
X("lunge","Walking Lunge","legs","quads","dumbbell","c","Quads, glutes",
["Hold dumbbells at your sides in an open lane.","Step forward and lower until both knees reach about 90°.","Push off the front foot and step into the next lunge.","Count each leg as one rep."],
["Long steps, upright torso","Back knee just kisses the floor"],"Short choppy steps with the knee caving.");
X("leg-ext","Leg Extension","legs","quads","machine","i","Quads",
["Set the back pad so your knees line up with the pivot.","Ankle pad just above your feet.","Extend your legs until straight.","Squeeze, then lower slowly."],
["Hold the handles","Toes up"],"Kicking the weight up fast.");
X("rdl","Romanian Deadlift","legs","hams","barbell","c","Hamstrings, glutes, lower back",
["Stand tall holding a barbell at your thighs, feet hip width.","Soften your knees slightly and lock that angle.","Push your hips back and slide the bar down your legs.","Stop at a strong hamstring stretch, usually just below the knee.","Drive your hips forward to stand back up."],
["Back stays flat","It's a hinge, not a squat"],"Rounding the back to reach lower.");
X("db-rdl","Dumbbell Romanian Deadlift","legs","hams","dumbbell","c","Hamstrings, glutes",
["Hold dumbbells in front of your thighs.","Soft knees, push hips back and lower the bells along your legs.","Feel the stretch, then squeeze glutes to stand up."],
["Dumbbells close to your legs","Slow on the way down"],"Squatting instead of hinging.");
X("lying-curl","Lying Leg Curl","legs","hams","machine","i","Hamstrings",
["Lie face down, ankle pad just above your heels, knees just off the bench edge.","Grab the handles, hips pressed down.","Curl your heels toward your glutes.","Lower slowly to almost straight."],
["Hips stay down","Toes toward shins"],"Lifting your hips to cheat.");
X("seated-curl","Seated Leg Curl","legs","hams","machine","i","Hamstrings",
["Set the back pad so your knees line up with the pivot.","Lower the thigh pad snug, ankle pad behind your calves.","Curl your heels down and under.","Return slowly."],
["Lean forward slightly for a bigger stretch","Pause at the bottom"],"Letting the weight snap back.");
X("pull-through","Cable Pull-Through","legs","hams","cable","c","Hamstrings, glutes",
["Attach a rope to the low pulley and face away, rope between your legs.","Walk out, hinge your hips back, arms between your legs.","Drive your hips forward to stand tall, squeezing glutes.","Hinge back slowly."],
["Arms just hold on","Great hinge teacher"],"Squatting down instead of pushing hips back.");
X("hip-thrust","Barbell Hip Thrust","legs","glutes","barbell","c","Glutes, hamstrings",
["Sit with your upper back against a bench, barbell over your hips (use a pad).","Feet flat, hip width, about a foot in front of you.","Drive through your heels until your body is flat from shoulders to knees.","Squeeze hard, then lower."],
["Chin tucked","Shins vertical at the top"],"Arching the lower back instead of finishing with glutes.");
X("glute-machine","Hip Thrust Machine","legs","glutes","machine","c","Glutes",
["Sit in the machine with the pad across your hips, back against the support.","Feet flat, hip width.","Drive your hips up until fully extended.","Squeeze, then lower."],
["Pause at the top","Push through heels"],"Pushing through the toes.");
X("kickback","Cable Glute Kickback","legs","glutes","cable","i","Glutes",
["Attach an ankle strap to the low pulley.","Face the machine, hold the frame, slight forward lean.","Kick the working leg straight back and slightly up.","Squeeze, return slowly. Switch sides."],
["Hips stay square","Small range, big squeeze"],"Arching the lower back to kick higher.");
X("abductor","Hip Abduction Machine","legs","glutes","machine","i","Glutes (side)",
["Sit with the pads on the outside of your knees.","Set the start width for a gentle stretch.","Push your knees out as wide as you can.","Hold, return slowly."],
["Lean forward slightly for more glute","Control the return"],"Letting the pads slam together.");
X("step-up","Dumbbell Step-up","legs","glutes","dumbbell","c","Glutes, quads",
["Face a sturdy bench or box at about knee height, dumbbells at your sides.","Place one whole foot on the box.","Drive through that heel to stand on top.","Lower slowly with the same leg. Switch sides."],
["Don't push off the back foot","Taller box = more glutes"],"Bouncing off the floor leg.");
X("sumo","Sumo Dumbbell Squat","legs","glutes","dumbbell","c","Glutes, adductors, quads",
["Stand with feet wide, toes out, holding one heavy dumbbell between your legs.","Sit straight down, knees pushing out.","Stand up and squeeze glutes."],
["Chest tall","Push knees out"],"Knees caving in.");
X("standing-calf","Standing Calf Raise","legs","calves","machine","i","Calves",
["Step under the shoulder pads, balls of your feet on the edge.","Stand tall with straight legs.","Lower your heels for a full stretch.","Rise onto your toes as high as you can and pause."],
["Pause top and bottom","Slow beats bouncy"],"Bouncing through short reps.");
X("seated-calf","Seated Calf Raise","legs","calves","machine","i","Calves (soleus)",
["Sit with the pad snug on your lower thighs, balls of feet on the platform.","Release the safety lever.","Lower your heels for a stretch.","Push up onto your toes and squeeze."],
["Full range","Pause at the top"],"Rushing the reps.");
X("lp-calf","Leg Press Calf Raise","legs","calves","machine","i","Calves",
["Sit in the leg press with the balls of your feet on the bottom edge of the platform.","Keep legs straight but not locked, safeties on.","Push the platform with your toes, then let your heels come back for a stretch."],
["Keep the safety handles engaged","Slow and full range"],"Bending the knees to help.");

/* ============ CARDIO ============ */
// Cardio is logged as minutes (r) with an optional level/speed (w). lo/hi = target minutes.
X("tm-incline","Incline Treadmill Walk","cardio","climb","cardio","c","Heart, glutes, calves",
["Set the incline between 8 and 12 and a speed you can walk, around 2.5 to 3.5 mph.","Stand tall and let go of the handrails.","Take normal steps and keep a steady pace.","Lower the incline for the last couple of minutes to cool down."],
["Hands off the rails","Breathing hard but able to talk"],"Holding the rails and leaning back, which takes the work away.",{cardio:1,lo:15,hi:30});
X("stairmaster","Stair Climber","cardio","climb","cardio","c","Heart, glutes, quads",
["Start at a level you can keep for the whole session.","Step through your whole foot, not just your toes.","Stand upright and lightly touch the rails for balance only."],
["Upright posture","Steady rhythm"],"Leaning on the rails with your arms.",{cardio:1,lo:10,hi:20});
X("tm-run","Treadmill Run","cardio","steady","cardio","c","Heart, legs",
["Walk for a minute, then raise the speed to an easy jog.","Settle into a pace where you could talk in short sentences.","Land under your hips with short, quick steps."],
["Relaxed shoulders","1% incline feels closer to running outside"],"Overstriding and slamming your heels.",{cardio:1,lo:15,hi:30});
X("bike","Stationary Bike","cardio","steady","cardio","c","Heart, quads",
["Set the seat so your knee is slightly bent at the bottom of the pedal stroke.","Pick a resistance you can hold for the whole ride.","Keep a smooth cadence around 80 to 90 rpm."],
["Seat height first","Push and pull through the stroke"],"A seat so low your knees come up high.",{cardio:1,lo:15,hi:30});
X("elliptical","Elliptical","cardio","steady","cardio","c","Heart, full body",
["Step on and hold the moving handles.","Push and pull the handles as your legs move.","Keep a steady pace at a resistance you can hold."],
["Drive through your heels","Use your arms too"],"Bouncing on your toes.",{cardio:1,lo:15,hi:30});
X("rower","Rowing Machine","cardio","steady","cardio","c","Heart, back, legs",
["Strap your feet in and grab the handle with straight arms.","Push with your legs, then lean back slightly, then pull the handle to your ribs.","Return in reverse: arms, body, then knees."],
["Legs, body, arms","Damper around 3 to 5"],"Pulling with your arms before your legs have pushed.",{cardio:1,lo:10,hi:20});
X("outdoor-run","Run or Brisk Walk Outside","cardio","steady","bodyweight","c","Heart, legs",
["Start with a few minutes of easy walking.","Settle into a run or brisk walk you can keep going.","Finish with a few minutes of easy walking."],
["Conversational pace","Short, light steps"],"Starting too fast and fading early.",{cardio:1,lo:15,hi:40});
X("tm-sprints","Treadmill Sprints","cardio","hiit","cardio","c","Heart, legs",
["Warm up with 3 to 5 minutes of easy jogging.","Run hard for 20 to 30 seconds.","Walk or straddle the belt for 60 to 90 seconds.","Repeat 6 to 10 times, then cool down."],
["Straddle the belt to rest","Only as fast as you can run safely"],"Jumping on or off a fast-moving belt.",{cardio:1,lo:12,hi:20});
X("bike-sprints","Bike Sprints","cardio","hiit","cardio","c","Heart, quads",
["Warm up for 3 minutes at an easy pace.","Sprint hard for 20 to 30 seconds with high resistance.","Pedal easy for 60 seconds.","Repeat 6 to 10 times, then cool down."],
["An air bike works great here","All-out on the sprints, truly easy on the rests"],"Going medium-hard the whole time.",{cardio:1,lo:12,hi:20});
X("row-intervals","Rower Intervals","cardio","hiit","cardio","c","Heart, back, legs",
["Warm up with 3 minutes of easy rowing.","Row hard for 250 meters or 1 minute.","Row easy for 1 minute.","Repeat 5 to 8 times."],
["Power comes from the legs","Keep good form when tired"],"Rounding your back when tired.",{cardio:1,lo:12,hi:20});
X("jump-rope","Jump Rope","cardio","hiit","bodyweight","c","Heart, calves, shoulders",
["Hold the handles at hip height with elbows close to your sides.","Turn the rope with your wrists and jump just high enough to clear it.","Go for 30 to 60 seconds, rest 30 seconds, and repeat."],
["Small jumps on the balls of your feet","Wrists turn the rope, not your arms"],"Jumping too high or landing flat-footed.",{cardio:1,lo:10,hi:20});
X("burpees","Burpee Intervals","cardio","hiit","bodyweight","c","Heart, full body",
["Squat down and put your hands on the floor.","Jump or step your feet back to a plank.","Bring your feet back in and stand or jump up.","Work 30 seconds, rest 30 seconds."],
["Step back instead of jumping if you need to","Keep a steady pace"],"Letting your hips sag in the plank.",{cardio:1,lo:8,hi:15});
X("mtn-climbers","Mountain Climbers and High Knees","cardio","hiit","bodyweight","c","Heart, core, hips",
["Do 30 seconds of mountain climbers: plank position, driving one knee at a time toward your chest.","Stand and do 30 seconds of high knees.","Rest 30 seconds and repeat."],
["Hips level in the plank","Pump your arms on high knees"],"Hips piking up high.",{cardio:1,lo:8,hi:15});
X("step-climb","Stairs or Step-Up Climb","cardio","climb","bodyweight","c","Heart, glutes, quads",
["Use a flight of stairs or a sturdy step.","Climb at a steady pace, pushing through your whole foot.","Walk back down and repeat."],
["Drive through the heel","Use a rail for balance if you have one"],"Pushing off the bottom foot instead of the top one.",{cardio:1,lo:10,hi:20});

export const EXM = Object.fromEntries(EX.map(e => [e.id, e]));
