import {StyleSheet} from 'react-native';

import {heightPercent, widthPercent} from '../../common/utils';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },

  mainContainer: {
    flex: 1,
  },

  dropDownContainer: {
    marginLeft: 28,
    marginTop: heightPercent(4),
    zIndex: 3,
  },

  customOptionsContainer: {
    alignItems: 'center',
  },

  outerOptionsContainer: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: 80,
  },

  selectBoxStyle: {
    backgroundColor: palette.light_black,
    height: heightPercent(4),
    paddingLeft: 25,
    width: 80,
  },

  header: {
    color: palette.white,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: heightPercent(2),
    marginLeft: 28,
    marginTop: heightPercent(2),
  },

  outerContainer: {
    marginRight: 20,
    width: widthPercent(35),
  },

  cardStyles: {
    backgroundColor: palette.persian_indigo,
    borderRadius: 10,
    height: heightPercent(10),
    justifyContent: 'flex-start',
    marginBottom: 10,
    padding: 15,
  },

  headerStyles: {
    marginLeft: 30,
  },

  footerStyles: {
    marginLeft: 30,
  },

  midStyles: {
    color: palette.rich_electric_blue,
    fontSize: 13,
  },
});

export default styles;
