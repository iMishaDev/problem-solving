class Solution {
    decode(message){
        let cache = new Array(message.length).fill(null);
        return this.#decode_helper(message, message.length, cache);
    }

    #decode_helper(message, k, cache){
        if(k === 0)
            return 1;
        let start = message.length - k;
        if(message[start] === '0')
            return 0;
        if(cache[k])
            return cache[k];
        
        let result = this.#decode_helper(message, k - 1, cache);
        let num = Number(message.slice(start, start + 2));
        
        if(num <= 26 && num >= 10)
            result += this.#decode_helper(message, k - 2, cache);
        cache[k] = result;
        return result;
    }
}
console.log(new Solution().decode('111'))


/**
 * helpful reference : https://www.youtube.com/watch?v=qli-JCrSwuk&ab_channel=CSDojo
 */