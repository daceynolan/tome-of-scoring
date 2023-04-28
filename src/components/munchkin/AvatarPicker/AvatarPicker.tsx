import "./AvatarPicker.css";

import MUNCHKIN_AVATAR_LIST from "constants/MunchkinAvatarList";
import { AvatarId } from "types/munchkin/types";

import Avatar from "../Avatar";

type Props = {
  value?: AvatarId;
  onChange: (avatarId: AvatarId) => void;
};

function AvatarPicker({ value, onChange }: Props) {
  return (
    <fieldset className="flex gap-2 justify-center">
      <legend className="text-m-mud-500 mb-2"> Avatar</legend>
      {MUNCHKIN_AVATAR_LIST.map((avatar) => (
        <div key={avatar.id}>
          <input
            checked={value === avatar.id}
            type="radio"
            value={avatar.id}
            name="avatar"
            onChange={() => onChange(avatar.id)}
            id={avatar.id}
            // aria-label={`Change user's avatar to a ${avatar.id}`}
            className="sr-only"
          />
          <label
            htmlFor={avatar.id}
            className="avatar-picker__label"
            aria-label={avatar.alt}
          >
            <Avatar
              id={avatar.id}
              className="cursor-pointer border-2 border-transparent"
            />
          </label>
        </div>
      ))}
    </fieldset>
  );
}
export default AvatarPicker;
