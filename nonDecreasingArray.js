class Solution {
    static checkPossibility(points){
        let droppingIndex = -1;
        
        for (let i = 0; i < points.length - 1; i++){
            if(points[i] > points[i+1])
                if(droppingIndex !== -1)
                    return false;
                droppingIndex = i;
        }

        if(droppingIndex === 0)
            return true;
        
        if(droppingIndex === -1)
            return true;
        
        if(droppingIndex === points.length - 2 )
            return true;
            
        if(points[droppingIndex + 2] >= points[droppingIndex])
            return true;
            
        if(points[droppingIndex - 1] <= points[droppingIndex + 1])
            return true;

        return false;
    }
}

console.log('Check Possibility ', Solution.checkPossibility([4, 1, 2]))
console.log('Check Possibility ', Solution.checkPossibility([1, 2, 3, 1,4]))

console.log('Check Possibility ', Solution.checkPossibility([3, 2, 4, 1]))
