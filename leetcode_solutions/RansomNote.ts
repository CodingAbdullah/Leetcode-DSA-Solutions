function canConstruct(ransomNote: string, magazine: string): boolean {
    // Map for mapping the occurrances of each character for proper checking
    let rMap = new Map<string, number>();
    let mMap = new Map<string, number>();

    // Populate map of rMap with all the occurrances in ransom note
    for (let i = 0; i < ransomNote.length; i++) {
        if (rMap.has(ransomNote.charAt(i))) {
            rMap.set(ransomNote.charAt(i), rMap.get(ransomNote.charAt(i))! + 1);
        }
        else {
            rMap.set(ransomNote.charAt(i), 1);
        }
    }

    // Populate map of mMap with all the occurrances in magazine
    for (let i = 0; i < magazine.length; i++) {
        if (mMap.has(magazine.charAt(i))) {
            mMap.set(magazine.charAt(i), mMap.get(magazine.charAt(i))! + 1);
        }
        else {
            mMap.set(magazine.charAt(i), 1);
        }
    }

    // Now, iterate through ransomNote and check if Magazine contains the characters and exact occurrance
    for (let i = 0; i < ransomNote.length; i++) {
        if (mMap.has(ransomNote.charAt(i))) {
            if (mMap.get(ransomNote.charAt(i))! >= rMap.get(ransomNote.charAt(i))!) {
                continue; // If the occurrances match or are greater than the required characters, continue
            }
            else {
                return false; // Cannot formulate the string, return false
            }
        }
        else {
            return false; // Cannot formulate the string, return false
        }
    }

    // If you reach here, the check was valid
    return true;
};