const instrumentFamilyData = require('./data/instrument_family_data.js')
const InstrumentFamilies = require('./models/instrument_families.js')
const InstrumentSelect = require('./views/instrument_select_view.js');
const InstrumentFamilyView = require('./views/instrument_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const menu = document.querySelector('#instrument-families');
  const instrumentSelect = new InstrumentSelect(menu);
  instrumentSelect.bindEvents();

  const instrumentFamilyView = new InstrumentFamilyView();
  instrumentFamilyView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies(instrumentFamilyData);
  instrumentFamilies.bindEvents();

});
