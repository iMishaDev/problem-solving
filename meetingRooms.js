class Solution {
    static getNumOfMeetingRooms(schedules){
        let count = 0;
        for (let i = 0; i < schedules.length; i++){
            for (let j = 0; j < schedules.length; j++){
                if(schedules[i][0] > schedules[j][1] || schedules[i][0] < schedules[j][0] || schedules[i][1] > schedules[j][1])
                    count += 1;
            }
        }
        return count;
    }
}

console.log('Meeting Rooms : ', Solution.getNumOfMeetingRooms([[20, 30], [10, 21], [0, 50]]))