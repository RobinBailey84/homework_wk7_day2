const PubSub = require('../helpers/pub_sub.js');

const InstrumentSelect = function(menu){
  this.menu = menu
};

InstrumentSelect.prototype.bindEvents = function() {
  PubSub.subscribe('Instruments:all-instruments', (event) => {
    this.populate(event.detail);
  });
  this.menu.addEventListener('change', (event) => {
    const selectedInstrument = event.target.id;
    PubSub.publish('InstrumentSelect:instrument-selected', selectedInstrument)
  });
};

InstrumentSelect.prototype.populate = function(instruments){
  instruments.forEach((instrument, index) => {
  const option = document.createElement('option');
  option.value = index;
  option.textContent = instrument.name;
  this.element.appendChild(option);
  })
}

module.exports = InstrumentSelect;
