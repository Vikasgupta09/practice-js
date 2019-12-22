const flatten = (obj, pre = '') => {
  return Object.keys(obj).reduce((acc, k) => {
    let prefix = pre.length > 0 ? pre + '.' : '';
    if (typeof obj[k] === 'object') {
      Object.assign(acc, flatten(obj[k], prefix + k));
    } else {
      acc[prefix + k] = obj[k];
    }
    return acc;
  }, {});
};
