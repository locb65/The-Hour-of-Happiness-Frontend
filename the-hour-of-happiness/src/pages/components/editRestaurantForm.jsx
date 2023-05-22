import React, { useState } from 'react';
import axios from 'axios';
import './editRestaurantForm.css';

export const EditForm = ({ restaurant, onSave, onCancel }) => {
    const [editedRestaurant, setEditedRestaurant] = useState(restaurant);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
        const [nestedFieldName, nestedProperty] = name.split('.');
        setEditedRestaurant((prevRestaurant) => ({
            ...prevRestaurant,
            [nestedFieldName]: {
                ...prevRestaurant[nestedFieldName],
                [nestedProperty]: value,
                },
            }));
        } else {
            setEditedRestaurant((prevRestaurant) => ({
                ...prevRestaurant,
                [name]: value,
            }));
        }
    };
        
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const endpoint_URL = `http://localhost:4000/happy-hour-time/update-happy-hour-location/${editedRestaurant._id}`;
        const res = await axios.put(endpoint_URL, editedRestaurant);
        console.log('Update successful:', res.data);
        onSave(editedRestaurant);
        } catch (err) {
        console.log('Update failed:', err);
        }
    };
    
    const handleCancel = () => {
        onCancel();
    };;

    return (
        <div className="modal-overlay">
        <div className="modal-container">
            <h2 className="modal-title">Edit Restaurant</h2>
            <form className="modal-form" onSubmit={handleSubmit}>
                <div className="modal-form-field">
                <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="modal-form-input"
                        value={editedRestaurant.name}
                        onChange={handleInputChange}
                    />
                </div>
                    <div className="form-field">
                        <label htmlFor="address.street">Street:</label>
                        <input
                            type="text"
                            name="address.street"
                            value={editedRestaurant.address.street}
                            onChange={handleInputChange}
                            className="modal-form-input"
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="address.city">City:</label>
                        <input
                            type="text"
                            name="address.city"
                            value={editedRestaurant.address.city}
                            onChange={handleInputChange}
                            className="modal-form-input"
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="address.state">State:</label>
                        <input
                            type="text"
                            name="address.state"
                            value={editedRestaurant.address.state}
                            onChange={handleInputChange}
                            className="modal-form-input"
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="address.zipCode">Zip Code:</label>
                        <input
                            type="text"
                            name="address.zipCode"
                            value={editedRestaurant.address.zipCode}
                            onChange={handleInputChange}
                            className="modal-form-input"
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="text"
                            name="phone"
                            value={editedRestaurant.phone}
                            onChange={handleInputChange}
                            className="modal-form-input"
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="happyHour.day">Happy Hour Day:</label>
                        <input
                            type="text"
                            name="happyHour.day"
                            value={editedRestaurant.happyHour.day}
                            onChange={handleInputChange}
                            className="modal-form-input"
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="happyHour.time">Happy Hour Time:</label>
                        <input
                            type="text"
                            name="happyHour.time"
                            value={editedRestaurant.happyHour.time}
                            onChange={handleInputChange}
                            className="modal-form-input"
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="happyHour.deals">Happy Hour Deals:</label>
                        <input
                            type="text"
                            name="happyHour.deals"
                            value={editedRestaurant.happyHour.deals}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="menu">Menu:</label>
                        <input
                            type="text"
                            name="menu"
                            value={editedRestaurant.menu}
                            onChange={handleInputChange}
                            className="modal-form-input"
                        />
                    </div>
                <div className="modal-form-button-container">
                <button type="submit" className="modal-form-button">
                    Save
                </button>
                <button
                    type="button"
                    className="modal-form-button modal-form-button-cancel"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
                </div>
            </form>
            </div>
        </div>
    );
};