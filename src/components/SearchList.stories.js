import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchList from './SearchList';

storiesOf('SearchList Component', module)
  .add('basic rendering', () => {
    return (
      <SearchList />
    );
  });
