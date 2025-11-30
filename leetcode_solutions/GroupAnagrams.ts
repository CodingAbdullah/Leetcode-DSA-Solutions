function groupAnagrams(strs: string[]): string[][] {
    let anagramMap = new Map();
    
    // Sorted strings, anagrams will always return the same values
    for (let i = 0; i < strs.length; i++) {
        let sortedString = strs[i].split('').sort().join('');

        if (anagramMap.has(sortedString)){
            let arrayString = anagramMap.get(sortedString);
            arrayString.push(strs[i]);
            anagramMap.set(sortedString, arrayString);
        }
        else {
            anagramMap.set(sortedString, [strs[i]]);
        }
    }

    let anagramArray = [];
    let keys = Array.from(anagramMap.keys());

    // Add in the sub arrays 
    for (let k = 0; k < keys.length; k++) {
        anagramArray.push(anagramMap.get(keys[k]));
    }

    return anagramArray;
};