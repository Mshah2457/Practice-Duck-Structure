import * as React from 'react';
import { PureComponent } from "react";
import { AppRegistry } from "react-native";
import { StackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';
import { Provider, connect } from 'react-redux';
import store from "./src/Store";
import AppNavigator from "./src/Navigation/containers/index";

// Build App Frame
const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

// Connect to Redux. Later on we might need to connect global widgets and other state
const mapStoreToProps = state => ({ nav: state.getIn(["nav"]) });
const mapActionsToProps = dispatch => ({ dispatch });
const App = connect(mapStoreToProps,mapActionsToProps)(AppWithNavigationState);

export default class Root extends PureComponent<{}, {}> {

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Agordia', () => Root);
