/**
Design a data structure that is initialized with a list of different words. Provided a string, you
should determine if you can change exactly one character in this string to match any word in the data
structure.

Implement the MagicDictionary class:

MagicDictionary() Initializes the object.
void buildDict(String[] dictionary) Sets the data structure with an array of distinct strings
dictionary.
bool search(String searchWord) Returns true if you can change exactly one character in searchWord to
match any string in the data structure, otherwise returns false.


Example 1:

Input
["MagicDictionary", "buildDict", "search", "search", "search", "search"]
[[], [["hello", "leetcode"]], ["hello"], ["hhllo"], ["hell"], ["leetcoded"]]
Output
[null, null, false, true, false, false]

Explanation
MagicDictionary magicDictionary = new MagicDictionary();
magicDictionary.buildDict(["hello", "leetcode"]);
magicDictionary.search("hello"); // return False
magicDictionary.search("hhllo"); // We can change the second 'h' to 'e' to match "hello" so we return True
magicDictionary.search("hell"); // return False
magicDictionary.search("leetcoded"); // return False


Constraints:

1 <= dictionary.length <= 100
1 <= dictionary[i].length <= 100
dictionary[i] consists of only lower-case English letters.
All the strings in dictionary are distinct.
1 <= searchWord.length <= 100
searchWord consists of only lower-case English letters.
buildDict will be called only once before search.
At most 100 calls will be made to search.
**/

/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
    this.dict = new Map(); 
};

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
    for (let word of dictionary){
        if (this.dict.get(word.length)) {
            this.dict.get(word.length).push(word)
        }
        else {
            this.dict.set(word.length, [word])
        }
    }
};

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
    if(!this.dict.get(searchWord.length)) return false;
    let set = [...this.dict.get(searchWord.length)];
    let w = 0;

    while(w<searchWord.length){
        for(let i = 0; i < set.length; i++){
            if (searchWord[w] !== set[i][w]){
                if(searchWord.slice(w+1) === set[i].slice(w+1)) return true;
                set.splice(i,1), i--;
            }
        }
        w++
    }

    return false;

};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
