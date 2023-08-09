module.exports = function toReadable (number) {
    if (number === 0) {
        return 'zero';
    }
    let numberAsString = '' + number;
    let res = '';
    if (numberAsString.length > 2) {
        res += getDigitName(numberAsString[numberAsString.length - 3]) + ' hundred ';
    }
    if (numberAsString.length > 1) {
        res += getDozenName(numberAsString[numberAsString.length - 2]) + ' ';
    }
    res += getDigitName(numberAsString[numberAsString.length - 1]);
    if (number % 100 > 10 && number % 100 < 20) {
        res = replaceTeens(res);
    }
    return res.replace('  ', ' ').trim();
}

const getDigitName = (digit) => {
    return ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'][+digit];
}

const getDozenName = (dozenDigit) => {
    return ['','ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'][+dozenDigit];
}

const replaceTeens = (inputString) => {
    let targets =  ['ten one', 'ten two', 'ten three', 'ten four', 'ten five', 'ten six', 'ten seven', 'ten eight', 'ten nine'];
    let replacements  =  ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let res;
    targets.forEach((e,i) => {
        if (inputString.includes(e)) {
            res = inputString.replace(e, replacements[i]);
        }
    });
    return res;
}

