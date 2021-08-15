class Solution {
    find(numbers, target, findFirst){
        let mid = Math.floor(numbers.length/2);
        if(findFirst){
            if(numbers[mid] === target && numbers[mid-1] < target)
                return mid;
            else if(numbers[mid] > target )
                this.find(numbers.slice(0, mid+1), target, findFirst );
            else if(numbers[mid] < target )
                this.find(numbers.slice(mid +1,  numbers.length), target, findFirst );
        } else {
            if(numbers[mid] === target && numbers[mid-1] < target)
                return mid;
            else if(numbers[mid] > target )
                this.find(numbers.slice(mid +1,  numbers.length), target, findFirst );
            else if(numbers[mid] < target )
                this.find(numbers.slice(mid +1,  numbers.length), target, findFirst );
        }
    }
}