const searchHandler = (arr, term) => {
  if (term === 0) {
    return arr;
  }
  return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
};

const filterHandler = (arr, filter) => {
  switch (filter) {
    case "popular":
      return arr.filter((c) => c.like);
    case "mostViewed":
      return arr.filter((c) => c.viewCount > 800);
    default:
      return arr;
  }
};

export { searchHandler, filterHandler };
