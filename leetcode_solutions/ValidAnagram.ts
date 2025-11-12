function isAnagram(s: string, t: string): boolean {
    // Anagram is the SAME characters with the SAME length, mixed differently
    // Create two maps detailing the characters and their occurrances in s and t
    // Check that they are equal and if so, return true at the end, and if not, return false
    let sMap = new Map<string, number>();
    let tMap = new Map<string, number>();

    // Populate maps for strings s
    for (let i = 0; i < s.length; i++) {
        if (sMap.has(s.charAt(i))) {
            sMap.set(s.charAt(i), sMap.get(s.charAt(i))! + 1);
        }
        else {
            sMap.set(s.charAt(i), 1);
        }
    }
    
    // Same for t..
    for (let i = 0; i < t.length; i++) {
        if (tMap.has(t.charAt(i))) {
            tMap.set(t.charAt(i), tMap.get(t.charAt(i))! + 1);
        }
        else {
            tMap.set(t.charAt(i), 1);
        }
    }

    // Now check the sMap against tMap
    for (let i = 0; i < s.length; i++) {
        if (tMap.has(s.charAt(i))) { // If it exists, check their occurrance
            if (sMap.get(s.charAt(i)) == tMap.get(s.charAt(i))) {
                continue;
            }
            else {
                return false; // If occurrances do not match return false
            }
        }
        else {
            return false; // If it does not exist, return false
        }
    }

    // Now check the tMap against sMap
    for (let i = 0; i < t.length; i++) {
        if (sMap.has(t.charAt(i))) { // If it exists, check their occurrance
            if (sMap.get(t.charAt(i)) == tMap.get(t.charAt(i))) {
                continue;
            }
            else {
                return false; // If occurrances do not match return false
            }
        }
        else {
            return false; // If it does not exist, return false
        }
    }

    // If after all the checking, all the occurrances match, return true
    return true;

};