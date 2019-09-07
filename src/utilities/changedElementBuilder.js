const changedElementBuilder = () =>  {
    let changedElements = [];
    const initialize = () => changedElements = [];
    const build = (index, changedStates) =>  changedElements.push({index, changedStates});
    const getChangedElements = () => changedElements;
    return {
        initialize,
        build,
        getChangedElements
    }
}

export default changedElementBuilder;

