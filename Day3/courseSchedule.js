class Solution {

    /**
     * complexity: O(n^2)
     * @param {Array} courses 
     * @returns {Boolean}
     */
    static findCycle_1(courses){
        let coursesSheet = this.#constructSheet(courses);
        let hasCycle = false;

        
        for (const course in coursesSheet){
            coursesSheet[course].forEach((num) => {
                if (coursesSheet[num] && coursesSheet[num].includes(Number(course)))
                    hasCycle = true;
            })
        }

        return hasCycle;
    }

    /**
     * complexity: O(n)
     * @param {Array} courses 
     * @returns {Boolean}
     */
    static findCycle_2(courses){
        let coursesSheet = this.#constructSheet(courses);

        
        for (const course in coursesSheet){
            if(this.#has_cycle(coursesSheet,course, new Set(), {}))
                return true;
        }

        return false;
    }

    static #has_cycle(sheet, course, seen, cache){
        let found = false;

        if(cache[course])
            return cache[course];
        
        if(seen.has(course))
            return true;
        
        if(!sheet[course])
            return false;
        
        seen.add(course);
        
        
        for(const c of sheet[course])
            if(this.#has_cycle(sheet, c, seen, cache)){
                found = true;
                break;
            }
                
        cache[course] = found;

        return found;
    }

    static #constructSheet(courses){
        let coursesSheet = {};
        for (const course of courses){
            if (coursesSheet[course[0]])
                coursesSheet[course[0]].push(course[1]);
            else coursesSheet[course[0]] = [course[1]];
        }
        return coursesSheet;
    }
}

console.log('find Cycle ', Solution.findCycle_2([[0,1], [1,0]]));