import React, {useState, useEffect } from 'react';
import axios from 'axios';
import './profileRestaurantView.css';
import { EditForm } from './editRestaurantForm';
import { DeleteModal } from './deleteModal';


export const ProfileRestaurantView = ({sessionUser, navigate}) => {
    const [restaurants,setRestaurants] = useState([])
    const [editingRestaurantId, setEditingRestaurantId] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [restaurantToDelete, setRestaurantToDelete] = useState(null);

    useEffect(() => {
        getRestaurants();
    }, []); 

    const getRestaurants = async () => {
        try {
            console.log(sessionUser)
            const id = sessionUser._id
            const endpoint_URL = `https://clink-city-mern-backend.herokuapp.com/accounts/restaurant-owners/${id}/owned-restaurants`
            const res = await axios.get(endpoint_URL);
            console.log(res.data);
            setRestaurants(res.data);
        }catch(err) {
            console.log(err);
        }
    };

    const handleEdit = (restaurantId) => {
        setEditingRestaurantId(restaurantId);
    };

    const handleDelete = (restaurant) => {
        setRestaurantToDelete(restaurant);
        setShowDeleteModal(true);
      };
    
    const handleConfirmDelete = async () => {
        try {
            const endpoint_URL = `https://clink-city-mern-backend.herokuapp.com/happy-hour-time/delete-happy-hour-location/${restaurantToDelete._id}`;
            await axios.delete(endpoint_URL);
            console.log('Restaurant deleted successfully');
            setShowDeleteModal(false);
            setRestaurantToDelete(null);
            getRestaurants();
        } catch (err) {
            console.log('Delete failed:', err);
        }
    }
    const handleCancelDelete = () => {
        setShowDeleteModal(false);
        setEditingRestaurantId(null);
    };
    const handleSave = async (editedRestaurant) => {
        try {
        // Perform save logic here using the editedRestaurant object
        console.log('Save restaurant:', editedRestaurant);
        // Reset the editingRestaurantId after saving
        setEditingRestaurantId(null);
        getRestaurants()
        } catch (err) {
        console.log('Save failed:', err);
        }
    };
    
    const handleCancel = () => {
        setEditingRestaurantId(null);
    };
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
                    {editingRestaurantId === restaurant._id ? (
                        <EditForm
                            restaurant={restaurant}
                            onSave={handleSave}
                            onCancel={handleCancel}
                            navigate={navigate}
                        />
                        ) : (
                        <div>
                            <button className="edit-button" onClick={() => handleEdit(restaurant._id)}>
                            Edit
                            </button>
                            <button className="delete-button" onClick={() => handleDelete(restaurant)}>
                            Delete
                            </button>
                        </div>
                    )}
                </li>
            ))}
        </ul>
        {showDeleteModal && (
            <DeleteModal
            restaurant={restaurantToDelete}
            onConfirmDelete={handleConfirmDelete}
            onCancelDelete={handleCancelDelete}
            />
        )}
       </div>
    )
}