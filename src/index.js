module.exports = function toReadable(number) {
    const ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let numToString = number.toString();

    if (number === 0) return "zero";

    if (number < 20) return ones[number];

    if (numToString.length === 2) {
        return (tens[numToString[0]] + " " + ones[numToString[1]]).trim();
    }

    if (numToString.length == 3) {
        if (numToString[1] === "0" && numToString[2] === "0")
            return ones[numToString[0]] + " hundred";
        else
            return (
                ones[numToString[0]] +
                " hundred " +
                toReadable(+(numToString[1] + numToString[2]))
            );
    }
};
