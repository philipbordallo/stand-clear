import { useEffect } from 'react';

function useLogger(items = {}) {
  const watchedItems = Object.keys(items)
    .reduce((collection, item) => collection.concat([items[item]]), []);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log(items); // eslint-disable-line no-console
    }
  }, watchedItems);
}

export default useLogger;
