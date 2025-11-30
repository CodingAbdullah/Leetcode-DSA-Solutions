function productExceptSelf(nums: number[]): number[] {
    // Calculate prefix multiples
    let prefixMultiple = new Array(nums.length).fill(1);

    let runningMultiple = 1;
    // Create a running product array (prefix)
    for (let i = 0; i < nums.length; i++) {
        prefixMultiple[i] = runningMultiple;
        runningMultiple *= nums[i];
    }

    runningMultiple = 1
    // Create a running product array (suffix)
    for (let j = nums.length - 1; j >= 0; j--) {
        prefixMultiple[j] *= runningMultiple;
        runningMultiple *= nums[j];
    }
    
    return prefixMultiple;
};