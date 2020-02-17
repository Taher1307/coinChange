function getMinimumcoin(amount) {
    const coins = [1, 5, 10], 
        result = [];
    let numOfCoins = 0;
    while (amount > 0) {
        let coin = coins.pop();
        let count = Math.floor(amount / coin);
        amount -= count * coin;
        if (count) {
            numOfCoins += count;
            result.push(`${count}*${coin}`);
        }
    }
    return `${numOfCoins}(${result})`;
}

getMinimumcoin(7)