const cookiesAirport = {
    id: 'airport',
    location: 'PDX Airport',
    minHourly: 23,
    maxHourly: 65,
    averageCookies: 6.3,
    hourlyArray: [],
    calcCookies: function () {
        const min = Math.ceil(this.minHourly);
        const max = Math.floor(this.maxHourly);
        for (let i = 0; i < 15; i++) {
            const customersPerHour =  Math.floor(Math.random() * (max - min + 1)) + min;
            const cookiesPerHour = customersPerHour * this.averageCookies;
            this.hourlyArray.push(cookiesPerHour);
        }
    },
    renderCookies: function () {
        for (let i = 0; i < this.hourlyArray.length; i++) {
            const list = document.getElementById('airport');
            const li = document.createElement('li');
            li.textContent = this.hourlyArray[i];
            list.appendChild(li);
        }
    }
};

console.log('this is the array: ' + cookiesAirport.hourlyArray);
console.log('this is the function: ' + cookiesAirport.calcCookies());
console.log('this is the array: ' + cookiesAirport.hourlyArray);
console.log('render' + cookiesAirport.renderCookies());


// const cookiesPioneer = {
//     location: 'Pioneer Square',
//     minHourly: 3,
//     maxHourly: 24,
//     averageCookies: 1.2,
//     customersHour: function () {
//         const min = Math.ceil(this.minHourly);
//         const max = Math.floor(this.maxHourly);
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
// };

// console.log(cookiesPioneer.customersHour() * cookiesPioneer.averageCookies);

// const cookiesPowells = {
//     location: 'Powell\'s',
//     minHourly: 11,
//     maxHourly: 38,
//     averageCookies: 3.7,
//     customersHour: function () {
//         const min = Math.ceil(this.minHourly);
//         const max = Math.floor(this.maxHourly);
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
// };

// console.log(cookiesPowells.customersHour() * cookiesPowells.averageCookies);

// const cookiesJohn = {
//     location: 'St. John\'s',
//     minHourly: 20,
//     maxHourly: 38,
//     averageCookies: 2.3,
//     customersHour: function () {
//         const min = Math.ceil(this.minHourly);
//         const max = Math.floor(this.maxHourly);
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
// };

// console.log(cookiesJohn.customersHour() * cookiesJohn.averageCookies);

// const cookiesWaterfront = {
//     location: 'Waterfront',
//     minHourly: 2,
//     maxHourly: 16,
//     averageCookies: 4.6,
//     customersHour: function () {
//         const min = Math.ceil(this.minHourly);
//         const max = Math.floor(this.maxHourly);
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
// };

// console.log(cookiesWaterfront.customersHour() * cookiesWaterfront.averageCookies);