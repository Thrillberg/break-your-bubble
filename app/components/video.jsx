import React from 'react';

export default class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <video></video>
        <div className='controls'>
          <button className='record' onClick={this.props.record}>Record</button>
        </div>
      </div>
    )
  }
}

