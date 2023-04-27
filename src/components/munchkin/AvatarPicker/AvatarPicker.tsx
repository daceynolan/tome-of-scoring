import "./AvatarPicker.css";

import MUNCHKIN_AVATAR_LIST from "constants/MunchkinAvatarList";
import { AvatarId } from "types/munchkin/types";

import Avatar from "../Avatar";

type Props = {
  value?: AvatarId;
  onChange: (avatarId: AvatarId) => void;
};

const AvatarPicker = ({ value, onChange }: Props) => {
  return (
    <div className="flex gap-2 justify-center">
      {MUNCHKIN_AVATAR_LIST.map((avatar) => (
        <div key={avatar.id}>
          <input
            checked={value === avatar.id}
            type="radio"
            value={avatar.id}
            name="avatar"
            onChange={() => onChange(avatar.id)}
            id={avatar.id}
            aria-label={`Change user's avatar to a ${avatar.id}`}
            className="sr-only"
          />
          <label htmlFor={avatar.id} className="avatar-picker__label">
            <Avatar
              id={avatar.id}
              className="cursor-pointer border-2 border-transparent"
            />
          </label>
        </div>
      ))}
    </div>
  );
};
export default AvatarPicker;
