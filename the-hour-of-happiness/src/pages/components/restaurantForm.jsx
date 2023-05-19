import React, { useState } from 'react'
import axios from 'axios'
import './restaurantForm.css'

export const RestaurantForm = () => {
    const API_URL = 'http://localhost:4000/happy-hour-time/new-happy-hour-location';
    const [formData, setFormData] = useState({
        name: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        phone: '',
        day: '',
        time: '',
        deals: '',
        menu: '',
        restaurantImg: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                name: formData.name,
                address: {
                    street: formData.street,
                    city: formData.city,
                    state: formData.state,
                    zipCode: formData.zipCode
                },
                phone: formData.phone,
                happyHour: {
                    day: formData.day,
                    time: formData.time,
                    deals: formData.deals
                },
                menu: formData.menu,
                restaurantImg: formData.restaurantImg
            };
          const res = await axios.post(API_URL, payload);
          console.log(res.data);
          // Reset the form after successful submission
          setFormData({
            name: '',
            street: '',
            city: '',
            state: '',
            zipCode: '',
            phone: '',
            day: '',
            time: '',
            deals: '',
            menu: '',
            restaurantImg: '',
          });
        } catch (err) {
          console.log(err);
        }
      };
    return (
        <div>
            <h1>Create a Restaurant</h1>
            <form className="form-container" onSubmit={handleSubmit}>
                {/* Restaurant Name */}
                <div className="form-field">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="street">Street:</label>
                    <input
                        type="text"
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="state">State:</label>
                    <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="zipCode">Zip Code:</label>
                    <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                    />
                </div>
                {/* Phone */}
                <div className="form-field">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                {/* Happy Hour */}
                <div className="form-field">
                    <label htmlFor="day">Happy Hour Day:</label>
                    <input
                        type="text"
                        name="day"
                        value={formData.day}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="time">Happy Hour Time:</label>
                    <input
                        type="text"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="deals">Happy Hour Deals:</label>
                    <input
                        type="text"
                        name="deals"
                        value={formData.deals}
                        onChange={handleChange}
                    />
                </div>
                {/* Menu */}
                <div className="form-field">
                    <label htmlFor="menu">Menu:</label>
                    <input
                        type="text"
                        name="menu"
                        value={formData.menu}
                        onChange={handleChange}
                        required
                    />
                </div>
                {/* Restaurant Image */}
                <div className="form-field">
                    <label htmlFor="restaurantImg">Restaurant Image:</label>
                    <input
                        type="text"
                        name="restaurantImg"
                        value={formData.restaurantImg}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Create Restaurant</button>
            </form>
        </div>
    )    
} 

