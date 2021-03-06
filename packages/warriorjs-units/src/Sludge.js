import { RELATIVE_DIRECTIONS } from '@warriorjs/geography';
import { attack, feel } from '@warriorjs/abilities';

const Sludge = {
  name: 'Sludge',
  character: 's',
  maxHealth: 12,
  abilities: {
    attack: attack({ power: 3 }),
    feel: feel(),
  },
  playTurn(sludge) {
    const playerDirection = RELATIVE_DIRECTIONS.find(direction =>
      sludge.feel(direction).isPlayer(),
    );
    if (playerDirection) {
      sludge.attack(playerDirection);
    }
  },
};

export default Sludge;
