import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  pieChartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  pieChartLabelContainer: {
    alignItems: 'center',
    position: 'absolute',
  },

  heading: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },

  label: {
    color: 'white',
    fontSize: 17,
  },

  pieChart: {transform: [{rotate: '45deg'}]},
});
export default styles;
