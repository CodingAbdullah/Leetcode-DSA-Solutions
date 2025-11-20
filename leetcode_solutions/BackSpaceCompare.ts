function backspaceCompare(s: string, t: string): boolean {
    let sStringStack: string[] = [];
    let tStringStack: string[] = [];

    // Stack for String s
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === '#') {
            sStringStack.pop(); // Pop the latest element to act as a backspace
        }
        else {
            sStringStack.push(s.charAt(i)); // Push element to stack
        }
    }

    // Stack for string t
    for (let j = 0; j < t.length; j++) {
        if (t.charAt(j) === '#') {
            tStringStack.pop(); // Pop the latest element to act as a backspace
        }
        else {
            tStringStack.push(t.charAt(j)); // Push element to stack
        }
    }

    // Combine all the characters added from the stacks and compare the two strings
    return sStringStack.join('') === tStringStack.join('');
};