import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ErrorPage.css';

export default function ErrorPage() {
  let navigate = useNavigate()
  return (
    <div className='error-page' >
      <h2 className='error-message'>Something went wrong...</h2>
      <button className='error-home-button' onClick={() => navigate("/")}>Home</button>
    </div>
  )

}