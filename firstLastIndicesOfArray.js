class Solution {
    static find(numbers, target,){
        let first = this.findHelper(numbers,0, numbers.length -1 ,  target, true);
        let second = this.findHelper(numbers,0, numbers.length -1, target, false);
        return [first, second];
    }

    static findHelper(numbers, start, end, target, findFirst){
        if(end < start) return -1;
        let mid = Math.floor(( start + end)/2);

        if(findFirst){
            if(numbers[mid] === target && ( numbers[mid-1] < target || mid ===0))
                return mid;
            if( numbers[mid] >= target)
                return this.findHelper(numbers, start, mid - 1, target, findFirst );
            else 
                return this.findHelper(numbers, mid + 1,  end, target, findFirst );
        } else {
            if(numbers[mid] === target && (mid === numbers.length -1 || numbers[mid + 1] > target))
                return mid;
            if(numbers[mid] > target )
                return this.findHelper(numbers, start,  mid-1, target, findFirst );
            else
                return this.findHelper(numbers, mid+1, end, target, findFirst );
        }
    }
}

arr = [1, 3, 3, 5, 7, 8, 9, 9, 9, 15]
x = 9
console.log(Solution.find(arr, 9))