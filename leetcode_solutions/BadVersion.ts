/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        // Good Left
        // Bad Right
        let left_pointer = 1;
        let right_pointer = n;
        let mid = Math.floor((left_pointer + right_pointer)/2);

        // Iterate till left = right
        while (left_pointer <= right_pointer) {
            if (isBadVersion(mid) === false) {
                left_pointer = mid + 1;
            }
            else if (isBadVersion(mid) === true) {
                right_pointer = mid - 1;
            }

            // Re-calculate mid-point
            mid = Math.floor((left_pointer + right_pointer)/2);
        } 

        return mid+1; // Move the pointer over 1
    };
};