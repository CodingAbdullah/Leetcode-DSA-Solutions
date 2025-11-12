function containsDuplicate(nums: number[]): boolean {
    let nMap = new Map<number, number>();

    // Populate a map for all the occurrances of each number in the array
    for (let i = 0; i < nums.length; i++) {
        if (nMap.has(nums[i])) {
            nMap.set(nums[i], nMap.get(nums[i])! + 1);
        }
        else {
            nMap.set(nums[i], 1);
        }
    }

    // Iterate through the map and check for any occurrances greater than 1
    for (let j = 0; j < nums.length; j++) {
        if (nMap.get(nums[j])! >= 2) {
            return true;
        }
        else {
            continue;
        }
    }

    // We reach here if there are no duplicates
    return false;
};