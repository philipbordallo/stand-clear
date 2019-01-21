import { useEffect, useState } from 'react';

function getInitialFavorites() {
  const favoritesString = window.localStorage.getItem('favorites');

  return favoritesString
    ? favoritesString.split(', ')
    : [];
}

function useFavorites() {
  const initialFavorites = getInitialFavorites();
  const [favorites, setFavorites] = useState(initialFavorites);

  const addFavorite = (favoriteToAdd) => {
    const newFavorites = [
      ...favorites,
      favoriteToAdd,
    ].sort();

    setFavorites(newFavorites);
  };

  const removeFavorite = (favoriteToRemove) => {
    const newFavorites = favorites.filter(favorite => favorite !== favoriteToRemove);

    setFavorites(newFavorites);
  };

  useEffect(() => {
    window.localStorage.setItem('favorites', favorites.join(', '));
  }, [favorites]);

  return [favorites, { addFavorite, removeFavorite }];
}

export default useFavorites;
