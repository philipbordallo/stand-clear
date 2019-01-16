import React, { useState, useEffect } from 'react';
import PT from 'prop-types';

import Classes from './styles';


const LOAD_THRESHOLD = 40;

function PullToRefresh(props) {
  const { children, setIsRefresh, hasRefreshed } = props;

  const [amount, setAmount] = useState(0);
  const [start, setStart] = useState(0);
  const [moveOffset, setMoveOffset] = useState(0);
  const [transition, setTransition] = useState('on');

  useEffect(() => {
    if (hasRefreshed) {
      setAmount(0);
      setMoveOffset(0);
      setStart(0);
      setIsRefresh(false);
    }
  }, [hasRefreshed]);

  useEffect(() => {
    const difference = moveOffset - start;

    if (amount >= LOAD_THRESHOLD) {
      setIsRefresh(true);
      setAmount(LOAD_THRESHOLD);
      setTransition('on');
    }
    else if (difference >= 0) {
      setAmount(difference ** 0.85);
    }
    else {
      setTransition('on');
      setAmount(0);
    }
  }, [start, moveOffset, amount]);

  const handleTouchStart = (event) => {
    if (window.pageYOffset <= 0) {
      setStart(event.touches[0].clientY);
      setTransition('on');
    }
  };

  const handleTouchMove = (event) => {
    if (window.pageYOffset <= 0) {
      setMoveOffset(event.touches[0].clientY);
      setTransition('off');
    }
    else {
      setMoveOffset(0);
    }
  };

  const handleTouchEnd = () => {
    if (window.pageYOffset <= 0) {
      setStart(0);
      setMoveOffset(0);
      setTransition('on');
    }
  };

  const style = {
    transform: `translate(0px, ${amount}px)`,
  };

  const childClassNames = transition === 'on'
    ? Classes.on
    : '';

  const loaderContent = amount >= LOAD_THRESHOLD
    ? (
      <div className={ Classes.loader }>
        Refresh!
      </div>
    ) : null;

  return (
    <div className={ Classes.root }>
      { loaderContent }
      <div
        className={ childClassNames }
        onTouchStart={ handleTouchStart }
        onTouchMove={ handleTouchMove }
        onTouchEnd={ handleTouchEnd }
        style={ style }
      >
        { children }
      </div>

    </div>
  );
}
PullToRefresh.propTypes = {
  children: PT.node.isRequired,
  hasRefreshed: PT.bool.isRequired,
  setIsRefresh: PT.func.isRequired,
};

export default PullToRefresh;
