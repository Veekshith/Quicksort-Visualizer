const steps = () => {
  let steps = [];

  const initialize = () => (steps = []);

  const add = input => steps.push(input);

  const getSteps = () => steps;

  return {
    initialize,
    add,
    getSteps
  };
};

export default steps;
