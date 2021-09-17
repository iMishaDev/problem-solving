/**
cons(a, b) constructs a pair, and car(pair) 
and cdr(pair) returns the first and last element of that pair. 
For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

Given this implementation of cons:

def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
Implement car and cdr.
 */



class Solution {

    cons(a, b){
        function pair(f){
            return f(a, b);
        }
        return pair;
    }

    car(pair){
        return pair((a, b) => a);
    }


    cdr(){
        return pair((a, b) => b);
    }
}
let pair = new Solution().cons(1, 2)

console.log(new Solution().car(pair))
console.log(new Solution().cdr(pair))
