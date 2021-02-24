# algorithms-repo
This repo is just for relearning algorithms and DS.

## TIPS
### 利用`|`和空格将英文字符转换为小写
```js
String.fromCharCode('a'.charCodeAt() | ' '.charCodeAt()) === 'a'
String.fromCharCode('A'.charCodeAt() | ' '.charCodeAt()) === 'a'
```
### 利用`&`和`_`将英文字符转换为大写
```js
String.fromCharCode('A'.charCodeAt() & '_'.charCodeAt()) === 'A'
String.fromCharCode('a'.charCodeAt() & '_'.charCodeAt()) === 'A'
```

### 利用`^`和空格在大小写之间进行转换
```js
String.fromCharCode('A'.charCodeAt() ^ ' '.charCodeAt()) === 'a'
String.fromCharCode('a'.charCodeAt() ^ ' '.charCodeAt()) === 'A'
```

### 判断两个数字异号
```js
-1 ^ 2 = -3
```

### 消除数字 n 的二进制表示中的最后一个 1
```js
n & (n - 1)
```

### 判断一个数是不是2的指数
```js
function isPowerOf2(num){
  if (num < 0) return false
  return (n & (n - 1)) === 0
}
```
