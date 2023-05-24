import React from "react";
import './deleteModal.css';

export const DeleteModal = ({ restaurant, onConfirmDelete, onCancelDelete }) => {
    return (
        <div className='modal-overlay'>
            <div className='modal-content-container'>
                <h3>Are you sure you want to delete this restaurant?</h3>
                <p>Restaurant: {restaurant.name}</p>
                <div className='modal-buttons'>
                    <button className='delete-confirm' onClick={onConfirmDelete}>
                    Yes, delete
                    </button>
                    <button className='delete-cancel' onClick={onCancelDelete}>
                    Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};