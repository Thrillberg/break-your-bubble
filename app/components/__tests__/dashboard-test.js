import Dashboard from '../dashboard';
import Video from '../video';

describe('Dashboard', () => {
  let dashboard, getUserMedia, video;

  beforeEach(() => {
    dashboard = mount(<Dashboard />);
    getUserMedia = sinon.spy();
    video = dashboard.find(Video);
  });

  describe('Initialization', () => {

  });

  describe('Layout', () => {
    it('has a video component', () => {
      expect(video).to.have.length(1);
    });
  });

  describe('Interaction', () => {
    it('record function calls getUserMedia', () => {
      dashboard.instance().record();
      expect(getUserMedia.called).to.eql(true);
    });
  });
});
