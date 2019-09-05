const test = require('tape');
const { isStepValid, getStep, steps } = require('scripts');

const getRandomItemFromList = myArray =>
  myArray[Math.floor(Math.random() * myArray.length)];

test('Given an object with a list for the connectionTypes and a list for the buildingTypes, return true if the list includes the value or the connectionType and the value of the buildingType', t => {
  const ob = {
    connectionType: getRandomItemFromList(['GAS', 'COMBI']),
    connectionTypesList: ['GAS', 'COMBI'],
    buildingType: getRandomItemFromList([
      'APARTMENT_BUILDING',
      'OFFICE_BUILDING',
      'DETACHED_HOUSE',
    ]),
    buildingTypesList: [
      'APARTMENT_BUILDING',
      'OFFICE_BUILDING',
      'DETACHED_HOUSE',
    ],
  };

  const actual = isStepValid(ob);
  const expect = true;

  t.equal(actual, expect);
  t.end();
});

test('Given an object with a list for the connectionTypes and a value of the connectionType, return true if the list includes the value of the connectionType', t => {
  const ob = {
    connectionType: getRandomItemFromList(['GAS', 'COMBI']),
    connectionTypesList: ['GAS', 'COMBI'],
  };

  const actual = isStepValid(ob);
  const expect = true;

  t.equal(actual, expect);
  t.end();
});

test('Given an object with a list for the buildingTypesList and a value of the buildingType, return true if the list includes the value of the buildingType', t => {
  const ob = {
    buildingType: getRandomItemFromList([
      'APARTMENT_BUILDING',
      'OFFICE_BUILDING',
      'DETACHED_HOUSE',
    ]),
    buildingTypesList: [
      'APARTMENT_BUILDING',
      'OFFICE_BUILDING',
      'DETACHED_HOUSE',
    ],
  };

  const actual = isStepValid(ob);
  const expect = true;

  t.equal(actual, expect);
  t.end();
});

test('Given an empty object shoudl return false', t => {
  const actual = isStepValid({});
  const expect = false;

  t.equal(actual, expect);
  t.end();
});

test('Given the connectionType and the buildingType, shoud return the step type', t => {
  const connectionType = getRandomItemFromList(['GAS', 'COMBI']);
  const buildingType = getRandomItemFromList([
    'APARTMENT_BUILDING',
    'OFFICE_BUILDING',
    'DETACHED_HOUSE',
  ]);

  const actual = getStep(connectionType, buildingType);
  const expect = steps.powerRequirementGas;

  //t.equal(actual, expect);

  t.end();
});
