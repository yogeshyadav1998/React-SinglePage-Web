import React, { Component } from 'react';
import { Row, Col, Button, Icon } from 'antd';

import './header.css';

class Header extends Component {

  render(){
    return (
      <div style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Row className="header">
          <Col md={2} offset={1}>
            <img className="trade_name" src="/lumentrade.svg"/>
          </Col>
          <Col md={3} offset={12} className="header_element">
            <a>HOW IT WORKS</a>
          </Col>
          <Col md={2} className="header_element">
            <a>SUPPORT</a>
          </Col>
          <Col md={3} >
            <button className="buynow_button hvr-pulse-grow">BUY NOW</button>
          </Col>
        </Row>
      </div>
    );
  }
}


export default Header;
