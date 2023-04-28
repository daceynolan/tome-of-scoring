import { Sex } from "types/munchkin/types";

type Props = {
  value?: Sex;
  onChange: (sex: Sex) => void;
};

function SexSelect({ value, onChange }: Props) {
  return (
    <div className="flex justify-around">
      <input
        checked={value === "M"}
        type="radio"
        value="M"
        name="sex"
        onChange={() => onChange("M")}
        id="select-male"
      />
      <label htmlFor="select-male">Male</label>
      <input
        checked={value === "F"}
        type="radio"
        value="F"
        name="sex"
        onChange={() => onChange("F")}
        id="select-female"
      />
      <label htmlFor="select-female">Female</label>
    </div>
  );
}

export default SexSelect;
