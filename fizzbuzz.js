const buzz = v => v % 3 === 0;

const fizz = v => v % 5 === 0;

let r = [];

const f = (start = true, v = 10) => {
    if (!start) {
        if (fizz(v) || buzz(v)) {
            r = buzz(v) ? fizz(v) ? 'FizzBuzz' : 'Fizz' : 'Buzz';
        } else {
            r = v;
        }
    } else {
        for(let i = 1; i <= v; i++) {
            if (fizz(i) && buzz(i)) {
                r.push('FizzBuzz');
            } else if (fizz(i)) {
                r.push('Buzz');
            } else if (buzz(i)) {
                r.push('Fizz');
            } else {
                r.push(i);
            }
        }
    }
};

const process = () => {
    f(true, 15);
    if (typeof r === "string") {
        console.log(r);
    } else {
        console.log(r.join(', '));
    }

    f(false, 30);
    console.log(r);
};

process();