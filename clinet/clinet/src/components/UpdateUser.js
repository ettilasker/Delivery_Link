import React, { useState } from 'react';
import { updateUser } from '../services/userService';
import '../css/form.css'; 

const UpdateUser = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleUpdateUser = async () => {
        try {
            const user = { id, name, phone };
            await updateUser(user);
            setId('');
            setName('');
            setPhone('');
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <div className='form-container'>
            <h2>Update User</h2>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Enter user ID"
            />
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
            />
            <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone"
            />
            <button onClick={handleUpdateUser}>Update User</button>
        </div>
    );
};

export default UpdateUser;
