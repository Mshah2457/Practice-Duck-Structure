import { NavigationActions } from 'react-navigation';

import AppNavigator from "../containers/index";

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);

    return newState || state;
};

export default navReducer;