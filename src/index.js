// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let num = currency;
    let coins = [50, 25, 10, 5, 1];
    let exchange = [];
    coins.forEach(function (v) {
        if (num % v === 0) {
            exchange.push(num / v);
            num = 0;
        }
        else {
            exchange.push(Math.floor(num / v));
            num = num - v * (Math.floor(num / v));
        }

    });
    let result = {},
        half = "H",
        quarter = "Q",
        dime = "D",
        nickel = "N",
        penny = "P",

        err = {},
        message = "error";
    err[message] = "You are rich, my friend! We don\'t have so much coins for exchange";

    let keys = [half, quarter, dime, nickel, penny];
    exchange.forEach(function (v, i) {
            if (v > 0) {
                result[keys[i]] = v;
            }
            else {
                return result
            }
        }
    );
    if (currency >= 10000) {
        return err;
    }
    else {

        return result;
    }
};
