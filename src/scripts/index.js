const daggy = require('daggy');
//const _ = lodash;

const connectionTypes = {
  GAS: 'GAS',
  COMBI: 'COMBI',
};

const buildingTypes = {
  APARTMENT_BUILDING: 'APARTMENT_BUILDING',
  OFFICE_BUILDING: 'OFFICE_BUILDING',
  DETACHED_HOUSE: 'DETACHED_HOUSE',
};

const isStepValid = ({
  connectionType,
  connectionTypesList,
  buildingType,
  buildingTypesList,
}) => {
  if (connectionType && buildingType) {
    if (connectionTypesList && buildingTypesList) {
      return (
        connectionTypesList.includes(connectionType) &&
        buildingTypesList.includes(buildingType)
      );
    }
  }

  if (connectionType) {
    if (Array.isArray(connectionTypesList)) {
      return connectionTypesList.includes(connectionType);
    }
  }

  if (buildingType) {
    if (Array.isArray(buildingTypesList)) {
      return buildingTypesList.includes(buildingType);
    }
  }

  return false;
};
const steps = daggy.taggedSum('steps', {
  powerRequirementGas: [],
});

const getStep = (connectionType, buildingType) => {
  const stepsPermissions = {
    powerRequirementGas: {
      buildingTypes: [
        buildingTypes.APARTMENT_BUILDING,
        buildingTypes.OFFICE_BUILDING,
        buildingTypes.DETACHED_HOUSE,
      ],
      connectionTypes: [connectionTypes.COMBI, connectionTypes.GAS],
    },
  };
};

module.exports = {
  connectionTypes,
  buildingTypes,
  isStepValid,
  steps,
  getStep,
};
