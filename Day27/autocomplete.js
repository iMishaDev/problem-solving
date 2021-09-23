import { TrieNode } from '../helpers.js';

/**
 * previously worked on 
 */

class Solution {
    #words = ['dog', 'deer', 'deal'];

    autocomplete(prefix){
        let trie = this.#constructTrie();
        let node = trie;
        for(const letter of prefix){
            node  = node.children.find((child) => child.value === letter);
        }
        return this.#constructWords(prefix, node, []);
    }

    #constructWords(prefix, node, words){
        if(node.isWord)
            words.push(prefix);
        
        for(let child of node.children){
            this.#constructWords(`${prefix}${child.value}`, child, words)
        }

        return words;
    }

    #constructTrie(){
        let root = new TrieNode();
        for(const word of this.#words){
            let node  = root
            for (const letter of word){
                
                let child  = node.children.find((child) => child.value === letter);
                if(child)
                    node =  child
                else {
                    let newNode = new TrieNode(letter);
                    node.children.push(newNode);
                    node = newNode;
                }                
            }
            node.isWord = true;
        }

        return root;
    }
}


console.log(new Solution().autocomplete('de'))