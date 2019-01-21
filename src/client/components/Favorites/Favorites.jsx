import React from 'react';

import { useFavorites } from 'hooks';

import Link from 'components/Link';
import Icon from 'components/Icon';
import Button from 'components/Button';

import STATION_LIST from 'shared/meta/STATION_LIST';

import Classes from './styles';

function Favorites() {
  const [favorites, { addFavorite, removeFavorite }] = useFavorites();

  const stations = STATION_LIST.filter(station => favorites.includes(station.abbreviation));

  const handleAdd = abbreviation => () => {
    addFavorite(abbreviation);
  };

  const handleRemove = abbreviation => () => {
    removeFavorite(abbreviation);
  };

  const renderListItem = (item) => {
    const { name, abbreviation } = item;

    const url = `/station/${abbreviation.toLowerCase()}`;

    return (
      <li className={ Classes.listItem } key={ abbreviation }>
        <Link to={ url } className={ Classes.link }>{ name }</Link>
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

  return (
    <section className={ Classes.root }>
      <h2 className={ Classes.title }>
        Favorites <Icon name="star-filled" size="20" className={ Classes.titleIcon } />
      </h2>
      <ul className={ Classes.list }>
        { stations.map(renderListItem) }
      </ul>

      <Button type="secondary" onClick={ handleAdd('19TH') }>Add Favorite Station</Button>
    </section>
  );
}

export default Favorites;
