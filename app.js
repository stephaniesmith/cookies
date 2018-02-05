const cookiesAirport = {
    location: 'PDX Airport',
    minHourly: 23,
    maxHourly: 65,
    averageCookies: 6.3, 
    customersHour: function () {
        const min = Math.ceil(this.minHourly);
        const max = Math.floor(this.maxHourly);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};

console.log(cookiesAirport.customersHour());

const cookiesPioneer = {
    location: 'Pioneer Square',
    minHourly: 3,
    maxHourly: 24,
    averageCookies: 1.2,
    customersHour: function () {
        const min = Math.ceil(this.minHourly);
        const max = Math.floor(this.maxHourly);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};

console.log(cookiesPioneer.customersHour());

const cookiesPowells = {
    location: 'Powell\'s',
    minHourly: 11,
    maxHourly: 38,
    averageCookies: 3.7,
    customersHour: function () {
        const min = Math.ceil(this.minHourly);
        const max = Math.floor(this.maxHourly);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};

console.log(cookiesPowells.customersHour());

const cookiesJohn = {
    location: 'St. John\'s',
    minHourly: 20,
    maxHourly: 38,
    averageCookies: 2.3,
    customersHour: function () {
        const min = Math.ceil(this.minHourly);
        const max = Math.floor(this.maxHourly);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};

console.log(cookiesJohn.customersHour());

const cookiesWaterfront = {
    location: 'Waterfront',
    minHourly: 2,
    maxHourly: 16,
    averageCookies: 4.6,
    customersHour: function () {
        const min = Math.ceil(this.minHourly);
        const max = Math.floor(this.maxHourly);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};

console.log(cookiesWaterfront.customersHour());