function shipWithinDays(weights: number[], D: number): number {
  let left = getMax(weights)
  let right = getSum(weights) + 1
  while(left < right){
    const mid = Math.floor(left + (right - left) / 2)
    if (canFinish(weights, mid, D)){
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
}

function canFinish(w: number[], cap: number, D: number): boolean{
  let i = 0
  for (let day = 0; day < D; day++) {
      let maxCap = cap;
      while ((maxCap -= w[i]) >= 0) {
          i++;
          if (i == w.length)
              return true;
      }
  }
  return false;
}

function getMax(weights: number[]): number{
  return weights.reduce((acce, curr) => Math.max(acce, curr), -Infinity)
}

function getSum(weights: number[]): number{
  return weights.reduce((acce, curr) => acce + curr, 0)
}

