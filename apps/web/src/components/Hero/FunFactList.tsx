import { FunFact } from "./FunFact";

const FUN_FACTS = [
  { text: "Full-Stack Developer & Electrical Engineer" },
  { text: "Full-Stack Web Development student at freeCodeCamp" },
  { text: "Member of Microverse Alumni" },
  { text: "Taking part in Xcelsz Accelerator Program" },
];

export function FunFactList() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {FUN_FACTS.map((fact, i) => (
        <FunFact key={fact.text} text={fact.text} index={i} />
      ))}
    </div>
  );
}
