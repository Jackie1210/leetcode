function mySqrt(x: number): number {
  let left = 0
  let right = x

  while(left <= right){
    const mid = left + Math.floor((right - left) / 2)
    if (mid * mid === x){
      left = mid + 1
    } else if (mid * mid > x){
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return left - 1
};