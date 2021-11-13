import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const SignIn = () => {
  return (
    <div>
      SignIn
      <Link to='/films'>to Films</Link>
    </div>
  )
}
