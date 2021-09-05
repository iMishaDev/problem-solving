class Solution {
    static merge(s1, s2){
        if(s1 === ''){
            if(s2 === '')
                return '';
            return s2;
        } else if (s2 === ''){
            return s1;

        } else if(s1[0] > s2[0])
            return s2[0] + this.merge(s1, s2.slice(1, s2.length))
        else return s1[0] + this.merge(s1.slice(1, s1.length), s2)
    }
}

console.log('merge two strings', Solution.merge('acu', 'bst'))