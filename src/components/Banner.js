import React, { Component, useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import axios from 'axios';

const Banner = () => {
  //usestate hook allows us to use a local state in an arrow component function
  const [data, setData] = useState([]) 

  //use effects allows us to immediately invoke useEffects and it is invoked with every rerender
  //ALWAYS use useEffect for ASYNC tasks
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/api/data');
        //once we fetch product data (using axios here) we want to set it to the lcoal state
      const data = res.data;
        console.log(data)
      //setState here by invoking setProducts, what you declared on line 12 to be the function that changes state
      setData(data);
    }

    fetchData();
    //as a second argument to useEffect, we put an array of depencies. or certain things 
    //(like 'test') that will fire off this useEffect function
  }, [])

  //had to add a proxy to the backend port 5050, so that when we make the get request for product data
  // to the backend, it looks on server 5050 (backend) rather than 3000 frontend. This was done in package.json
  //under "proxy" and 127.0.0.1 is loop back address or the local host always
  return (
    <Alert variant="success">
    <p className="mb-0">
      Whenever you need to, be sure to use margin utilities to keep things nice
      and tidy.
    </p>
  </Alert>
  );
};

export default Banner;
