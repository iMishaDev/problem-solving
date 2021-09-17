class Solution {
    static reconstructQueue(queue){
        let line = [];
        queue.sort((a, b) => {
            if(b[0] !== a[0])
                return b[0] - a[0]
            else return b[1] - a[0]
        });
        queue.forEach((element) => {
            line.splice(element[1], 0, element)
        })
        return line;
    }


    
}

console.log(Solution.reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]))