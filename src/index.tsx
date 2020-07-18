import React from 'react';
import { View, Text } from 'react-native';

import { test } from "@/pages/index";

class App extends React.Component {
  render() {
    return (
      <View>
        <Text>
          Hello World3333
          {test()}
        </Text>
      </View>
    );
  }
}

export default App;
