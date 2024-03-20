import React from 'react';
import { useLocation } from 'react-router-dom';
import './ticket.css';

function Ticket() {
const location = useLocation();
const event = location.state ? location.state.event : null;

  return (
    <div>
      <h1 className='event'>Tack för din beställning</h1>
      <article className='mainbox'>
        <section className='titleContainer'>
          <p>What</p>
          <h3 className='name'>{event.name}</h3>
        </section>
        <section className='titleContainer'>
          <p>Where</p>
          <h4 className='place'>{event.where}</h4>
        </section>
        <section className='bottomContainer'>
          <div className='info'>
            <p>When</p>
            <span>{event.when.date}</span>
          </div>
          <div className='info'>
            <p>From</p>
            <span>{event.when.from}</span>
          </div>
          <div className='info'>
            <p>To</p>
            <span>{event.when.to}</span>
          </div>
        </section>
      </article>
    </div>
  )
}

export default Ticket