import classNames from "classnames";
import MUNCHKIN_AVATAR_LIST from "constants/MunchkinAvatarList";
import { AvatarId } from "types/munchkin/types";

type Props = {
  id: AvatarId;
  className?: string;
};

const Avatar = ({ id, className }: Props) => {
  const avatar = MUNCHKIN_AVATAR_LIST.find((avatar) => avatar.id === id);

  if (!avatar) return null;

  return (
    <img
      className={classNames(
        "avatar-image w-12 rounded-full bg-white",
        className
      )}
      src={avatar.src}
      alt={avatar.alt}
    />
  );
};

export default Avatar;
