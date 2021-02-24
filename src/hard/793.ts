function preimageSizeFZF(K: number): number {
  return search(K)
}

function search(target: number): number{
  let left = 0
  let right = target

  while(left <= right){
    let mid = left + Math.floor((right - left) / 2)
    const num = zeroNum(mid)
    if (num === target){
      return 5
    } else if (num < target){
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return 0
}

function zeroNum(m){
  let result=m;
  while(m>0){
      m = Math.floor(m/5);
      result += m;
  }
  return result;
}


console.log(preimageSizeFZF(5))
