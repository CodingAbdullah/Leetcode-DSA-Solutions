function twoSum(nums: number[], target: number): number[] {

    // Double loops for checking the number array and the intended sum target
    // Ensure that if the indices, continue to the next iteration
    // If a sum is found to equte to the target, return the array containing [i, j]
    for (let i = 0 ; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i == j) {
                continue;
            }
            else {
                if (nums[i] + nums[j] == target) {
                    return [i, j];
                }
                else {
                    continue;
                }
            }
        }
    }
    
    // Return [0, 0] if no matches are found
    return [0, 0];
}