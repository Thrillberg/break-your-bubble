import React from 'react';
import Video from './video';

export default class Dashbaord extends React.Component {
  constructor() {
    super();
    this.record = this.record.bind(this);
  }

  record() {
    console.log(navigator)
    navigator.mediaDevices.getUserMedia({video: true, audio: true}).then(stream => {
console.log('hallo')
    });
  }

  render () {
    return (
      <div>
        <Video record={this.record} />
      </div>
    )
  }
}
