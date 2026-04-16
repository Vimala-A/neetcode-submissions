class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let setData = new Set();
        let arr = [];
        for (let i=0; i< nums.length; i++) {
            if(setData.has(nums[i])) {
                return true;
            }
            setData.add(nums[i]);
        }
        return false;
    }
}
