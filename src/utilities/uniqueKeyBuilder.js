const uniqueKeyBuilder = () => {
  let uniqueKeys = [];
  const initialize = () => (uniqueKeys = []);

  const build = arr => {
    arr.map((item, index) => {
      uniqueKeys.push(index);
    });
  };
  const getUniqueKeys = () => uniqueKeys;
  return {
    initialize,
    build,
    getUniqueKeys
  };
};

export default uniqueKeyBuilder;
