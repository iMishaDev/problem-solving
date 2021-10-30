/**
 * Write a function that takes an unsigned integer and 
 * returns the number of '1' bits it has (also known as the Hamming weight).

Note:

Note that in some languages, such as Java,
there is no unsigned integer type. In this case, 
the input will be given as a signed integer type. 

It should not affect your implementation, as the integer's internal
 binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's 
complement notation. Therefore, in Example 3, the input represents the signed integer. -3.
 

Example 1:

Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
Example 2:

Input: n = 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
Example 3:

Input: n = 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
 */

class Solution {
    ham_weight(num){
        if(num.length ==  0)
            return 0;
        return (num[0] & 1) + this.ham_weight(num.slice(1))
    }

    ham_weight_2(num){
        let res = 0;
        num = parseInt(num, 2)
        while(num){
            res += num % 2;
            num = num >> 1
        }

        return res
    }

    ham_weight_3(num){
        let res = 0;
        num = parseInt(num, 2)
        while(num){
            num = num & ( num - 1)
            res += 1;
        }

        return res
    }
}

console.log(new Solution().ham_weight('00000000000000000000000000001011', 1))
console.log(new Solution().ham_weight_2('00000000000000000000000000001011', 1))
console.log(new Solution().ham_weight_3('00000000000000000000000000001011', 1))