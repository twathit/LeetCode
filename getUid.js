// 提取字符串中所有的uid=123213213格式中的数字

function getUid(str) {
  return str.match(/(?<=uid=)\w+/g).map(str=>str.replace(/[^\d]/g, ''))
}

console.log(getUid('asdasdasdasddassduid=o12345;asdsadasduid=fgdf6789;qwwqe,'))
