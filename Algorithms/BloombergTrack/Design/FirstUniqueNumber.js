/**
You have a queue of integers, you need to retrieve the first unique integer in the queue.

Implement the FirstUnique class:

FirstUnique(int[] nums) Initializes the object with the numbers in the queue.
int showFirstUnique() returns the value of the first unique integer of the queue, and returns -1 if there is no such integer.
void add(int value) insert value to the queue.

**/


/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
    this.queue = nums;
    this.map = {};
    for (let i = 0; i < this.queue.length; i++){
       if (this.map[this.queue[i]] !== undefined){
         this.map[this.queue[i]]++
       } else {
       this.map[this.queue[i]] = 1
       }
    }

};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    for (let i = 0; i < this.queue.length; i++){
        if (this.map[this.queue[i]] === 1){
            return parseInt(this.queue[i])
        }
    }
    return -1
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
    this.queue.push(value);

    if (this.map[value] !== undefined){
        this.map[value]++
    } else {
        this.map[value] = 1
    }
};

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
