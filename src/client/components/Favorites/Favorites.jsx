import React, { useState } from 'react';

import { useFavorites } from 'hooks';

import Link from 'components/Link';
import Icon from 'components/Icon';
import Button from 'components/Button';
import FavoritesSelect from 'components/FavoritesSelect';

import STATION_LIST from 'shared/meta/STATION_LIST';

import Classes from './styles';

function Favorites() {
  const [favorites, { addFavorite, removeFavorite }] = useFavorites();
  const [canAddFavorite, toggleAddFavorite] = useState(false);

  const stations = STATION_LIST.filter(station => favorites.includes(station.abbreviation));
  const options = stations.reduce(
    (accumulator, station) => accumulator.set(station.abbreviation, true), new Map(),
  );

  const handleAdd = () => {
    toggleAddFavorite(prevState => !prevState);
  };

  const handleChange = (event) => {
    if (event.target.checked) {
      addFavorite(event.target.name);
      toggleAddFavorite(prevState => !prevState);
    }
  };

  const handleRemove = abbreviation => () => {
    removeFavorite(abbreviation);
  };

  const renderListItem = (item) => {
    const { shortName, abbreviation } = item;

    const url = `/station/${abbreviation.toLowerCase()}`;

    return (
      <li className={ Classes.listItem } key={ abbreviation }>
        <Link to={ url } className={ Classes.link }>{ shortName }</Link>
        <Button
          type="text"
          className={ Classes.button }
          onClick={ handleRemove(abbreviation) }
        >
          Remove
        </Button>
      </li>
    );
  };

  const favoriteContent = canAddFavorite
    ? (
      <FavoritesSelect
        options={ options }
        onChange={ handleChange }
        onToggleDropdown={ handleAdd }
      />
    )
    : (<Button type="secondary" onClick={ handleAdd }>Add Favorite Station</Button>);

  return (
    <section className={ Classes.root }>
      <h2 className={ Classes.title }>
        Favorites <Icon name="star-filled" size="20" className={ Classes.titleIcon } />
      </h2>
      <ul className={ Classes.list }>
        { stations.map(renderListItem) }
      </ul>
      { favoriteContent }
    </section>
  );
}

export default Favorites;
