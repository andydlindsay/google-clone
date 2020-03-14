import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchListItem from './SearchListItem';

const datum = {
  id: 1,
  website: 'http://www.example.com',
  title: 'Lorem ipsum dolor sit amet',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices sagittis justo et faucibus. Sed volutpat tempus lectus vel laoreet. Proin et lectus et nisl posuere mollis vitae sed felis.'
};

storiesOf('SearchListItem Component', module)
  .add('basic rendering', () => {
    return (
      <SearchListItem datum={ datum } />
    );
  });
