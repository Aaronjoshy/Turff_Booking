import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleSendOtp = () => {
    // Logic for sending OTP
  };

  const handleValidateOtp = () => {
    // Logic for OTP validation
    navigate('/signup');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Forgot Password</h2>

      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSendOtp} style={styles.button}>Send OTP</button>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        style={styles.input}
      />
      
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        style={styles.input}
      />
      
      <button onClick={handleValidateOtp} style={styles.button}>Reset Password</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#ffffff',
    padding: '20px',
    boxSizing: 'border-box',
  },
  header: {
    fontSize: '2rem',
    color: '#2f855a',
    marginBottom: '1.5rem',
  },
  input: {
    width: '100%',
    maxWidth: '400px',
    padding: '12px',
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '1rem',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    maxWidth: '400px',
    padding: '12px',
    backgroundColor: '#2f855a',
    color: 'white',
    fontSize: '1.1rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginBottom: '10px',
  },
};

export default ForgotPassword;
