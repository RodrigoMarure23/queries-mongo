import Restaurant from "../Restaurant.js"

export default async () =>{
    const restaurants_results = await Restaurant.find({borough:'Bronx'}).limit(5);
    console.log(restaurants_results);
};
//funcion que imprima los primeros 5 restaurantes del bronx que se encuentren en la base 
