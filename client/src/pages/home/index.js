import React from 'react';
import { Button, Notify } from 'zent';
import './index.scss';
import ico from '../../../../static/app.ico';

class Home extends React.PureComponent {
  control = null;

  onJmpTst = () => {
    const { history } = this.props;
    history && history.push('/page2');
  };

  testLink = async () => {
    Notify.success(await window._control('123'));
  }

  render() {
    return (
      <React.Fragment>
        <div className="test">hello carlo!</div>
        <img src={ico} alt="test" />
        <Button onClick={this.onJmpTst}>42566</Button>
        <Button onClick={this.testLink}>测试！</Button>
      </React.Fragment>
    );
  }
}

export default Home;
