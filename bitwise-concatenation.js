/**
 *
 * Bitwise concatenation
 *
 * it's possible to concat numbers into a single number, using bitwise operations and
 * retrieve the values of numbers, from this single number, using operations
 */

//lets say we want to store 3 numbers into one single number, using bitwise operations

const x = 14; // 1110
const y = 11; // 1011
const z = 8; // 1000

//we store shifting the bits according to other numbers and storing other numbers into remaining space

const shiftedX = x << 8; // 1110 0000 0000
const shiftedY = y << 4; // 1011 0000
const shiftedZ = z; // 1000

//we shift the first number on 8 because that's the sum of each bit value
//we shift the second number on 4 because that's the value of bits for the third number
//we don't shift the third number since it's gonna be the first value of bits

//performing an or(|) operation on all elements will return the value combined of all elements without them changing each other
const bitConcat = shiftedX | shiftedY | shiftedZ;

console.log(bitConcat);
// result 3768
// binary operation breakdown:
// 1110 0000 0000 = 14 << 8
//      1011 0000 = 11 << 4
//           1000 = 8
// 1110 1011 1000 = 3768

// to retrieve the result from bitConcat, we must use masks according to the amount of bits each number used, then shift the amount if necessary.

function shiftMask(param) {
    return (1 << param) - 1;
}

// returned value of Z from bitConcat, using the shiftMask function, passing the amount of bits the number uses
console.log(bitConcat & shiftMask(4));
// binary operation breakdown:
// 1110 1011 1000 = bitConcat
// 0000 0000 1111 = shiftMask(4)
// 0000 0000 1000 = result of and(&) operation
// returned value = 8

// returned value of Y from bitConcat, using the shiftMask function, passing the amount of bits the number uses
// the xor(^) operation is necessary for removing the x amount of bits of the last number
// we shift the number to the right (>>) on 4 bits to get the right amount, because they are the bits used for the Z number
console.log((bitConcat & (shiftMask(8) ^ shiftMask(4))) >> 4);
// binary operation breakdown:
// 1110 1011 1000 = bitConcat
// 0000 1111 1111 = shiftMask(8)
// 0000 0000 1111 = shiftMask(4)
// 0000 1111 0000 = result of xor(^) operation
// 0000 1011 0000 = result of and(&) operation on the result of xor(^) operation
// 0000 0000 1011 = result of shift right(>>) of 4 bits operation on the result of the result of and(&)
// returned value = 11

// return value of X from bitConcat, using the shiftMask function passing the amount of bits the number uses
// we shift the number to the right (>>) on 8 bits to get the right amount, because they are the bits used for Y and Z numbers
console.log((bitConcat & shiftMask(12)) >> 8);
// binary operation breakdown:
// 1110 1011 1000 = bitConcat
// 1111 1111 1111 = shiftMask(12)
// 1110 1011 1000 = result of and(&) operation
// 0000 0000 1110 = result of shift right(>>) of 8 bits operation
// returned value = 14
