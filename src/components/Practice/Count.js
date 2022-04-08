import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  increment,
  selectCount
} from './countSlice';

function Count() {
  const value = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <p>{value}</p>
    </div>
  )
}

export default Count
