import React from 'react';

export default class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <video className={this.props.mode}></video>
        <div className='controls'>
          <button className='record' onClick={this.props.record}>Record</button>
          <button className='stop' onClick={this.props.stop}>Stop</button>
        </div>
      </div>
    )
  }
}

