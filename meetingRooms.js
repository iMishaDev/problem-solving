class Solution {
    static getNumOfMeetingRooms(schedules){
        let count = 0;
        let visited = [];
        schedules = schedules.sort((a, b) => a[0] - b[0])
        for (let i = 0; i < schedules.length; i++){
            for (let j = 0; j < visited.length; j++){
                if((schedules[i][0] > schedules[j][0] || schedules[i][1] < schedules[j][1]))
                    count += 1;
            }
            visited.push(schedules[i])
        }
        return count;
    }
}

console.log('Meeting Rooms : ', Solution.getNumOfMeetingRooms([[0, 10], [10, 20]]))
console.log('Meeting Rooms : ', Solution.getNumOfMeetingRooms([[20, 30], [10, 21], [0, 50]]))