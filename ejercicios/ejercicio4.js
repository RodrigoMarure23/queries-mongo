//funcion que imprima los nombres de los restaurantes que tengan al menos una calificacion (grade) mayor a 9
import Restaurant from "../Restaurant.js"

export default async () =>{
    const restaurants_results = await Restaurant.find({grades:
        {$elemMatch:{score:{$gt:9}}}
},{name:1}
);
    console.log(restaurants_results);
};