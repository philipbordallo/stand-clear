import COPY from 'shared/meta/COPY';

function sortArrivalsByMinutes(a, b) {
  const aMinutes = a.minutes === COPY.leaving
    ? 0
    : a.minutes;

  const bMinutes = b.minutes === COPY.leaving
    ? 0
    : b.minutes;

  return aMinutes - bMinutes;
}

export default sortArrivalsByMinutes;
