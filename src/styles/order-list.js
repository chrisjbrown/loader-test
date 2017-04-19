import DbkColors from './colors';

export default {
  orderList: {
  },
  orderItem: {
  },
  statusList: {
    padding: 0,
    backgroundColor: DbkColors.canvasSecondaryColor,
  },
  statusListItem: {
    fontSize: '13px',
    color: DbkColors.alternateTextColor,
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  statusListIcon: {
    width: '20px',
    height: '20px',
  },
  orderItemAssignedStatus: {
    height: '30px',
    paddingLeft: '10px',
    color: DbkColors.alternateTextColor,
    backgroundColor: DbkColors.disabledColor,
  },
  statusAssignedToYou: {
    backgroundColor: DbkColors.accent2Color,
  },
  list: {
    paddingTop: '0',
    paddingBottom: '0',
  },
  itemList: {
    padding: '0 0',
  },
  itemListBorder: {
    marginLeft: '-10px',
    borderLeft: '5px solid transparent',
  },
  itemListBorderPositive: {
    borderLeft: `5px solid ${DbkColors.accent1Color}`,
  },
  itemListBorderNegative: {
    borderLeft: `5px solid ${DbkColors.alertColor}`,
  },
  item: {
  },
  itemAvatar: {
    margin: '0 5px',
  },
  itemPrimaryText: {
    fontSize: '14px',
    textTransform: 'capitalize',
    marginBottom: '0.5em',
    marginTop: 0,
  },
  itemSecondaryText: {
    color: DbkColors.textSecondaryColor,
  },
  itemArrow: {
    margin: 0,
    top: '31.5px',
    width: '36px',
    height: '36px',
  },
};
