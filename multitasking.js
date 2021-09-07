class Solution {
    static timeSpent(tasks, coolDown){
        let total = 0;
        let i = 0;

        while(i < tasks.length){
            if(tasks[i] === 1 ){
                total += 1 + coolDown;
            } else {
                total -= Math.abs((1 - coolDown));
                
                if(i === tasks.length -1)
                    total += coolDown;
                else total += coolDown - 1;
            }
            i += 1;
        }

        return total - (coolDown);
    }
}


console.log(Solution.timeSpent([1, 1, 2, 1, 2, 1], 2))