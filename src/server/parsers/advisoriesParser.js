function advisoriesParser(data) {
  if (data && data.root) {
    return {
      date: data.root.date,
      time: data.root.time,
      list: data.root.bsa.map(advisory => ({
        type: !advisory.type ? 'INFO' : advisory.type,
        description: advisory.description['#cdata-section'],
      })),
    };
  }

  return null;
}

export default advisoriesParser;
