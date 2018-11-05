import React from 'react';
import { Button } from 'zent';
import './index.scss';
import ico from '../../../../static/app.ico';


class Home extends React.PureComponent {
  onJmpTst = () => {
    const { history } = this.props;
    history && history.push('/page2');
  };

  render() {
    return (
      <React.Fragment>
        <div className="test">hello electron!</div>
        <img src={ico} alt="test" />
        <Button onClick={this.onJmpTst}>425266</Button>
      </React.Fragment>
    );
  }
}

export default Home;
