function maxDiff(list) {
  return list.length ? Math.max(...list) - Math.min(...list) : 0;
}

///////////////////////////////////////////
function maxDiff(list1) {
  let max = Math.max(...list1);
  let min = Math.min(...list1);
  if (list1.length <= 1) {
    return 0;
  }
  return max - min;
}
///////////////////////////////////////////
function maxDiff(list2) {
  return list2.sort((a, b) => b - a)[0] - list2.sort((a, b) => a - b)[0] || 0;
}
