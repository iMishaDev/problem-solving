/**
 * The power set of a set is the set of all its subsets.
 * Write a function that, given a set, generates its power set.
 * For example, given the set {1, 2, 3}, 
 * it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.
 */

class Solution {
    power(set){
        return this.power_helper(set, [])
    }

    power_helper(set){

        if(set.length == 0){
            return [[]];
        }
        let r = this.power_helper(set.slice(1))
        let rs = []
        for(let i = 0; i < r.length; i++){
            rs = [...rs, [...r[i], set[0]]];
        }
        return [...r,...rs];
    }
}

console.log(new Solution().power([1, 2, 3]))