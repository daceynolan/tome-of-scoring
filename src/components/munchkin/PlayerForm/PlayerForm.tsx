import { useState } from "react";
import { Player } from "types/munchkin/types";

import AvatarPicker from "../AvatarPicker";
import Button from "../Button";
import FormError from "../FormError";
import Input from "../Input";
import Label from "../Label";
import SexSelect from "../SexSelect";

type FormErrors = {
  name?: string;
  sex?: string;
  avatar?: string;
};

type Props = {
  defaultFormData?: Partial<Player>;
  onSave: (player: Partial<Player>) => void;
};

const PlayerForm = ({ defaultFormData = {}, onSave }: Props) => {
  const [playerData, setPlayerData] = useState<Partial<Player>>({
    name: "",
    avatar: "dragon",
    sex: "M",
    ...defaultFormData,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const updatePlayerData = (field: string, value: string) => {
    setPlayerData({
      ...playerData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    const errors: FormErrors = {};

    if (!playerData.name) {
      errors.name = "Please enter a name";
    } else if (playerData?.name?.length > 10) {
      errors.name = "Name should be 10 characters or less";
    }

    if (!playerData.sex) {
      errors.sex = "Please select player's sex";
    }

    if (!playerData.avatar) {
      errors.avatar = "Please select an avatar";
    }

    if (errors.avatar || errors.name || errors.sex) {
      setErrors(errors);
    } else {
      onSave(playerData);
    }
  };

  return (
    <form>
      <div className="text-xl mb-7">
        <Label>Player's Name</Label>
        <Input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            updatePlayerData("name", event.target.value)
          }
          value={playerData.name || ""}
          fluid
        />
        {errors.name && <FormError>{errors.name}</FormError>}
      </div>
      <div className="text-xl mb-7">
        <Label>Player's Sex</Label>
        <SexSelect
          value={playerData.sex}
          onChange={(newSex) => updatePlayerData("sex", newSex)}
        />
        {errors.sex && <FormError>{errors.sex}</FormError>}
      </div>

      <div className="text-xl mb-7">
        <Label>Avatar</Label>
        <AvatarPicker
          value={playerData.avatar || "dragon"}
          onChange={(newAvatar) => updatePlayerData("avatar", newAvatar)}
        />
        {errors.avatar && <FormError>{errors.avatar}</FormError>}
      </div>
      <Button
        fluid
        type="submit"
        onClick={() => {
          handleSubmit();
        }}
      >
        Save
      </Button>
    </form>
  );
};

export default PlayerForm;
