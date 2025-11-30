function searchInsert(nums: number[], target: number): number {
    // Implement binary search
    let left_bound = 0;
    let right_bound = nums.length - 1;
    let mid = Math.floor((left_bound + right_bound)/2);

    while (left_bound <= right_bound) {
        if (nums[mid] < target) {
            left_bound = mid + 1;
        }
        else if (nums[mid] > target) {
            right_bound = mid - 1;
        }
        else {
            return mid;
        }

        // Re-calculate mid
        mid = Math.floor((left_bound + right_bound)/2);
    }
    
    // Return the first index
    if (left_bound === 0 && right_bound === 0) {
        return 0;
    }
    // Else move up a spot and that is where the number will be stored
    else {
        return mid + 1;
    }
};