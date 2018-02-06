'use strict';

const time = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];

const cookiesAirport = {
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
            const cookiesPerHour = Math.round(customersPerHour * this.averageCookies);
            this.hourlyArray.push(cookiesPerHour);
        }
    },
    totalCookies: function () {
        let total = 0;
        for (let j = 0; j < 15; j++) {
            total = total + this.hourlyArray[j];
        }
        this.hourlyArray.push(total);
    },
    renderCookies: function () {
        for (let i = 0; i < this.hourlyArray.length; i++) {
            // tell doc to find the element with the id of airport, store in variable list
            const list = document.getElementById('airport'); // <ul id="airport"></ul>
            /* 
                const list = {
                    children: [],
                    appendChild: function (child) {
                        // adds to children array
                    }
                };
            */


            // tell doc to make an <li></li>, store it in variable li
            const li = document.createElement('li'); // <li></li>
            /* 
            const li = {};
            */
    
            // adding text (5am: 402 cookies) to variable li (<li></li>)
            li.textContent = time[i] + this.hourlyArray[i] + ' cookies';
            /* 
                const li = {
                    textContent: '5am 40234 cookies'
                };
                
                <li>5am 3409 cookies</li>
            */
                
            list.appendChild(li);
            /* 
                const list = {
                    children: [li] 
                };

                <ul id="airport">
                    <li>5am 3409 cookies</li>
                </ul>

            */
        }
    }
};

// console.log('this is the array: ' + cookiesAirport.hourlyArray);
// console.log('this is the function: ' + cookiesAirport.calcCookies());
// console.log('this is the array: ' + cookiesAirport.hourlyArray);
// console.log('this is the total: ' + cookiesAirport.totalCookies());
// console.log('render' + cookiesAirport.renderCookies());

cookiesAirport.calcCookies(); // populates cookiesAirport.hourlyArray
cookiesAirport.totalCookies(); // adds total to cookiesAirport.hourlyArray
cookiesAirport.renderCookies(); // adds info to the dom



function giveMe (letter) {
    console.log(letter);
    return 'hello';
}

const body = document.getElementsByTagName('body');
// returns an array of objects
console.log(body);

const items = document.getElementsByTagName('li');
console.log(items);





// const cookiesPioneer = {
//     location: 'Pioneer Square',
//     minHourly: 3,
//     maxHourly: 24,
//     averageCookies: 1.2,
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
//             const list = document.getElementById('pioneer');
//             const li = document.createElement('li');
//             li.textContent = time[i] + this.hourlyArray[i] + ' cookies';
//             list.appendChild(li);
//         }
//     }
// };

// console.log('this is the array: ' + cookiesPioneer.hourlyArray);
// console.log('this is the function: ' + cookiesPioneer.calcCookies());
// console.log('this is the array: ' + cookiesPioneer.hourlyArray);
// console.log('this is the total: ' + cookiesPioneer.totalCookies());
// console.log('render' + cookiesPioneer.renderCookies());

// const cookiesPowells = {
//     location: 'Powell\'s',
//     minHourly: 11,
//     maxHourly: 38,
//     averageCookies: 3.7,
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
//             const list = document.getElementById('powells');
//             const li = document.createElement('li');
//             li.textContent = time[i] + this.hourlyArray[i] + ' cookies';
//             list.appendChild(li);
//         }
//     }
// };

// console.log('this is the array: ' + cookiesPowells.hourlyArray);
// console.log('this is the function: ' + cookiesPowells.calcCookies());
// console.log('this is the array: ' + cookiesPowells.hourlyArray);
// console.log('this is the total: ' + cookiesPowells.totalCookies());
// console.log('render' + cookiesPowells.renderCookies());

// const cookiesJohn = {
//     location: 'St. John\'s',
//     minHourly: 20,
//     maxHourly: 38,
//     averageCookies: 2.3,
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
//             const list = document.getElementById('johns');
//             const li = document.createElement('li');
//             li.textContent = time[i] + this.hourlyArray[i] + ' cookies';
//             list.appendChild(li);
//         }
//     }
// };

// console.log('this is the array: ' + cookiesJohn.hourlyArray);
// console.log('this is the function: ' + cookiesJohn.calcCookies());
// console.log('this is the array: ' + cookiesJohn.hourlyArray);
// console.log('this is the total: ' + cookiesJohn.totalCookies());
// console.log('render' + cookiesJohn.renderCookies());

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