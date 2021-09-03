class ListFastSum {

    constructor(numbers){
        this.numbers = numbers;
    }
    
    sum(start, end){
        let sum = 0;
        for(let i = start; i < end; i++){
            sum += this.numbers[i];
        }

        return sum;
    }
}

console.log('List Fast Sum', new ListFastSum([1, 2, 3, 4, 5, 6, 7]).sum(2, 5))