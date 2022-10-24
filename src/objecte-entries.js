const countries = {MX: 'Mexico', CO: 'Colombia', CL: 'Chile',PE: 'Peru'};
console.log(Object.entries(countries));



Object.defineProperty(countries, "US", {
    value: 'United States',
    writable: 'true',
    enumerable: 'true',
    configurable: 'true'
})

Object.getOwnPropertyDescriptors(countries)