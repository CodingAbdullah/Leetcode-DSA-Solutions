function isValid(s: string): boolean {
    let stackArray: string[] = [];

    // Invalid case
    if (s.length === 1) {
        return false;
    }
    else {
        // Follow a stack-like pattern to solving this problem
        for (let i = 0; i < s.length; i++) {
            if (s.charAt(i) === '(' || s.charAt(i) === '[' || s.charAt(i) === '{') {
                stackArray.push(s.charAt(i));
            }
            else {
                let element = stackArray.pop();
                if (s.charAt(i) === ']' && element === '[') {
                    continue;
                }
                else if (s.charAt(i) === '}' && element === '{') {
                    continue;
                }
                else if (s.charAt(i) === ')' && element === '(') {
                    continue;
                }
                else {
                    return false;
                }
            }
        }

        // The array should be empty, if not, also false
        return stackArray.length === 0 ? true: false ;
    }
};