import { useState, useEffect } from 'react';
import axios from 'axios';

export function useTrips(query) {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`api/trips?keyword=${query}`);
      setTrips(result.data);
    };

    fetchData();
  }, [query]);

  return trips;
}
