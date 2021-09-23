/**
 * Implement a job scheduler which takes in a function f and an integer n, 
 * and calls f after n milliseconds.
 */
class Solution {
    schedule(f, n){
        setTimeout(() => {
            f();
        }, n)
    }
}

console.log(new Solution().schedule(() => console.log('hello after 5000'), 5000))