class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       if(s.length !== t.length) return false;  
        let sCount = {};
        let tCount = {};

        for (let i=0; i<s.length; i++) {

            sCount[s[i].toLowerCase()] = (sCount[s[i]] || 0)+1;
            tCount[t[i].toLowerCase()] = (tCount[t[i]] || 0) +1;
        }
        console.log(sCount,tCount)

        for (let key in sCount) {
            console.log(key, sCount[key], tCount[key])
            if(sCount[key] !== tCount[key]) {
                return false
            }
        }
        return  true
    
    }
}
