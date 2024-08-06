import React, { useState } from 'react';
import { updateReview } from '../services/reviewService';
import '../css/form.css'; 
const UpdateReview = () => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleUpdateReview = async () => {
        try {
            const review = { id, title, content };
            await updateReview(review);
            setId('');
            setTitle('');
            setContent('');
        } catch (error) {
            console.error('Error updating review:', error);
        }
    };

    return (
        <div className='form-container'>
            <h2>Update Review</h2>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Enter review ID"
            />
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter review title"
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter review content"
            />
            <button onClick={handleUpdateReview}>Update Review</button>
        </div>
    );
};

export default UpdateReview;
