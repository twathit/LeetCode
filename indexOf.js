const indexOf = (a, b) => {
  const reg = new RegExp(`${b}`, 'gi');
  const res = reg.exec(a);
  return res ? res.index : -1;
}
