import {StyleSheet,DeviceInfo} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40*(1.0/DeviceInfo.Dimensions.screen.fontScale)
  }
});

export default styles;
