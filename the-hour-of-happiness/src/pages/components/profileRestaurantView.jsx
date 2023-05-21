import React, {useState, useEffect } from 'react';
import axios from 'axios';
import './profileRestaurantView.css';


export const ProfileRestaurantView = ({sessionUser}) => {
    const [restaurants,setRestaurants] = useState([])

    useEffect(() => {
        const getRestaurants = async () => {
            try {
                console.log(sessionUser)
                const id = sessionUser._id
                const endpoint_URL = `http://localhost:4000/accounts/restaurant-owners/${id}/owned-restaurants`
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
        <div>
        <h2 className='profile-restaurant-view-header'>
            My Restaurants
        </h2>
        </div>
        <ul className='profile-restaurant-list-view'>
            {restaurants.map((restaurant) => (
                <li key={restaurant._id}>
                    <img  className='profile-restaurant-img'src = {restaurant.restaurantImg}></img>
                    <div className='info-container'>
                    <h2>{restaurant.name}</h2>
                    <p>Address: {restaurant.address.street}, {restaurant.address.city}, {restaurant.address.state}, {restaurant.address.zipCode}</p>
                    <p>Phone: {restaurant.phone}</p>
                    <p>Menu: {restaurant.menu}</p>
                    <p>Happy Hour: {restaurant.happyHour.day}, {restaurant.happyHour.time}, {restaurant.happyHour.deals}</p>
                    </div>
                </li>
            ))}
        </ul>
       </div>
    )
}