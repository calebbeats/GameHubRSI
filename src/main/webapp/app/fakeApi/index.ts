export default ({
    add: (a, b) => a + b,
    hitMe: () => {
        function shuffle(array) {
            array = [...array];
            let currentIndex = array.length;
            let temporaryValue;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                const randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }

        const suits = ['H', 'D', 'C', 'S'];
        const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const product = (a, b) => b.reduce((acc, e1) => acc.concat(a.map(e => e1 + e)), []);
        const randomCard = shuffle(product(cards, suits))[0];
        return randomCard;
    }
});
