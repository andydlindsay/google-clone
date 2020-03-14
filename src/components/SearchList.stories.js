import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchList from './SearchList';
import data from '../db/mock-db';

storiesOf('SearchList Component', module)
  .add('basic rendering', () => {
    return (
      <SearchList data={ data }/>
    );
  });
