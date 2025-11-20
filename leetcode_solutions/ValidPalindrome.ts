function isPalindrome(s: string): boolean {
    //[^a-z0-9]/g regex for replacing punctuation, and non-alpha numeric char
    let t = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

    // See end-to-end pointers and check if the characters match
    // Stop half-way
    // Any invalidate means the string is not a palindrome
    for (let i = 0; i < Math.floor(t.length/2); i++) {
        if (t.charAt(i) === t.charAt(t.length - i - 1))  {
            continue;
        }
        else {
            return false;
        }
    }

    // We reach here, we can confirm it is a palindrome
    return true;
};