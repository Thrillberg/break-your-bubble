import Video from '../video';

describe('Video', () => {
  let video, videoElement, recordButton, record, controls, recording, stopButton, stop, playbackButton, playback, playingBack;

  beforeEach( () => {
    record = sinon.spy();
    stop = sinon.spy();
    playback = sinon.spy();
    playingBack = 'playing-back';
    recording = 'recording';
    video = shallow(<Video record={record} mode={recording} stop={stop} playback={playback} />);
    videoElement = video.find('video');
    controls = video.find('.controls');
    recordButton = controls.find('.record');
    stopButton = controls.find('.stop');
    playbackButton = controls.find('.playback');
  });

  describe('Initialization', () => {
    it('has a video element with no source', () => {
      expect(videoElement.find('[src]')).to.have.length(0);
    });

    it('video element is set to "record"', () => {
      expect(videoElement.hasClass('recording')).to.eql(true);
    });
  });

  describe('Layout', () => {
    it('has a video element', () => {
      expect(videoElement.length).to.eql(1);
    });

    it('video has controls', () => {
      expect(video.find('.controls')).to.have.length(1);
    });

    it('has a record button', () => {
      expect(recordButton.length).to.eql(1);
    });

    it('has a stop button', () => {
      expect(stopButton.length).to.eql(1);
    });

    it('has a playback button', () => {
      expect(playbackButton.length).to.eql(1);
    });
  });

  describe('Interaction', () => {
    it('calls record function on recordButton click', () => {
      recordButton.simulate('click');
      expect(record.called).to.eql(true);
    });

    it('calls stop function on stopButton click', () => {
      stopButton.simulate('click');
      expect(stop.called).to.eql(true);
    });

    it('calls playback function on playbackButton click', () => {
      playbackButton.simulate('click');
      expect(playback.called).to.eql(true);
    });
  });
});
