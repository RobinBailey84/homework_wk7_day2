const PubSub = require('../helpers/pub_sub.js')

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function() {
  PubSub.publish('Instruments:all-instruments', this.data)
  console.log('published on all-instruments');

  PubSub.subscribe('InstrumentSelect:instrument-selected', (event) => {
    const index = event.detail;
    const foundInstrument = this.findInstrument(index);
    PubSub.publish('Instrument:instrument-found', foundInstrument)
  })

}

InstrumentFamilies.prototype.findInstrument = function(index){
  return this.data[index];
}

module.exports = InstrumentFamilies;
