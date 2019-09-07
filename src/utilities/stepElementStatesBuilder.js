
const stepElementStatesBuilder = () => {
    let stepElementStates = [];
    const initialize = () => stepElementStates = [];
    const build = (states) => stepElementStates.push({...states});
    const getStepElementStates = () => stepElementStates;
    return {
        initialize,
        build,
        getStepElementStates
    }
}

export default stepElementStatesBuilder;