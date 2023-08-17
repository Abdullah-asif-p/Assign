type CarOptions = { [key: string]: any };

const car = (manufacturer : string ,model_name : string,  ...options: CarOptions[]):CarOptions   =>{
    const car_object: CarOptions = {
        manufacturer_name: manufacturer,
        model_name: model_name,
    };
    options.forEach(option => {
        Object.assign(car_object, option);
    });
    return car_object

}

console.log(car("Toyota", "Corolla", { color: 'Blue' }, { optionalFeature: 'Sunroof' }, { engine: 'v8' }));