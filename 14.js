function getCollatz(number) {
    if (!(number%2)) return number / 2;
    else return (3 * number) + 1;
}

function getResult() {
    var target = 1000000, lStart = 13, lChain = 10;       
    var cache = [0,1];
    for (var x = 1, number = x, chain = 0; ++x < target;) {
        number = x; 
        chain = 0;
        while (number != 1 && number >= x) {
            chain++;
            number = getCollatz(number);
        }
        chain += cache[number];
        cache.push(chain);
        if (chain > lChain) {
            lChain = chain;
            lStart = x;
        }
    }
    console.log('The longest chaing of ' + lChain + ' terms is created by the number ' + lStart);
}