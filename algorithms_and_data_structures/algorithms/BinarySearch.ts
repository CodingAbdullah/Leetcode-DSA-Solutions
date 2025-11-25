function binarySearch(nums: number[], target: number): number{
    let left_bound = 0;
    let right_bound = nums.length - 1;
    let mid = Math.floor((left_bound + right_bound)/2);

    // Use two pointers, on the left and right end of the array
    // Work towards and reset bounds to re-calibrate
    // Return the matching index where the target value resides
    while (left_bound <= right_bound) {
        if (nums[mid] == target) {
            return mid;
        }
        else if (nums[mid] < target) {
            left_bound = mid + 1;
        }
        else {
            // nums[mid] > target
            right_bound = mid - 1;
        }

        // Re-calculate mid
        mid = Math.floor((left_bound + right_bound)/2);
    }

    return -1;
}
