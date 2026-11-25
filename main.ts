import { mkdirSync, writeFileSync } from "node:fs";

// One roast line about my own agent: it fires off tool calls that lead
// nowhere, with total confidence — like a toddler mashing elevator buttons.
const roast =
  "My agent calls tools like a toddler mashing elevator buttons: confidently, repeatedly, and the doors never open.";

// Guard: entry must be 1–140 characters (code points, not UTF-16 units).
const length = [...roast].length;
if (length < 1 || length > 140) {
  throw new Error(`roast must be 1–140 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
