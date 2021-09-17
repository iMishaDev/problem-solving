class Solution {
    static product(list){
        let result = new Array(list.length).fill(1);
        let total = 1;
        for(let i = 0, j = 1; i < list.length - 1; i++, j++){
            total *= list[i];
            result[j] = total;
        }

        total = 1;
        for(let i = list.length - 1, j = result.length - 2; i > 0; i--, j--){
            total *= list[i];
            result[j] *= total;
        }

        return result;
    }
}

console.log('Product Of Array except self:', Solution.product([1,2,3,4]))