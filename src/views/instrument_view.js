const PubSub = require('../helpers/pub_sub.js')

const InstrumentFamilyView = function(){

}

InstrumentFamilyView.prototype.bindEvents = function(){
  PubSub.subscribe('Instrument:instrument-found', (event) => {
    this.render(event.detail);
  })
}

InstrumentFamilyView.prototype.render = function(instrument){
  const instrumentDiv = document.querySelector('#instrument-info')
  const infoPara = document.createElement('p');
  infoPara.textContent = `${instrument.name}, ${instrument.description}, ${instrument.instruments}`

  instrumentDiv.innerHTML = '';
  instrumentDiv.appendChild(infoPara)
}

module.export = InstrumentFamilyView;
