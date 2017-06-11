'use strict';

//shallow-merge an object
exports.extendObj = (o, o2) => {
  let keys = Object.keys(o2);
  for (var i = 0; i < keys.length; i++) {
    o[keys[i]] = o2[keys[i]];
  }
  return o;
};

//uncompress data in the adhoc compressed form {'ly':'kind,quick'}
exports.uncompress_suffixes = function(list, obj) {
  const keys = Object.keys(obj);
  const l = keys.length;
  for (let i = 0; i < l; i++) {
    const arr = obj[keys[i]].split(',');
    for (let i2 = 0; i2 < arr.length; i2++) {
      list.push(arr[i2] + keys[i]);
    }
  }
  return list;
};
