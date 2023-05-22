import { useState, useEffect } from "react";
import axios from "axios";
import "./happyHourListView.css";

export const HappyHourList = ({searchResults}) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("http://localhost:4000/happy-hour-time");
        setRestaurants(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRestaurants();
  }, []);

  const filteredRestaurants = searchResults.length > 0 ? searchResults : restaurants;

  return (
    <div className="restaurant-list-container">
      <h2>Happy Hour Locations</h2>
      <ul>
        {filteredRestaurants.map((restaurant) => (
          <li className="restaurant-container" key={restaurant.name}>
            <div className="restaurant-img-container">
              <img src={restaurant.restaurantImg} alt={restaurant.name} />
            </div>
            <div className="restaurant-info-container">
              <h2>{restaurant.name}</h2>
              <p className="happyHour-details">Address: {restaurant.address.street}, {restaurant.address.city}, {restaurant.address.state}, {restaurant.address.zipCode}</p>
              <p className="happyHour-details"> Phone: {restaurant.phone}</p>
              {/* checking to see if happy hour data all exists if not prints only the ones availble */}
              {restaurant.happyHour && (
                <>
                  <p className="happyHour-details"> Happy Hour: {restaurant.happyHour.day}</p>
                  <p className="happyHour-details"> Time: {restaurant.happyHour.time} </p>
                  <p className="happyHour-details"> Deals: {restaurant.happyHour.deals} </p>
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