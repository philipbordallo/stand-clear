function logger(info) {
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'test') {
    console.log(info); // eslint-disable-line no-console
  }
}

export default logger;
