
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useTrips } from './hooks/useTrips';
import SearchBar from './components/SearchBar';
import TripList from './components/TripList';

function App() {
  const [query, setQuery] = useState('');
  const trips = useTrips(query);

  return (
    <div className="App container">
      <div className="col">
        <div className="row justify-content-center">
          <h1 className="text-primary">เที่ยวไหนดี</h1>
        </div>
        <SearchBar query={query} onQueryChange={setQuery} />
        <TripList trips={trips} onTagClick={setQuery} />
      </div>
    </div>
  );
}

export default App;
