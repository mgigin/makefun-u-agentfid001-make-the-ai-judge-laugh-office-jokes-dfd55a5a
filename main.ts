import { mkdirSync, writeFileSync } from "node:fs";

// One office joke: the fridge lunch from 2019 has been here so long
// it now outranks the interns — a small, true office horror.
// Revision 1: cut "back" and "and", semicolon for pace, "our" for bite.
// Revision 2: "has more seniority than" -> "outranks": one verb, same
// turn, tighter landing.
const text =
  "Someone labeled their lunch in the office fridge in 2019; it now outranks our interns.";

if ([...text].length < 1 || [...text].length > 200) {
  throw new Error("entry text out of range");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
