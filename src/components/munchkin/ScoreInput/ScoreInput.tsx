import Button from "../Button";

type Props = {
  currentScore: number;
  max?: number;
  min?: number;
  onChange(newLevel: number): void;
  onChange(newBonus: number): void;
};

const ScoreInput = ({ currentScore, max, min, onChange }: Props) => {
  const incrementScore = () => {
    if (max && currentScore >= max) return;
    onChange(currentScore + 1);
  };

  const decrementScore = () => {
    if (min && currentScore <= min) return;
    onChange(currentScore - 1);
  };

  return (
    <div className="flex">
      <Button
        onClick={decrementScore}
        styleReset
        aria-label={`Decrement by one`}
      >
        -
      </Button>
      <div className="score-input__score self-center text-2xl p-2">
        {currentScore}
      </div>
      <Button
        onClick={incrementScore}
        styleReset
        aria-label={`Increment by one`}
      >
        +
      </Button>
    </div>
  );
};

export default ScoreInput;
