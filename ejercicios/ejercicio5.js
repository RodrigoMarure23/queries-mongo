//mostrar los primeros 10 restaurantes que lleven cocina americana (cousine) ordenaods por su nombre alfabeticamente
import Restaurant from "../Restaurant.js"

export default async () =>{
    const restaurants_results = await Restaurant.find(
        {cuisine:'American '},{name:1}
    ).sort('name')
    .limit(10);
    console.log(restaurants_results);
};