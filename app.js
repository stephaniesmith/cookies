'use strict';

const time = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];

const footer = ['total', 'total', 'total', 'total', 'total', 'total', 'total', 'total', 'total', 'total', 'total', 'total', 'total', 'total', 'total', 'total', 'total'];

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

Store.prototype.buildTable = function () {
    this.calcCookies();
    this.totalCookies();
    const tbody = document.getElementById('tbody');
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = this.location;
    tr.appendChild(td);
    for (let m = 0; m < this.hourlyArray.length; m++) {
        const td = document.createElement('td');
        td.textContent = this.hourlyArray[m];
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
};

buildHeader();

const airport = new Store ('PDX Airport', 23, 65, 6.3, 'airport');
console.log(airport);

airport.buildTable();

const pioneer = new Store ('Pioneer Square', 3, 24, 1.2, 'pioneer');
console.log(pioneer);

pioneer.buildTable();

const powells = new Store ('Powell\'s', 11, 38, 3.7, 'powells');
console.log(powells);

powells.buildTable();

const johns = new Store ('St. John\'s', 20, 38, 2.3, 'johns');
console.log(johns);

johns.buildTable();

const waterfront = new Store ('Waterfront', 2, 16, 4.6, 'waterfront');
console.log(waterfront);

waterfront.buildTable();

buildFooter();

function buildHeader() {
    for (let k = 0; k < time.length; k++) {
        const tr = document.getElementById('header-row');
        const th = document.createElement('th');
        th.textContent = time[k];
        tr.appendChild(th);
    };
};

function buildFooter() {
    for (let n = 0; n < footer.length; n++) {
        const tr = document.getElementById('footer-row');
        const th = document.createElement('th');
        th.textContent = footer[n];
        tr.appendChild(th);
    };
};
