class Solution {
    num_climbs(target){
        return this.num_climbs_helper_db(target);
    }

    /**
     *  without memoization O(2^n)
     * with memoization O(n)
     * @param {*} step 
     * @param {*} target 
     * @param {*} cache 
     * @returns 
     */

    num_climbs_helper(step, target, cache){
        if(step === target){
            cache[step] = 1
            return 1;
        }
        if(step > target){
            cache[step] = 0
            return 0;
        }

        cache[step] = this.num_climbs_helper(step + 1, target, cache) + this.num_climbs_helper(step + 2, target, cache);
        return cache[step];
    }


    num_climbs_helper_db(target){
        let db = new Array(target + 1).fill(0)
        db[target] = 1;
        db[target - 1] = 1;
        for(let i = target - 2; i > -1; i--){
            db[i] = db[i+1] + db[i+2]
        }
        return db[0];
    }
}

console.log(new Solution().num_climbs(5))