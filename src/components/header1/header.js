import React, { useState, useEffect, Component } from 'react';
import { Row, Col, Button, Icon } from 'antd';

import './header.css';

function Header (){

  const [header, setHeader] = useState("header");

  const listenScrollEvent = event => {
    if (window.scrollY < 10) {
      return setHeader("header");
    }else if(window.scrollY <900){
      return setHeader("headerdiable")
    }else if (window.scrollY > 900) {
      return setHeader("headershadow");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

    return (
      <div style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Row className={header}>
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

export default Header;
