const changedStateBuilder = () =>  {
    let changedStates = [];
    const initialize = () => changedStates = [];
    const build = (name, value) =>  changedStates.push({name, value});
    const getChangedStates = () => changedStates;
    return {
        initialize,
        build,
        getChangedStates
    }
}

export default changedStateBuilder;


