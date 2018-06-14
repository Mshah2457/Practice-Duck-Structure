import * as React from 'react';
import { PureComponent } from 'react';
import { View, Text } from 'react-native';

// Props interface. What we receive from a smart component
interface Props {
    foo: string;
    bar: string;
}

// Internal state interface. What only matters here.
interface State {
    baz: string;
}

export default class SampleDumbComponent extends PureComponent<Props, State> {
    // Initial internal state
    state: State = {
        baz: "baz"
    };

    render() {
        const {
            foo,
            bar
        } = this.props;
        const { baz } = this.state;

        return (
            <View>
                <Text>
                    {`FOO: ${foo}`}
                </Text>
                <Text>
                    {`BAR: ${bar}`}
                </Text>
                <Text>
                   ghghfhhfgh {`BAZ: ${baz}`}
                </Text>
            </View>
        );
    }
}