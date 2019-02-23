import React from 'react';
import { Button } from 'zent';
import { connect } from '../../utils/dva';
import { createAction } from '../../utils';
import './index.scss';
import ico from '../../../../static/app.ico';

// const { ipcRenderer } = require('electron');

class Page2 extends React.PureComponent {
  add = () => {
    const { dispatch } = this.props;
    dispatch && dispatch(createAction('app/testAdd')({}));
  };

  jmpHome = () => {
    const { history } = this.props;
    history && history.goBack();
  };

  render() {
    const { cnt = 0 } = this.props;
    return (
      <div style={{ padding: 20 }}>
        <div className="test">{`hello carlo! cnt: ${cnt}`}</div>
        <img src={ico} alt="test" />
        <br />
        <Button onClick={this.jmpHome}>return</Button>
        <Button onClick={this.add}>Clxick</Button>
      </div>
    );
  }
}

function select(state) {
  if (state == null) return {};
  return {
    cnt: state.app.cnt,
  };
}

export default connect(select)(Page2);
