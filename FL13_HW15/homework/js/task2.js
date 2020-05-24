function Vehicle(engine, color) {
  this.engine = engine;
  this.color = color;
  let maxSpeed = 70;
  let model = 'unknown model';
  this.getInfo = function() {
    return {
   engine,
   color,
   maxSpeed,
   model
 };
  }
}

function Car(engine, color, model) {
  this.model = model;
  this.engine = engine;
  this.color = color;
}

Car.prototype = Vehicle;

// functionion Car() {
//   Vehicle.call(this);
//   this.model = model;
//   let maxSpeed = 80;
// };
//
// function Motorcycle() {
//   Vehicle.call(this);
//   this.model = model;
//   let maxSpeed = 90;
// };
