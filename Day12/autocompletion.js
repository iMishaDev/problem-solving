import { TrieNode } from '../helpers.js';

const words = ['dog', 'dark', 'cat', 'door', 'dodge'];

class Solution {
    /**
     * Time Complexity: O(n^2)
     * @param {String} text 
     * @returns {Array}
     */
    static autocomplete(text){
        return words.filter((word) => word.includes(text))
    }

    static autocomplete_2(text){
        let trie = this.#constructTrie(words);
        const letters = [...text];
        let i = 0;
            
        while(trie.children.find((n) => n.value === letters[i])){
            trie = trie.children.find((n) => n.value === letters[i])
            i += 1
        }
        return this.dfs(trie, text, [])
    }

    static dfs(node, prefix, words){
        if(node.isWord)
            words.push(prefix);
        for(const char of node.children){
            this.dfs(char, `${prefix}${char.value}`, words)
        }

        return words;
    }


    static #constructTrie(words){
        let trie = new TrieNode('');
        for(const word of words){
            let root = trie;

            const letters = [...word];
            let i = 0;
            
            while(root.children.find((n) => n.value === letters[i])){
                root = root.children.find((n) => n.value === letters[i])
                i += 1
            }

            for(; i < letters.length; i++){
                let letterNode = new TrieNode(letters[i]);
                root.children.push(letterNode);
                root = letterNode;
            }

            root.isWord = true;
        }
        return trie;

    }

}

console.log('autocomplete \'do\'', Solution.autocomplete_2('do'))