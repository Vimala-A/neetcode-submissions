class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;  
        let sCount = new Map();
        let tCount = new Map();

        for (let i=0; i<s.length; i++) {

            // sCount[s[i].toLowerCase()] = (sCount[s[i]] || 0)+1;
            let sVal = (sCount.get(s[i]) || 0)+1
            sCount.set(s[i],sVal )
            let tVal = (tCount.get(t[i]) || 0)+1
            tCount.set(t[i],tVal )
            // tCount[t[i].toLowerCase()] = (tCount[t[i]] || 0) +1;
        }
        // console.log(sCount,tCount)

        for (let [key,value] of sCount) {
            console.log(key, value, "df", sCount.get(key), tCount.get(key))
            if(sCount.get(key) !== tCount.get(key)) {
                return false
            }
        }
        return  true;
    }
}
