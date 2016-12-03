import React from 'react';
import Video from './video';

export default class Dashbaord extends React.Component {
  render () {
    return (
      <div>
        <Video record={record} />
      </div>
    )
  }
}
