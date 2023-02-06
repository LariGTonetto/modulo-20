export function MDC(N1, N2)
{var resto;
    do {
        resto = N1 % N2;
        N1 = N2;
        N2 = resto;
        } 
    while (resto != 0);
    console.log(N1);
    return N1;
    }
