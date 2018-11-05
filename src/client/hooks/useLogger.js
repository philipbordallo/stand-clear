import { useEffect } from 'react';

const logger = console;

function useLogger(items = {}) {
  const watchedItems = Object.keys(items)
    .reduce((collection, item) => collection.concat([items[item]]), []);

  useEffect(() => {
    logger.log(items);
  }, watchedItems);
}

export default useLogger;
