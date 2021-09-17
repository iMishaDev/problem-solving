class Solution {
    getBonuses(emp){
        let bonuses = [];
        for(let i = 0; i < emp.length; i++){
            
            if(emp[i] < emp[i-1] && emp[i] > emp[i+1]){
                bonuses[i] = emp[i] - emp[i+1];
            }
            else bonuses[i] = emp[i];

        }
        return bonuses;
    }

    getBonuses2(emp){
        let bonuses = new Array(emp.length).fill(1);
        for(let i = 0; i < emp.length; i++){
            if(emp[i] > emp[i-1]){
                bonuses[i] = emp[i - 1] + 1;
            }
        }


        for(let i = emp.length - 1; i > -1 ; i--){
            if(emp[i] > emp[i + 1]){
                bonuses[i] =Math.max(bonuses[i], emp[i + 1] + 1);
            }
        }
        return bonuses;
    }
}
    

console.log(new Solution().getBonuses2([1, 2, 3, 4, 3, 1]))