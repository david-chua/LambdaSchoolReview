// Build a Car class!
class Car{
  constructor(make, model){
    this.make = make;
    this.model = model
    this.odometer = 0;
  }

  drive(distance){
    this.odometer = this.odometer + distance;
    return distance;
  }

  driveAsync(distance){
    return Promise.resolve(distance);
  }
}


module.exports = Car
