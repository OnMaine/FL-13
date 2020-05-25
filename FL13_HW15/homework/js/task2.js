function inheritance(child, parent) {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}

function Vehicle(engine, color) {
  this.engine = engine;
  this.color = color;
  this.model = 'unknown model';
  this.maxSpeed = 70;
  this.currentSpeed = 0;
  this.maxSpeedFromDrive = 0;
}

Vehicle.prototype.getInfo = function() {
  let info = {}
  info.engine = this.engine;
  info.color = this.color;
  info.model = this.model;
  info.maxSpeed = this.maxSpeed;
  return info;
};

Vehicle.prototype.drive = function() {
  clearInterval(this.timerId);
  let startInterval = 2000;
  this.timerId = setInterval(() => {
    this.currentSpeed += 20
    console.log(this.currentSpeed)
    if (this.currentSpeed > this.maxSpeed) {
      console.log('speed is too high, SLOW DOWN!');
    }
    if (this.currentSpeed > this.maxSpeedFromDrive) {
      this.maxSpeedFromDrive = this.currentSpeed
    }
  }, startInterval)
};

Vehicle.prototype.stop = function() {
  clearInterval(this.timerId);
  let stopInterval = 1500;
  this.timerId = setInterval(() => {
    if (this.currentSpeed > 0) {
      this.currentSpeed -= 20
      console.log(this.currentSpeed)
      if (this.currentSpeed === 0) {
        clearInterval(this.timerId);
        console.log(`Vehicle is stopped. Maximum speed during the drive was ${this.maxSpeedFromDrive}`);
      }
    } else {
      clearInterval(this.timerId);
    }
  }, stopInterval)
};

Vehicle.prototype.upgradeEngine = function(newEngine, maxSpeedUpGrade) {
  if (this.currentSpeed === 0) {
    this.engine = newEngine;
    this.maxSpeed = maxSpeedUpGrade;
  } else {
    console.log('Already drive');
  }
};

inheritance(Car, Vehicle);
inheritance(Motorcycle, Vehicle);

function Car(engine, color, model) {
  Vehicle.call(this, engine, color);
  this.maxSpeed = 80;
  this.model = model;
  this.changeColor = function(newColor) {
    if (!(this.color === newColor)) {
      this.color = newColor;
    } else {
      console.log(`The car is already painted ${this.color}`);
    }
  }
}

function Motorcycle(engine, color, model) {
  Vehicle.call(this, engine, color);
  this.maxSpeed = 90;
  this.model = model;
}
