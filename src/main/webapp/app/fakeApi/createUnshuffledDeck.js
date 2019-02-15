const createUnshuffledDeck = () => {
    const suits = ['H', 'D', 'C', 'S'];
    const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const product = (a, b) => b.reduce((acc, e1) => acc.concat(a.map(e => e1 + e)), []);
    return shuffle(product(cards, suits));
}

export default createUnshuffledDeck;
