function longestCommonPrefix(strs: string[]): string {
    // Note the shortest string in the list of strings
    let smallestWord = "";
    let smallestWordArray: string[] = [];
    let longestCommonPrefix = "";
    let minLength = 201; // Using max length + 1 per constraints in problem

    // Set to the smallest length string
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < minLength) {
            minLength = strs[i].length;
            smallestWord = strs[i];
        }
    }

    // Create an array of all the different substrings of the smallest word
    // word: -> [w, wo, wor, word]
    for (let j = 0; j < smallestWord.length; j++) {
        smallestWordArray.push(smallestWord.substring(0, j+1));
    }

    // Now build out the longest common prefix in each of the words
    // Return the prefix as soon as a mismatch is found
    // If no mismatch is found, set the current prefix to the new long prefix
    for (let k = 0; k < smallestWordArray.length; k++) {
        for (let x = 0; x < strs.length; x++) {
            if (strs[x].startsWith(smallestWordArray[k])) {
                continue;
            }
            else {
                return longestCommonPrefix;
            }
        }

        // If all checks pass set the longestCommonPrefix to this prefix
        longestCommonPrefix = smallestWordArray[k];
    }

    return longestCommonPrefix;

};