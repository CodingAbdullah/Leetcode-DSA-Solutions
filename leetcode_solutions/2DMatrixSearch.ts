// Traverse through the 2D-array
function searchMatrix(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        if ((matrix[i][0] <= target) && (matrix[i][matrix[i].length - 1] >= target)) {
            // This the matrix to work with
            // Implement binary search
            let left_bound = 0;
            let right_bound = matrix[i].length - 1;
            let mid = Math.floor((left_bound + right_bound)/2);

            while (left_bound <= right_bound) {
                if (matrix[i][mid] === target) {
                    return true;
                }    
                else if (matrix[i][mid] > target) {
                    right_bound = mid - 1;
                }
                else {
                    left_bound = mid + 1;
                }

                // Re-calculate the mid-point
                mid = Math.floor((left_bound + right_bound)/2);
            }
        }
        else {
            continue;
        }
    }

    return false; // If no searches were found, return false
}