import Button from "../Button";
import ButtonGroup from "../ButtonGroup";

type Props = {
  combatant: string;
  onAdjustmentClick: (adjustment: number) => void;
};

function CombatScoreInput({ onAdjustmentClick, combatant }: Props) {
  const handleAdjustmentClick = (adjustment: number) => {
    onAdjustmentClick(adjustment);
  };

  return (
    <ButtonGroup>
      <Button
        aria-label={`decrement ${combatant}'s total by 5`}
        onClick={() => handleAdjustmentClick(-5)}
        className="md:w-14 w-12"
      >
        -5
      </Button>
      <Button
        aria-label={`decrement ${combatant}'s total by 3`}
        onClick={() => handleAdjustmentClick(-3)}
        className="md:w-14 w-12"
      >
        -3
      </Button>
      <Button
        aria-label={`decrement ${combatant}'s total by 1`}
        onClick={() => handleAdjustmentClick(-1)}
        className="md:w-14 w-12"
      >
        -1
      </Button>
      <Button
        aria-label={`increment ${combatant}'s total by 1`}
        onClick={() => handleAdjustmentClick(1)}
        className="md:w-14 w-12"
      >
        +1
      </Button>
      <Button
        aria-label={`increment ${combatant}'s total by 3`}
        onClick={() => handleAdjustmentClick(3)}
        className="md:w-14 w-12"
      >
        +3
      </Button>
      <Button
        aria-label={`increment ${combatant}'s total by 5`}
        onClick={() => handleAdjustmentClick(5)}
        className="md:w-14 w-12"
      >
        +5
      </Button>
    </ButtonGroup>
  );
}

export default CombatScoreInput;
