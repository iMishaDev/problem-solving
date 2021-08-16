class Solution {
    static sort_1(numbers){
        let numSheet = this.#createSheet(numbers);
        let sortedNumbers = [];
        numbers.forEach((number) => {
            numSheet[number] += 1;
        });
        for (const [key, value] of Object.entries(numSheet)){
            sortedNumbers = [...sortedNumbers, ...new Array(value).fill(Number(key))]
        }
        return sortedNumbers;
    }


    static sort_2(numbers){
        let iterator = 0; 
        let oneIterator = 0; 
        let threeIterator = numbers.length - 1;

        while(iterator <= threeIterator){
            if (numbers[iterator] === 1){
                [numbers[iterator], numbers[oneIterator]] = [numbers[oneIterator], numbers[iterator]];
                oneIterator++;
                iterator++;

            }
            else if (numbers[iterator] === 3){
                [numbers[iterator], numbers[threeIterator]] = [numbers[threeIterator], numbers[iterator]];
                threeIterator--;
            }

            else if(numbers[iterator] === 2)
                iterator++;

        }
        return numbers;
    }

    static #createSheet(array){
        const handler = {
            get: function(obj, prop) {
                return prop in obj ?
                obj[prop] :
                0;
            }
            };
        return new Proxy({}, handler);
    }
}

console.log('sorting: ', Solution.sort_2([3,2,1,1,2,3]))