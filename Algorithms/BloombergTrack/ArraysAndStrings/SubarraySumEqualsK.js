




var subarraySum = function(nums, k) {
    const map = new Map();
    let count = 0;
    let sum = 0;
    map.set(0,1);
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if(map.has(sum-k)) {
            count += map.get(sum-k);
        }
        map.set(sum, (map.has(sum) ? map.get(sum) : 0) + 1); // if map has property, get it or change it to 0 and add 1.
    }
    return count;
};
