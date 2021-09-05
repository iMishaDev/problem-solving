class Solution {
    static pushDominoes_1(dominoes){
        let dominoesList = [...dominoes];
        for (let i =0; i < dominoesList.length; i++){
            if (dominoesList[i] === 'R' && dominoesList[i-1] !== 'R')
                dominoesList[i+1] = 'R';
            else if (dominoesList[i] === 'L' && dominoesList[i+1] !== 'L')
                dominoesList[i-1] = 'L';
        }
        return dominoesList.join('');
    }


    static pushDominoes_2(dominoes){
        let dominoesList = [...dominoes];
        let forces = new Array(dominoesList.length).fill(0);
        let max_force = dominoesList.length;
        let result = '';
        let force = 0;
        for (let i = 0; i < dominoesList.length; i++){
            if(dominoesList[i] === 'R')
                force = max_force;
            else if (dominoesList[i] === 'L')
                force = 0;
            else force = Math.max(0, force - 1);

            forces[i] = force;
        }

        force = 0;
        for (let i = dominoesList.length - 1; i > -1 ; i--){
            if(dominoesList[i] === 'R')
                force = 0;
            else if (dominoesList[i] === 'L')
                force = max_force;
            else force = Math.max(0, force - 1);

            forces[i] -= force;
        }
        
        for (let i = 0; i < forces.length; i++){
            if(forces[i] > 0)
                result += 'R';
            else if (forces[i] < 0 )
                result += 'L';
            else result += '.';
        }

    }
}

console.log('Dominoes ', Solution.pushDominoes_1('..R...L..R.'))

console.log('Dominoes ', Solution.pushDominoes_2('L.R...L..R.'))