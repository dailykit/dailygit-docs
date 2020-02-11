const normalize = data => {
  let links = {};
  data.map(item => {
    if (Array.isArray(item.children)) {
      return item.children.map(i => {
        const res = normalize(item.children);
        return Object.keys(res).map(j => (links[j] = res[j]));
      });
    } else {
      return (links[item.id] = item);
    }
  });
  return links;
};

export default normalize;
