function pivotIndex(nums: number[]): number {
    // [1, 7, 3, 6, 5, 6] sum[0, i-1] sumR[i+1, length-1]
    // pa: [1, 8, 11, 17, 22, 28]
    // left: [0, curIdx - 1]
    // right: [curIdx + 1, length. - 1]

    let runningSum = 0;
    let prefixArray = new Array(nums.length);

    // Create a prefix array of all the running sums
    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i];
        prefixArray[i] = runningSum;
    }

    // Now, calculate the pivot index
    for (let j = 0; j < prefixArray.length; j++) {
        let leftSum = j === 0 ? 0 : prefixArray[j-1];
        let rightSum = j === prefixArray.length - 1 ? 0 : prefixArray[prefixArray.length - 1] - prefixArray[j];


        // Check to see if the left sum equates to the right sum
        if (leftSum === rightSum) {
            return j;
        }
        else {
            continue;
        }
    }

    return -1;
};