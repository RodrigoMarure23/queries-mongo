import Restaurant from "../Restaurant.js";
export default async () =>{
    const restaurants_info= await Restaurant.find({},{
        restaurant_id:1
        ,name:1
        ,borough:1
        ,cuisine:1
    ,_id:0});
    console.log(restaurants_info);
}