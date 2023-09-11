const FIZZ_MULTIPLE = 3;
const FIZZ = "Fizz";
const BUZZ_MULTIPLE = 5;
const BUZZ = "Buzz";

const isMultipleOf = (multiple, number) => number % multiple === 0;

const getNumberAsFizzBuzz = (numberToParse) => {
    const isFizz = isMultipleOf(FIZZ_MULTIPLE, numberToParse);
    const isBuzz = isMultipleOf(BUZZ_MULTIPLE, numberToParse);

    const fizzBuzz = ""

    if (isFizz) {
        fizzBuzz += FIZZ_MULTIPLE;
    }

    if (isBuzz) {
        fizzBuzz += BUZZ_MULTIPLE;
    }

    return fizzBuzz || numberToParse;
}

const getFizzBuzzFrom1To = (maxValue) => {
    return new Array(maxValue).fill().map((_, index) => {
        return getNumberAsFizzBuzz(index);
    })
}

const main = () => {
    console.log(getFizzBuzzFrom1To(15).join(', '));
    console.log(getNumberAsFizzBuzz(30));
};

main();