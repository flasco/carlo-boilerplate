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
  };

  render() {
    return (
      <div style={{ padding: 20 }}>
        <div className="test">hello carlo!</div>
        <img src={ico} alt="test" />
        <br />
        <Button onClick={this.onJmpTst}>跳转</Button>
        <Button onClick={this.testLink}>测试</Button>
      </div>
    );
  }
}

export default Home;
