import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import SearchBar from './SearchBar';

storiesOf('SearchBar Component', module)
  .add('basic rendering', () => (
    <SearchBar handleSubmit={ e => {
      e.preventDefault();
      action('form submitted')(e.target[0].value);
    }} />
  ));
