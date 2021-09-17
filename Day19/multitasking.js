class Solution {
    static timeSpent(tasks, coolDown){
        let total = 0;
        let i = 0;

        while(i < tasks.length - 1){
            if(tasks[i] === 1 && tasks[i + 1] === 2){
                total += 1;

            } else  {
                total += coolDown  + 1;
            }
            i += 1;
        }

        return total + 1;
    }

}

// [1..1..1].. => 7
// [12..1].. => 5
console.log(Solution.timeSpent([1, 2, 1], 2))