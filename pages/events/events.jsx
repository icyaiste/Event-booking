import React from 'react';
import './events.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Events() {
  const [events, setEvents] = useState([]);

  let navigate = useNavigate();

  async function fetchEvents() {
    try {
      const response = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/where-its-at-api/events')
      const data = await response.json();
      console.log(data);
      setEvents(data)
    } catch (error) {
      console.log('Error has occured', error);
    }
  }
  useEffect(() => {
    fetchEvents();
  }, []);

  function displayEvents() {
    return events && events.map((event, index) => {
      // console.log(event);

      return (
        <Link className='eventbox' key={index} to='/buy' state={{ event: event }} >
          <section className='date'>
            <p>{event.when.date}</p>
          </section>
          <section className='mainInfo'>
            <h2 className='title'>{event.name}</h2>
            <p className='location'>{event.where}</p>
            <p className='time'>{event.when.from} - {event.when.to}</p>
          </section>
          <section className='price'>
            <p>{event.price} sek</p>
          </section>
        </Link>
      );
    });
  }

  return (
    <main className='main'>
      <h1 className='header'>Events</h1>
      <div className='content'>{displayEvents()}</div>
    </main>
  )
}

export default Events