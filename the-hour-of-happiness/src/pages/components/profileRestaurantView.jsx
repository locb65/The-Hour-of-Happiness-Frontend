import React, {useState, useEffect } from 'react';
import axios from 'axios';

export const ProfileRestaurantView = () => {
    const [restaurants,setRestaurants] = useState([])

    useEffect(() => {
        const getRestaurants = async () => {
            try {
                const endpoint_URL = 'http://localhost:4000/accounts/restaurant-owners/owned-restaurants'
                const res = await axios.get(endpoint_URL);
                console.log(res.data);
                setRestaurants(res.data);
            }catch(err) {
                console.log(err);
            }
        };
        getRestaurants();
    }, []);

    return (
       <div>
        <h2>
            My Restaurants
        </h2>
        <ul>
            {restaurants.map((restaurant) => (
                <li key={restaurant._id}>{restaurant.name}</li>
            ))}
        </ul>
       </div>
    )
}