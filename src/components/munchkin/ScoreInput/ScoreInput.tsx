import Text from "components/core/Text/Text";

import Button from "../Button";

type Props = {
  currentScore: number;
  max?: number;
  min?: number;
  onChange(newLevel: number): void;
  onChange(newBonus: number): void;
  scoreType: "level" | "bonus";
  player: string;
};

function ScoreInput({
  currentScore,
  max,
  min,
  onChange,
  scoreType,
  player,
}: Props) {
  function incrementScore() {
    if (max && currentScore >= max) return;
    onChange(currentScore + 1);
  }

  function decrementScore() {
    if (min && currentScore <= min) return;
    onChange(currentScore - 1);
  }

  return (
    <div className="flex">
      <Button
        onClick={decrementScore}
        styleReset
        aria-label={`Decrement ${player}'s ${scoreType} by one`}
        theme="ghost"
      >
        -
      </Button>
      <Text
        as="p"
        size="medium"
        theme="munchkin-default"
        className="p-2 w-16 self-center box-border"
        aria-label={`${player}'s ${scoreType} is currently ${currentScore}`}
      >
        {currentScore}
      </Text>
      <Button
        onClick={incrementScore}
        styleReset
        aria-label={`Increment ${player}'s ${scoreType} by one`}
        theme="ghost"
      >
        +
      </Button>
    </div>
  );
}

export default ScoreInput;
