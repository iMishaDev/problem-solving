class Solution {
    static closestToOrigin(points, k){
        // sort by distance 
        points = points.sort((a, b) => {
            return (a[0] * a[0] + a[1]*a[1]) - (b[0] * b[0] + b[1]*b[1])
        });
        return points.slice(0, k)
    }
}

console.log('Closest to origin', Solution.closestToOrigin([[1, 1], [3, 3], [2, 2], [4, 4], [-1, -1]], 3))