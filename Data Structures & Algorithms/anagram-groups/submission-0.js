class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
     groupAnagrams(strs) {
        const res = {};

        for (let s of strs) {
            const count = new Array(26).fill(0);
            for(let c of s) {
              console.log(c.charCodeAt(0), 'a'.charCodeAt())
               count[c.charCodeAt(0)-'a'.charCodeAt(0)] +=1;
            }
            console.log("count",count);
            const key = count.join(",");
            console.log("key", key)
            if (!res[key]) {
                res[key] = []
            }
            res[key].push(s)      
        }
        console.log(res);
        return Object.values(res);
    }
}
