function isRectangleCover(rectangles: number[][]): boolean {
  let X1 = Number.MAX_SAFE_INTEGER
  let Y1 = Number.MAX_SAFE_INTEGER
  let X2 = Number.MIN_SAFE_INTEGER
  let Y2 = Number.MIN_SAFE_INTEGER
  let expected_area = 0
  let actual_area = 0

  const set = new Set()
  for(let [x1, y1, x2, y2] of rectangles) {
    X1 = Math.min(X1, x1)
    Y1 = Math.min(Y1, y1)
    X2 = Math.max(X2, x2)
    Y2 = Math.max(Y2, y2)

    actual_area += (x2 - x1) * (y2 - y1)

    const p1 = `${x1}_${y2}`
    const p2 = `${x2}_${y2}`
    const p3 = `${x2}_${y1}`
    const p4 = `${x1}_${y1}`
    const arr = [p1, p2, p3, p4]

    arr.forEach(item => {
      if (set.has(item)){
        set.delete(item)
      } else {
        set.add(item)
      }
    })
  }

  expected_area = (X2 - X1) * (Y2 - Y1)

  if (expected_area !== actual_area){
    return false
  }

  if (set.size !== 4) return false

  if (!set.has(`${X1}_${Y2}`)) return false
  if (!set.has(`${X1}_${Y1}`)) return false
  if (!set.has(`${X2}_${Y1}`)) return false
  if (!set.has(`${X2}_${Y2}`)) return false
  

  return true
};


const rectangles = [
  [1,1,3,3],
  [3,1,4,2],
  [3,2,4,4],
  [1,3,2,4],
  [2,3,3,4]
]

console.log(isRectangleCover(rectangles))

