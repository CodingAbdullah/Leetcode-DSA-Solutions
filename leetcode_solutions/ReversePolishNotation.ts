function evalRPN(tokens: string[]): number {
    let finalNumber = [];

    // a and b are reversed as we are using a stack (LIFO)
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] == '+') {
            let b = Number(finalNumber.pop());
            let a = Number(finalNumber.pop());

            let finalResult = a + b; // Perform operation
            finalNumber.push(finalResult); // Push the operated number to stack
        }
        else if (tokens[i] == '-') {
            let b = Number(finalNumber.pop());
            let a = Number(finalNumber.pop());

            let finalResult = a-b; // Perform operation
            finalNumber.push(finalResult); // Push the operated number to stack
        }
        else if (tokens[i] == '*') {
            let b = Number(finalNumber.pop());
            let a = Number(finalNumber.pop());

            let finalResult = a*b; // Perform operation
            finalNumber.push(finalResult); // Push the operated number to stack
        }
        else if (tokens[i] == '/') {
            let b = Number(finalNumber.pop());
            let a = Number(finalNumber.pop());

            let finalResult = Math.floor(a/b) < 0 ? Math.ceil(a/b) : Math.floor(a/b); // Perform operation
            finalNumber.push(finalResult); // Push the operated number to stack
        }
        else {
            finalNumber.push(tokens[i]); // Push the number to the stack
        }
    }
     
    // Finally return the final calculated number from the stack
    return Number(finalNumber.pop());
};