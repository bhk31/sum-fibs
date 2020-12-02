function sumFibs( num ) {
    let prev = 0;
    let current = count = 1;
    let fib = 0;

    while( fib <= num ) {
        fib = prev + current;
        prev = current
        current = fib;

        if( fib % 2 != 0 ) {
            count = count + fib
        }
    }

    return count-fib;
}

console.log( sumFibs( 10) );