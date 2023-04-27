import Button from "../Button";
import ButtonGroup from "../ButtonGroup";

type Props = {
  combatant: string;
  onAdjustmentClick: (adjustment: number) => void;
};

const CombatScoreInput = ({ onAdjustmentClick, combatant }: Props) => {
  const handleAdjustmentClick = (adjustment: number) => {
    onAdjustmentClick(adjustment);
  };

  return (
    <ButtonGroup>
      <Button
        aria-label={`decrement ${combatant}'s total by 5`}
        fluid
        onClick={() => handleAdjustmentClick(-5)}
      >
        -5
      </Button>
      <Button
        aria-label={`decrement ${combatant}'s total by 3`}
        fluid
        onClick={() => handleAdjustmentClick(-3)}
      >
        -3
      </Button>
      <Button
        aria-label={`decrement ${combatant}'s total by 1`}
        fluid
        onClick={() => handleAdjustmentClick(-1)}
      >
        -1
      </Button>
      <Button
        aria-label={`increment ${combatant}'s total by 1`}
        fluid
        onClick={() => handleAdjustmentClick(1)}
      >
        +1
      </Button>
      <Button
        aria-label={`increment ${combatant}'s total by 3`}
        fluid
        onClick={() => handleAdjustmentClick(3)}
      >
        +3
      </Button>
      <Button
        aria-label={`increment ${combatant}'s total by 5`}
        fluid
        onClick={() => handleAdjustmentClick(5)}
      >
        +5
      </Button>
    </ButtonGroup>
  );
};

export default CombatScoreInput;
