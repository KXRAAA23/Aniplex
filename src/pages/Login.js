import { useState } from 'react';
import { Link } from 'react-router-dom';
import animeImage from "../images/anime.jpg";

function Login() {
  const [formData, setFormData] = useState({
    Name: '',
    Number: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { Name, Number } = formData;
  
    try {
      const response = await fetch(`https://aniplex-89453-default-rtdb.firebaseio.com/Userdata.json`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const userData = await response.json();
  
      const users = Object.values(userData);
      const validUserByName = users.find(user => user.Name === Name);
      const validUserByNumber = users.find(user => user.Number === Number);
  
      if (validUserByName && validUserByNumber) {
        alert('Login Successful, Valid User!');
      } else {
        alert('Invalid Username or Password!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error occurred during login');
    }
  };
  

  return (
    <div className="home" style={{ backgroundImage: `url(${animeImage})` }}>
      <div className='container'>
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div className='details'>
            <div className="input">
              <span className='details'>Username</span>
              <input type="text" name="Name" placeholder="Enter username" value={formData.Name} onChange={handleChange} autoComplete='off' required />
            </div>
            <div className="input">
              <span className="details">Phone Number</span>
              <input type="text" name="Number" placeholder="Enter phone number" value={formData.Number} onChange={handleChange} autoComplete='off' required />
            </div>
            <div className="login">
              <span>Don't have an account?</span>
              <Link to='/signup' className='Link'>Sign up here</Link>
            </div>
          </div>
          <div className="button">
            <button type="submit" className="button">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
