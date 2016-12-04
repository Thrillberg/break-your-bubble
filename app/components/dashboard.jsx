import React from 'react';
import Video from './video';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.record = this.record.bind(this);
    this.stop = this.stop.bind(this);
    this.playback = this.playback.bind(this);
  }

  record() {
    this.setState({
      videoPlayingBack: null,
      videoRecording: document.querySelector('video'),
    });
    navigator.mediaDevices.getUserMedia({video: true, audio: true}).then(stream => {
      this.state.videoRecording.srcObject = stream;
      this._startRecording(stream);
    });
  }

  _startRecording(stream) {
    this.setState({chunks: []});
    this.setState({stream: stream});
    this.setState({recorder: new window.MediaRecorder(stream, {mimeType: 'video/webm;codecs=vp8'})});
    const recorder = this.state.recorder;
    recorder.start(2000);
    recorder.ondataavailable = (e) => {
      this.state.chunks.push(e.data);
    }
  }

  stop() {
    const recorder = this.state.recorder;
    const stream = this.state.stream;
    recorder.stop();
    stream.getVideoTracks()[0].stop();
    stream.getAudioTracks()[0].stop();
  }

  playback() {
    this.setState({
      videoRecording: null,
      videoPlayingBack: document.querySelector('video')
    });
    const blob = new Blob(this.state.chunks, {type: 'video/webm'})
    this.state.videoPlayingBack.src = URL.createObjectURL(blob);
  }

  render () {
    return (
      <div>
        <Video record={this.record} stop={this.stop} playback={this.playback} />
      </div>
    )
  }
}
