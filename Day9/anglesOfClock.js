class Solution {
    static findAngle(h, m){
        let minute = (360 / 60) * m;
        let hour = ( 360 / (60 * 12)) * (h * 60 + m);
        let angle = Math.abs(hour - minute);
        return Math.min(angle, 360 - angle);
    }
}

console.log('angle of a time in a clock', Solution.findAngle(3, 15))