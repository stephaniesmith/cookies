'use strict';

const time = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];

function Store(location, minHourly, maxHourly, averageCookies, parentId) {
    this.location = location;
    this.minHourly = minHourly;
    this.maxHourly = maxHourly;
    this.averageCookies = averageCookies;
    this.parentId = parentId;
    this.hourlyArray = [];
};

Store.prototype.calcCookies = function () {
    const min = Math.ceil(this.minHourly);
    const max = Math.floor(this.maxHourly);
    for (let i = 0; i < 15; i++) {
        const customersPerHour =  Math.floor(Math.random() * (max - min + 1)) + min;
        const cookiesPerHour = Math.round(customersPerHour * this.averageCookies);
        this.hourlyArray.push(cookiesPerHour);
    }
};

Store.prototype.totalCookies = function () {
    let total = 0;
    for (let j = 0; j < 15; j++) {
        total = total + this.hourlyArray[j];
    }
    this.hourlyArray.push(total);
};

Store.prototype.renderCookies = function () {
    for (let i = 0; i < this.hourlyArray.length; i++) {
        const list = document.getElementById(this.parentId);
        const li = document.createElement('li');
        li.textContent = time[i] + this.hourlyArray[i] + ' cookies';
        list.appendChild(li);
    }
};

const airport = new Store ('PDX Airport', 23, 65, 6.3, 'airport');
console.log(airport);

airport.calcCookies();
airport.totalCookies();
airport.renderCookies();

const pioneer = new Store ('Pioneer Square', 3, 24, 1.2, 'pioneer');
console.log(pioneer);

pioneer.calcCookies();
pioneer.totalCookies();
pioneer.renderCookies();

const powells = new Store ('Powell\'s', 11, 38, 3.7, 'powells');
console.log(powells);

powells.calcCookies();
powells.totalCookies();
powells.renderCookies();

const johns = new Store ('St. John\'s', 20, 38, 2.3, 'johns');
console.log(johns);

johns.calcCookies();
johns.totalCookies();
johns.renderCookies();


// const cookiesWaterfront = {
//     location: 'Waterfront',
//     minHourly: 2,
//     maxHourly: 16,
//     averageCookies: 4.6,
//     hourlyArray: [],
//     calcCookies: function () {
//         const min = Math.ceil(this.minHourly);
//         const max = Math.floor(this.maxHourly);
//         for (let i = 0; i < 15; i++) {
//             const customersPerHour =  Math.floor(Math.random() * (max - min + 1)) + min;
//             const cookiesPerHour = Math.round(customersPerHour * this.averageCookies);
//             this.hourlyArray.push(cookiesPerHour);
//         }
//     },
//     totalCookies: function () {
//         let total = 0;
//         for (let j = 0; j < 15; j++) {
//             total = total + this.hourlyArray[j];
//         }
//         this.hourlyArray.push(total);
//     },
//     renderCookies: function () {
//         for (let i = 0; i < this.hourlyArray.length; i++) {
//             const list = document.getElementById('waterfront');
//             const li = document.createElement('li');
//             li.textContent = time[i] + this.hourlyArray[i] + ' cookies';
//             list.appendChild(li);
//         }
//     }
// };

// console.log('this is the array: ' + cookiesWaterfront.hourlyArray);
// console.log('this is the function: ' + cookiesWaterfront.calcCookies());
// console.log('this is the array: ' + cookiesWaterfront.hourlyArray);
// console.log('this is the total: ' + cookiesWaterfront.totalCookies());
// console.log('render' + cookiesWaterfront.renderCookies());