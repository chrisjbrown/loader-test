import DbkColors from './colors';

export default {
  itemAction: {
    width: '36px',
    height: '36px',
    backgroundColor: '#fff',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
  },
  itemActionPositive: {
    border: `1px solid ${DbkColors.accent1Color}`,
  },
  itemActionNegative: {
    border: `1px solid ${DbkColors.alertColor}`,
  },
  itemActionPostiveActive: {
    backgroundColor: DbkColors.accent1Color,
  },
  itemActionNegativeActive: {
    backgroundColor: DbkColors.alertColor,
  },
  itemActionIcon: {
    width: '15px',
    height: '15px',
  },
  roundedFlat: {
    lineHeight: '32px',
    height: '32px',
    color: DbkColors.alternateTextColor,
    backgroundColor: DbkColors.inProgressColor,
    borderRadius: '1rem',
  },
  roundedFlatGeneric: {
    border: `1px solid ${DbkColors.textColor}`,
    color: DbkColors.textColor,
    backgroundColor: DbkColors.alternateTextColor,
  },
  roundedFlatComplete: {
    backgroundColor: DbkColors.completeColor,
  },
  roundedFlatSuccess: {
    backgroundColor: DbkColors.deliveredColor,
  },
  roundedFlatClose: {
    backgroundColor: DbkColors.cancelledColor,
  },
  roundedFlatFail: {
    marginTop: 0,
    backgroundColor: DbkColors.notPickedUpColor,
  },
  roundedFlatCancel: {
    lineHeight: 'normal',
    border: `1px solid${DbkColors.textColor}`,
    color: DbkColors.textColor,
    backgroundColor: DbkColors.canvasColor,
  },
  roundedFlatConfirm: {
    lineHeight: 'normal',
    backgroundColor: DbkColors.readyColor,
  },
};
