import {StyleSheet, Platform} from 'react-native';

import {widthPercent, heightPercent} from '../../common/utils';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },

  buttonStyles: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 20,
  },

  titleStyles: {
    fontWeight: '700',
  },

  modalStyles: {
    backgroundColor: palette.deep_koamaru,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height: heightPercent(50),
    marginBottom: -20,
    marginLeft: -20,
    width: widthPercent(100),
  },

  cardStyles: {
    backgroundColor: palette.persian_indigo,
    borderRadius: 16,
    justifyContent: 'flex-start',
    marginBottom: Platform.OS === 'ios' ? 16 : 12,
    padding: 10,
    paddingHorizontal: 30,
  },

  headerStyles: {
    marginLeft: 20,
    marginRight: 50,
  },

  footerStyles: {
    marginLeft: 20,
    marginRight: 50,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: Platform.OS === 'ios' ? 23 : 10,
    paddingHorizontal: 28,
  },

  modalButtonDownload: {
    backgroundColor: palette.rich_electric_blue,
    borderRadius: 16,
    borderWidth: null,
    height: heightPercent(6.5),
    marginRight: 15,
    padding: 12,
    width: widthPercent(15),
  },

  modalButtonShare: {
    backgroundColor: palette.rich_electric_blue,
    borderRadius: 16,
    borderWidth: null,
    flex: 1,
    justifyContent: 'center',
    padding: 12,
  },

  closeIcon: {
    alignItems: 'center',
    paddingBottom: 15,
    paddingTop: 20,
  },

  flatlistStyle: {marginBottom: 0},

  modal: {justifyContent: 'flex-end'},
});

export default styles;
