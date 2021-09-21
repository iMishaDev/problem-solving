/**
 * 
    A decimal number is called  deci-binary if each of its digits is either 
    0 or 1 without any leading zeros. 
    For example, 101 and 1100 are deci-binary,while 112 and 3001 are not.
    Given a string n that represents a positive decimal integer, 
    return the minimum number of positive deci-binary numbers needed so that they sum up to n.

    Input: n = "32"
    Output: 3
    Explanation: 10 + 11 + 11 = 32

    Input: n = "82734"
    Output: 8 10111 + 10111 + 10111 + 10101 + 10100 + 10100 + 11100 + 11000

    Input: n = "27346209830709182346"
    Output: 9
*/

class Solution {
    getNumOfDeciBinary(str){
        return Math.max(...str)
    }

}

console.log(new Solution().getNumOfDeciBinary('27346209830709182346'))