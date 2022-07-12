/**
 *
 * Bitwise logical operations, converts operands into 32 bits integers expressed by 0s and 1s
 * Numbers with more than 32 bits will have the extra bits discarted
 *
 * Before: 1111 1010 0101 1010 1011 1111 0001 0110 0000 0000 0001
 * After:                 1010 1011 1111 0001 0110 0000 0000 0001
 *
 * On logical operations each bit on the first operand is paired with each corresponding bit in the second operand
 * applying the operator on each pair of bits, and the result is constructed bitwise.
 *
 */

/**
 *
 * Operators
 *
 */
//Decimal Value // Binary value
//14            // 1110
//10            // 1010

//returns a logical expression of and(&) between two operators, running the logical expression through each bit
console.log(14 & 10); //result 10
//1110
//  &
//1010
//1010

//returns a logical expression of or(|) between two operators, running the logical expression through each bit
console.log(14 | 10); //result 14
//1110
//  |
//1010
//1110

// returns a logical expression of xor(^) between two operators, running the logical expression through each bit
console.log(14 ^ 10); //result 4
//1110
//  ^
//1010
//0100

//returns a logical expression of not(~) on one operator, inverting all the 32 bits
//the ~14 evaluates the same value that -14 -1 evaluates to
console.log(~14); //result -15
//0000 0000 0000 0000 0000 0000 0000 1110
//1111 1111 1111 1111 1111 1111 1111 0001

/**
 *
 *Bitwise shift operators
 *
 */

//returns a bitwise shift operation to the left, shifting the first number of the specified number of bits to the left
console.log(14 << 2); //result 56
//1110
//111000

//returns a bitwise shift operation to the right, shifting the first number of the specified number of bits to the right
//this preserves the sign used on the number
console.log(14 >> 2); //result 3
//1110
//11
console.log(-14 >> 2); //result -1
//-1110
//-1

//returns the same as the operation to the right, but for negative numbers produces a positive number
console.log(-14 >>> 2); //result 1073741820
//1111111111110010
//111111111111111111111111111100
