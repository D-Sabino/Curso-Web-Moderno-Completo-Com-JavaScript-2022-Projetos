let a = 7;
let b = 94;

/* - Solução - */
let c = a;
a = b;
b = c;
/* - Solução - */

/*
[a, b] = [b, a] //Troca de valores de forma direta dentro do .JS
*/

// depois da troca... a = 94 e b = 7
console.log("a = " + a);
console.log("b = " + b);