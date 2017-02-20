import React from 'react';
import {
  View,
  Text
} from 'react-native';

import { stylesFancy } from './styles';

const Fancy = () => (
  <View style={stylesFancy.container}>
    <View style={stylesFancy.box}>

    </View>
    <Text style={stylesFancy.text}>Fancy</Text>
  </View>
);

export default Fancy;
