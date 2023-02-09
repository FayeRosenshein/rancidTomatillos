import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  let navigate = useNavigate()
  return (
    <>
    <h1>Somthing went wrong...</h1>
    <button onClick={() => navigate("/")}>Home</button>
    </>
  )
}