import Video from '../video';

describe('Video', () => {
  let video, videoElement, recordButton, record, controls;

  beforeEach( () => {
    record = sinon.spy();
    video = shallow(<Video record={record} />);
    videoElement = video.find('video');
    controls = video.find('.controls');
    recordButton = controls.find('.record');
  });

  describe('Initialization', () => {
    it('has a video with no source', () => {
      expect(videoElement.find('[src]')).to.have.length(0);
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
  });

  describe('Interaction', () => {
    it('calls record function on click', () => {
      recordButton.simulate('click');
      expect(record.called).to.eql(true);
    });
  });
});
