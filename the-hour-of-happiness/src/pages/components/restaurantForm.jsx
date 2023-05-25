import React, { useState } from 'react'
import axios from 'axios'
import './restaurantForm.css'




export const RestaurantForm = ({toggleForm, sessionUser}) => {
    const API_URL = 'https://clink-city-mern-backend.herokuapp.com/happy-hour-time/new-happy-hour-location';
    const cloudUrl = process.env.CLOUDINARY_API_URL 
    const preset = process.env.CLOUDINARY_UPLOAD_PRESET
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

    const HandleImageUpload = async (file) => {
        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', "ml_default");
            console.log(file)
            console.log(formData);

            const res = await axios.post('http://api.cloudinary.com/v1_1/dk5rjoauw/upload', formData);
            console.log(res.data.secure_url)
            console.log(res.data)
            return res.data.secure_url;
        } catch(err) {
            console.log(err);
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const fileInput = e.target.restaurantImg
            const file = fileInput.files[0];
            const imgUrl = await HandleImageUpload(file)
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
                restaurantImg: imgUrl,
                // setting ownerID to the new restaurant created
                owner: sessionUser._id,
            };
        const res = await axios.post(API_URL, payload);
        console.log(res.data);

        // setting the new restaurant object ID to the owner Schema restaurant field
        
        const newRestaurantId = res.data._id
        const ownerId = sessionUser._id
        const UpdateOwnerUrl = `https://clink-city-mern-backend.herokuapp.com/accounts/update-owner/${ownerId}`
        await axios.put (UpdateOwnerUrl, { $push: {restaurants: newRestaurantId }})

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
        toggleForm()
        } catch (err) {
            console.log(err);
        }
    };

    const handleModalOverlayClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            toggleForm();
        }
    };
    
    return (
        <div>
            <div className = "modal-overlay" onClick={handleModalOverlayClick}>
                <div className='modal-container'>
                    <form className="form-container" onSubmit={handleSubmit}>
                    <h1>Create a Restaurant</h1>
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
                                className='img-form-input'
                                type="file"
                                name="restaurantImg"
                                value={formData.restaurantImg}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit">Create Restaurant</button>
                    </form>
                </div>
            </div>
        </div>
    )    
} 

