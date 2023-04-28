import { Sex } from "types/munchkin/types";

import Label from "../Label/Label";

type Props = {
  value?: Sex;
  onChange: (sex: Sex) => void;
};

function SexSelect({ value, onChange }: Props) {
  return (
    <fieldset className="flex justify-around" role="radiogroup">
      <legend className="text-m-mud-500 mb-2">Player's Sex</legend>
      <input
        checked={value === "M"}
        type="radio"
        value="M"
        name="sex"
        onChange={() => onChange("M")}
        id="select-male"
      />
      <Label htmlFor="select-male">Male</Label>
      <input
        checked={value === "F"}
        type="radio"
        value="F"
        name="sex"
        onChange={() => onChange("F")}
        id="select-female"
      />
      <Label htmlFor="select-female">Female</Label>
    </fieldset>
  );
}

export default SexSelect;
