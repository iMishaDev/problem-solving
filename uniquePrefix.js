import { TrieNode } from './helpers.js';

class Solution {
    static getUniquePrefixes(names){
        let trie = this.#constructTrie(names)
        let prefixes = []
        for(const name of names){
            prefixes.push(this.#traverseTrie(trie, [...name], '', 0))
        }

        return prefixes
    }

    static #traverseTrie(trie, letters, prefix, i){

        prefix += trie.value;

        if(trie.count === 1)
            return prefix;
        
        let root = trie.children.find((n) => n.value === letters[i])
        
        return this.#traverseTrie(root, letters, prefix, i + 1);
    }

    static #constructTrie(words){
        let trie = new TrieNode('');
        for(const word of words){
            let root = trie;

            const letters = [...word];
            let i = 0;
            
            while(root.children.find((n) => n.value === letters[i])){
                root = root.children.find((n) => n.value === letters[i])
                root.count += 1
                i += 1
            }

            for(; i < letters.length; i++){
                let letterNode = new TrieNode(letters[i]);
                letterNode.count += 1
                root.children.push(letterNode);
                root = letterNode;
            }

            root.isWord = true;
        }
        return trie;

    } 
}

console.log('list of unique prefixes', Solution.getUniquePrefixes(['jon', 'john', 'jack', 'techlead']))