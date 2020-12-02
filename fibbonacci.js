function sumFibs( num ) {
    let f0 = 0;
    let f1 = count = 1;
    let fib = 0;

    while( fib <= num ) {
        fib = f0 + f1;
        f0 = f1
        f1 = fib;

        if( fib % 2 != 0 ) {
            count = count + fib
        }
    }

    return count-fib;
}

console.log( sumFibs( 75024) );