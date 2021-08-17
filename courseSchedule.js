class Solution {
    static findCycle(courses){
        let coursesSheet = this.#constructSheet(courses);
        let hasCycle = false;

        
        for (const key in coursesSheet){
            coursesSheet[key].forEach((num) => {
                if (coursesSheet[num] && coursesSheet[num].includes(Number(key)))
                    hasCycle = true;
            })
        }

        return hasCycle;
    }

    static #constructSheet(courses){
        for (const course of courses){
            if (coursesSheet[course[0]])
                coursesSheet[course[0]].push(course[1]);
            else coursesSheet[course[0]] = [course[1]];
        }
    }
}

console.log('find Cycle ', Solution.findCycle([[0,1], [0,3], [1,0]]));