import React from 'react';
import Video from './video';

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.record = this.record.bind(this);
    this.stop = this.stop.bind(this);
  }

  componentDidMount() {
    this.setState({
      mode: 'recording',
      videoRecording: document.querySelector('.recording')
    });
  }

  record() {
    navigator.mediaDevices.getUserMedia({video: true, audio: true}).then(stream => {
      this.state.videoRecording.srcObject = stream;
      this._startRecording(stream);
    });
  }

  _startRecording(stream) {
    const chunks = [];
    this.setState({stream: stream});
    this.setState({recorder: new window.MediaRecorder(stream, {mimeType: 'video/webm;codecs=vp8'})});
    const recorder = this.state.recorder;
    recorder.start(2000);
    recorder.ondataavailable = (e) => {
      chunks.push(e.data);
    }
  }

  stop() {
    const recorder = this.state.recorder;
    const stream = this.state.stream;
    recorder.stop();
    stream.getVideoTracks()[0].stop();
    stream.getAudioTracks()[0].stop();
  }

  render () {
    return (
      <div>
        <Video record={this.record} mode='recording' stop={this.stop} />
      </div>
    )
  }
}
