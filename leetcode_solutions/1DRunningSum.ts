function runningSum(nums: number[]): number[] {
    let runningSum = 0;
    let numberSumArray = new Array(nums.length);

    // Use a running sum
    // Populate a new array with each of the values
    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i];
        numberSumArray[i] = runningSum;
    }

    return numberSumArray;
};