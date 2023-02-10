import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  let navigate = useNavigate()
  return (
    <div>
      <h2>Something went wrong...</h2>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  )

}