function compareObj(a, b) {
  if ((typeof a == 'object' && a != null) &&
    (typeof b == 'object' && b != null)) {
    var count = [0, 0];
    for (var key in a) count[0]++;
    for (var key in b) count[1]++;
    if (count[0] - count[1] != 0) {
      return false;
    }
    for (var key in a) {
      if (!(key in b) || !compareObj(a[key], b[key])) {
        return false;
      }
    }
    for (var key in b) {
      if (!(key in a) || !compareObj(b[key], a[key])) {
        return false;
      }
    }
    return true;
  } else {
    return a === b;
  }
}


let obj = {
  here: {
    is: "an"
  },
  object: 2
};
console.log(compareObj(obj, obj));
// → true
console.log(compareObj(obj, {
  here: 1,
  object: 2
}));
// → false
console.log(compareObj(obj, {
  here: {
    is: "an"
  },
  object: 2
}));
// → true