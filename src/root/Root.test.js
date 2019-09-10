import React from 'react';
import Root from './Root';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<Root />)
});


modified:   .DS_Store
modified:   package-lock.json
modified:   package.json
modified:   src/.DS_Store
     src/actions/quicksortAction.js
     src/actions/sortAction.js
     src/actions/stepsAction.js
     src/actions/types.js
     src/components/app/App.css
     src/components/app/App.js
     src/components/app/App.test.js
     src/components/input/Input.css
     src/components/input/Input.js
     src/components/input/Input.test.js
     src/components/root/Root.js
     src/components/visualizer/ArrayList.css
     src/components/visualizer/ArrayList.js
     src/components/visualizer/ListItem.css
     src/components/visualizer/ListItem.js
     src/components/visualizer/Paginator.css
     src/components/visualizer/Paginator.js
     src/components/visualizer/Step.css
     src/components/visualizer/Step.js
     src/components/visualizer/Visualizer.css
     src/components/visualizer/Visualizer.js
modified:   src/index.js
     src/reducers/index.js
     src/reducers/sortReducer.js
     src/reducers/stepsReducer.js
     src/store.js
     src/utilities/changedElementBuilder.js
     src/utilities/changedStateBuilder.js
     src/utilities/elementStateBuilder.js
     src/utilities/quicksorter.js
     src/utilities/stepElementStatesBuilder.js
     src/utilities/steps.js
     src/utilities/uniqueKeyBuilder.js
