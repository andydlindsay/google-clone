import React from 'react';
import { storiesOf } from '@storybook/react';
import App from './App';

storiesOf('App Component', module)
  .add('basic rendering', () => (
    <App />
  ))
  .add('passing props', () => (
    <App title="Greetings!" />
  ))
  .add('passing children', () => (
    <App title="I Have Children!">
      <h2>I am child</h2>
    </App>
  ));
