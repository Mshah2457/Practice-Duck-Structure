import * as React from "react";
import { PureComponent } from "react";
import { StatusBar, Text, View, Button } from "react-native";
import { Map } from "immutable";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

// Import Dumb Components
import SampleDumbComponent from "../components/sampleDumbComponent";

// Import Action Creators
import { setAppIsLoading } from "../../Main/ducks";
import { setSomeValue, setSomeStuff, setSomeValueAndFetchStuff, fetchSomeValueWithGQL } from "../ducks";
import NavigationRoute from "../../Navigation/models";

// This are the props being received
interface Props {
  isLoading: boolean
  someValue: string
  someStuff: any
  someGql: any
}

// Internal State. No one else should care about this. Only this container and it's components
interface State {
  internalValue: string;
}

const THEME_COLOR = "#1177B7";

class TemplateFeature extends PureComponent<Props, State> {

  // Initial internal state
  state: State = {
    internalValue: "Some Internal Value"
  };

  static navigationOptions = ({ navigation, screenProps }) => {
    return ({
      title: 'Template Feature',
      headerTintColor: '#FFFFFF',
      headerStyle: {
        backgroundColor: THEME_COLOR,
      }
    });
  };

  componentDidMount(){
    const { handleIsLoading, handleSomeValueAndFetchStuff, handleFetchSomeValueWithGQL } = this.props;

    handleIsLoading(true);

    Promise.all([
      handleSomeValueAndFetchStuff("narf"),
      handleFetchSomeValueWithGQL(),
    ])
      .then(()=> {
          handleIsLoading(false);
      })
      .catch( err => {
          console.log("Oooopss");
      });
  }

  handleNavigate(){
    this.props.navigation.navigate(NavigationRoute.ViewSearchPhysician);
  }

  // Render!
  render() {
    // Extract props
    const {
      isLoading,
      someValue,
      someStuff,
      someGql,
    } = this.props;

    // Extract internal value
    const {
      internalValue
    } = this.state;

    return (
      <View>
        <StatusBar
          translucent={true}
          barStyle="light-content"
        />
      {isLoading ?
        <Text>Loading...</Text> :
        <View>
          <View style={{ marginBottom: 20 }}>
            <Text>Value from STATE Example:</Text>
            <Text> {internalValue} </Text>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text>DumbComponent Example:</Text>
            <SampleDumbComponent foo={someValue} bar={someStuff} />
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text>GQL Value Example:</Text>
            <Text>{
              JSON.stringify(someGql)
            }</Text>
          </View>
          <Button
            onPress={this.handleNavigate.bind(this)}
            title="Navigation Example Button"
            color="blue"
          />
        </View>}
      </View>
    );
  }
}

// Here we map dispatch to all action creators, and all action creators back into props
const mapActionsToProps = (dispatch: Dispatch<any>) => {
  return {
    handleIsLoading: bindActionCreators(setAppIsLoading, dispatch),
    handleSomeValue: bindActionCreators(setSomeValue, dispatch),
    handleSomeStuff: bindActionCreators(setSomeStuff, dispatch),
    handleSomeValueAndFetchStuff: bindActionCreators(setSomeValueAndFetchStuff, dispatch),
    handleFetchSomeValueWithGQL: bindActionCreators(fetchSomeValueWithGQL, dispatch),
  };
};

// Here we can pick and bind state from the Redux Store into props
const mapStoreToProps = (store: Map<string,any>, props: Props) => {
  return {
    isLoading: // This is a value in this state
      store.getIn(["global", "isLoading"]), // This is a value from the store
    someValue: store.getIn(["template", "someValue"]),
    someStuff: store.getIn(["template", "someStuff"]),
    someGql: store.getIn(["template", "someGql"]),
  };
};

// Here we connect it all together and return this container
export default connect(mapStoreToProps, mapActionsToProps)(TemplateFeature);
