// Roll dice function with multiplier
function rollDice(numDice, diceSides, multiplier = 1) {

    let total = 0;
    for (let i = 0; i < numDice; i++) {
        total += Math.floor(Math.random() * diceSides) + 1;
    }
    return total * multiplier;
}

function parseDice(diceNotation) {
    const diceRegex = /^(\d+)d(\d+)(?:x(\d+))?$/i;
    const match = diceNotation.match(diceRegex);

    if (match) {
        const numDice = parseInt(match[1]);
        const diceSides = parseInt(match[2]);
        const multiplier = match[3] ? parseInt(match[3]) : 1;
        return { numDice, diceSides, multiplier };
    } else {
        throw new Error('Invalid dice notation');
    }
}