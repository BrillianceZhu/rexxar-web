import React, { PureComponent } from 'react';

import containerAPI from 'common/ContainerAPI';

class CntrAPIComponent extends PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    logInfo: '',
    geoInfo: ''
  }

  setLog = () => {
    containerAPI.sendLog({
      event: 'click_demo_log',
      label: JSON.stringify({ source: 'rexxar' })
    }).then(() => {
      this.setState({
        logInfo: 'success'
      });
    }).catch(() => {
      this.setState({
        logInfo: 'failure'
      });
    });
  }

  getGeo = () => {
    containerAPI.getGeo().then((data) => {
      this.setState({
        geoInfo: JSON.stringify(data)
      });
    }).catch((error) => {
      this.setState({
        geoInfo: JSON.stringify(error.message)
      });
    });
  }

  render() {
    return (
      <section>
        <h1>Container API</h1>
        <section>
          <p>{`data: event:'click_demo_log',label:{source:'rexxar'}`}</p>
          <p>result: {this.state.logInfo}</p>
          <input type='button' onClick={this.setLog} value='Send Log' />
        </section>
        <section>
          <p>result：{this.state.geoInfo}</p>
          <input type='button' onClick={this.getGeo} value='Get GEO Info' />
        </section>
      </section>
    )
  }
}

export default CntrAPIComponent;
