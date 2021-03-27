function flat(arr, num = 1){
  return num > 1
    ? arr.reduce((acce, prev) => acce.concat(Array.isArray(prev) ? flat(prev, num - 1) : prev), [])
    : arr.slice()
}
