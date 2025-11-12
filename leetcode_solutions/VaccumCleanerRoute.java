class Solution {
    public boolean vacuumReturnsToStart(String moves) {
        // Lateral and Longitudal moves:
        // UP and RIGHT are positive
        // DOWN AND LEFT ARE negative
        // Use an array of length 2 and each character to map out the different moves
        // [0, 0] is to be treated as the origin
        int[] arr = new int[2];

        for (int i = 0; i < moves.length(); i++) {
            if (moves.charAt(i) == 'L') {
                arr[0] -= 1;
            }
            else if (moves.charAt(i) == 'R') {
                arr[0] += 1;
            }
            else if (moves.charAt(i) == 'D') {
                arr[1] -= 1;
            }
            else if (moves.charAt(i) == 'U') {
                arr[1] += 1;
            }
        }

        // If after the series of moves we are at the origin, return true else return false
        if ((arr[0] == 0) && (arr[1] == 0)) {
            return true;
        }
        else {
            return false;
        }
    }
}