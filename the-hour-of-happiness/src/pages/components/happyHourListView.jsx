import { useState, useEffect } from "react";
import axios from "axios";
import "./happyHourListView.css";

export const HappyHourList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("http://localhost:4000/HappyHourTime");
        setRestaurants(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div className="restaurant-list-container">
      <h2>Happy Hour</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li className="restaurant-container" key={restaurant.name}>
            <div className="restaurant-img-container">
              <img src={restaurant.restaurantImg} alt={restaurant.name} />
            </div>
            <div className="restaurant-info-container">
              <h2>{restaurant.name}</h2>
              <p>Address: 
              {restaurant.address.street}, 
              {restaurant.address.city}, 
              {restaurant.address.state} 
              {restaurant.address.zipCode}</p>
              <p> Phone: {restaurant.phone}</p>
              {/* checking to see if happy hour data all exists if not prints only the ones availble */}
              {restaurant.happyHour && (
                <>
                  <p> Happy Hour: {restaurant.happyHour.day}</p>
                  <p> Time: {restaurant.happyHour.time} </p>
                  <p> Deals: {restaurant.happyHour.deals} </p>
                </>
              )}
              <p>
                <a className="menu-link" href={restaurant.menu}>
                  View Menu
                </a>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};