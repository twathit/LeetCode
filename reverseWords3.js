

const reverseWords2 = (s) => {
  return s.split(' ').map(item => item.split('').reverse().join('')).join(' ');
}
