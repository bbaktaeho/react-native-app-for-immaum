/**
 * * https://github.com/testshallpass/react-native-dropdownalert
 */

import React from 'react';
import DropdownAlert from 'react-native-dropdownalert';

const MyAlert = ({compo}) => {
  return (
    <DropdownAlert
      containerStyle={{
        backgroundColor: '#8181F7',
      }}
      // showCancel={true}
      titleNumOfLines={2}
      messageNumOfLines={0}
      ref={ref => (compo.dropDownAlertRef = ref)}
    />
  );
};

export default MyAlert;
