// STRETCH
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: "dadvbndagd5dsdga", make: 'Toyota', model:'Corolla', mileage: 123455.3, title: 'carTitle1', transmission: 'automatic' },
        { vin: "adsgfagda235435d", make: 'Honda', model: 'Civic', mileage: 20224.5, title: 'carTitle2', transmission: 'automatic' },
        { vin: "dagd2535cdbdig35", make: 'Subaru', model: 'BRZ', mileage: 1200.2, title: 'carTitle3', transmission: 'manual' },
        { vin: "adcgd25356edasg35", make: 'Toyota', model: 'Prius', mileage: 50245, title: 'carTitle4', transmission: 'automatic' },
        { vin: "dkgibvdkantg;k235", make: 'Tesla' ,model: 'Model S', mileage: 15000.32, title: 'carTitle5', transmission: 'automatic'}
      ]);
    });
};
