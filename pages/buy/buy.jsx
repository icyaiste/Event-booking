import React from 'react';
import './buy.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Buy() {
  const location = useLocation();
  // console.log(location.state);
  let navigate = useNavigate();
  console.log(location);

  const event = location.state ? location.state.event : null; //If location.state is not null, it means that state was passed to this location, so we can access value location.state.event.

  return (
    <main className='container'>
      <h3 className='text'>You are about to score some tickets to</h3>
      <h1 className='event'>{event.name}</h1>
      <p className='when'>{event.when.date}  kl {event.when.from} - {event.when.to}</p>
      <p className='where'> @ {event.where}</p>
      <p className='pricetag'>{event.price} sek</p>
      <button className='button' onClick={() => navigate('/ticket' , { state: { event }})}>Beställ</button>
    </main>
  )
}

export default Buy