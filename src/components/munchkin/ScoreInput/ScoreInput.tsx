import Button from "../Button";

type Props = {
  currentScore: number;
  max?: number;
  min?: number;
  onChange(newLevel: number): void;
  onChange(newBonus: number): void;
};

function ScoreInput({ currentScore, max, min, onChange }: Props) {
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
        aria-label={`Decrement by one`}
        theme="ghost"
      >
        -
      </Button>
      <div className="p-2 w-16 self-center text-2xl box-border">
        {currentScore}
      </div>
      <Button
        onClick={incrementScore}
        styleReset
        aria-label={`Increment by one`}
        theme="ghost"
      >
        +
      </Button>
    </div>
  );
}

export default ScoreInput;
