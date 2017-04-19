import DbkColors from './colors';

export default {
  arrowUp: {
    width: 0,
    height: 0,
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderBottom: `10px solid${DbkColors.disabledColor}`,
  },
  arrowUpAssignedToYou: {
    borderBottom: `10px solid${DbkColors.accent2Color}`,
  },
  notAssignedToYou: {
    color: DbkColors.notAssignedToYouColor,
  },
  assignedToYou: {
    color: DbkColors.assignedToYouColor,
  },
  divider: {
    height: '2px',
    backgroundColor: DbkColors.dividerColor,
  },
  dividerInset: {
    marginTop: '-1px',
    marginRight: '15px',
    marginBottom: '0px',
    marginLeft: '15px',
  },
  indicator: {
    borderRadius: '50%',
    width: '8px',
    height: '8px',
    display: 'inline-block',
    marginRight: '5px',
  },
  indicatorReady: {
    backgroundColor: DbkColors.readyColor,
  },
  indicatorOpen: {
    backgroundColor: DbkColors.openColor,
  },
  indicatorInProgress: {
    backgroundColor: DbkColors.inProgressColor,
  },
  indicatorDelivered: {
    backgroundColor: DbkColors.deliveredColor,
  },
  indicatorCancelled: {
    backgroundColor: DbkColors.notPickedUpColor,
  },
  indicatorClosed: {
    backgroundColor: DbkColors.cancelledColor,
  },
  multiEllipsis: {
    display: '-webkit-box',
    maxWidth: '400px',
    margin: '0 auto',
    fontSize: '13px',
    lineHeight: 1.2,
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  secondary: {
    color: DbkColors.primary2Color,
  },
  time: {
    color: DbkColors.timeColor,
    whiteSpace: 'nowrap',
  },
  timeIcon: {
    width: '17px',
    height: '17px',
  },
  xlText: {
    fontSize: '60px',
  },
};
