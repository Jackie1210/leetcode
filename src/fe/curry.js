const curry = (fn, ...args) => {
  if (args.length >= fn.length){
    return fn(args)
  } else {
    return (..._args) => curry(fn, ...args, ..._args)
  }
}