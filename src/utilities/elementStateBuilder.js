const elementStateBuilder = () => {
  let elementStates = {};
  const build = (name, value) => {
    elementStates[name] = value;
  };
  const initialize = () => elementStates = {};
  const getElementStates = () => elementStates;
  return {
    initialize,
    build,
    getElementStates
  };
};

export default elementStateBuilder;
