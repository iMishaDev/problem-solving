class Solution {
    static getAbsolutePath(path){
        let paths = path.split('/');
        let stack = [];
        for (const path of paths){
            if(path !== '..' && path !== '.'){
                stack.push(path);
            }else if(path === '..'){
                stack.pop();
            }
        }
        return stack.join('/')
    }
}

console.log('get absolute path', Solution.getAbsolutePath('/users/tech/docs/.././desk/../'))