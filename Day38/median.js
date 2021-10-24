/**
Compute the running median of a sequence of numbers. That is, given a stream of numbers,
print out the median of the list so far on each new element.

Recall that the median of an even-numbered list is the average of the two middle numbers.

For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out:

2
1.5
2
3.5
2
2
2
 */
class Solution {
    median(numbers){
        let medians = [];
        let visited = [];
        for(const number of numbers){ 
            visited.push(number);
            visited.sort((a, b) => a - b);
            let index = Math.floor((visited.length - 1)/2);

            if(visited.length % 2 == 0)
                medians.push((visited[index]+visited[index+1])/2)
            else medians.push(visited[index])
        }
        console.log(medians)
    }
}

console.log(new Solution().median([2, 1, 5, 7, 2, 0, 5]))