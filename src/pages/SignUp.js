import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import animeImage from "../images/anime.jpg";
import "../styles/SignUp.css"

function App() {
    const [user, setUser] = useState({
        Name: '',
        Email: '',
        Number: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const { Name, Email, Number, message } = user;

        try {
            const response = await fetch('https://aniplex-89453-default-rtdb.firebaseio.com/Userdata.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ Name, Email, Number, message })
            });

            if (response.ok) {
                alert('Profile Created');
                setUser({
                    Name: '',
                    Email: '',
                    Number: '',
                    message: ''
                });
            } else {
                throw new Error('Error Occurred');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error Occurred');
        }
    };

    return (
        <div className="home" style={{ backgroundImage: `url(${animeImage})` }}>
            <div className='container'>
                <h1>CREATE AN ACCOUNT</h1>
                <form onSubmit={handleSubmit}>
                    <div className='details'>
                        <div className="input">
                            <span className='details'>Username</span>
                            <input type="text" name="Name" placeholder="Enter your Name" value={user.Name} onChange={handleChange} autoComplete='off' required />
                        </div>
                        <div className="input">
                            <span className="details">E-mail</span>
                            <input type="email" name="Email" placeholder="Enter your Email" value={user.Email} onChange={handleChange} autoComplete='off' required />
                        </div>
                        <div className="input">
                            <span className="details">Phone Number</span>
                            <input type="text" name="Number" placeholder="Enter your Phone Number" value={user.Number} onChange={handleChange} autoComplete='off' required />
                        </div>
                        <div className="input">
                            <span className="details">Message</span>
                            <textarea name="message" placeholder="Enter your message" value={user.message} onChange={handleChange} autoComplete='off' required />
                        </div>
                        <div className="login">
                    <span>Already have an account?</span>
                    <Link to='/login' className='Link'>Click here to login</Link>
                        </div>
                    </div>
                    <div className="button">
                        <button type="submit" className="button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
