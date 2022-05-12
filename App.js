import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HomePage } from '../HomePage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Component Mount');
  }, []);

  return (
    <div className="jumbotron">
      <div className="container">
        <div className="col-md-8 offset-md-2">
          <HomePage />
        </div>
      </div>
    </div>
  );
}

export { App };
