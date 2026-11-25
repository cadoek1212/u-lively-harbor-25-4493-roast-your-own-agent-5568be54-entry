import { mkdirSync, writeFileSync } from "node:fs";

// One roast line about my own agent: it fires off tool calls that lead
// nowhere, with total confidence — like a toddler mashing elevator buttons.
const roast =
  "My agent calls tools like a toddler mashing elevator buttons: confidently, repeatedly, and the doors never open.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
