import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';

function App() {
    const [showModal, setShowModal] = useState(false)
    const [showEvents, setShowEvents] = useState(true);
    const [events, setEvents] = useState([
      {title: "mario's birthday bash", id: 1},
      {title: "bowser's live stream", id: 2},
      {title: "race on moo moo farm", id: 3}
    ])

    console.log(showEvents)

    const handleClick = (id) => {
      setEvents((prevEvents) => {
        return prevEvents.filter((event) => {
          return id !== event.id
        })
      })
      console.log(id)
    }

    const handleClose = () => {
      setShowModal(false)
    }

  return (
    <div className="App">
      <Title />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
      {/* {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </div>
      ))} */}
      {showEvents && <EventList events={events} handleClick={handleClick} />}

      {showModal && <Modal handleClose={handleClose} isSalesModal={false}>
        <h2>Terms and Conditions</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </Modal>}

      <div>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
      </div>
    </div>
  );
}

export default App;
