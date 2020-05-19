import React, { Component } from 'react';
import {Row,Col} from 'antd';

import './footer.css'

class footer extends Component{
    render(){
        return(
            <div className="footer">
                <Row>
                    <Col md={3} offset={4}>
                        <div className="lists">
                            <p className="headingf1">COMPANY</p>
                            <p className="headingf2">About</p>
                            <p className="headingf2">Careers</p>
                            <p className="headingf2">Contact us</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="lists">
                            <p className="headingf1">RESOURCES</p>
                            <p className="headingf2">About</p>
                            <p className="headingf2">Careers</p>
                            <p className="headingf2">Contact us</p>
                            <p className="headingf2">Press</p>
                            <p className="headingf2">Blog</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="lists">
                            <p className="headingf1">PARTNERS</p>
                            <p className="headingf2">About</p>
                            <p className="headingf2">Careers</p>
                            <p className="headingf2">Contact us</p>
                            <p className="headingf2">Careers</p>
                            <p className="headingf2">Contact us</p>
                        </div>

                    </Col>
                    <Col md={3}>
                        <div className="lists">
                            <p className="headingf1">LEGAL</p>
                            <p className="headingf2">About</p>
                            <p className="headingf2">Careers</p>
                            <p className="headingf2">Contact us</p>
                        </div>
                    </Col>
                    <Col md={3}>

                    </Col>
                </Row>
                <Row>
                    <Col md={16} offset={4}>
                        <div className="ending">
                            <img src="/lumentrade.svg"/>
                            <p style={{padding:"30px 10px 0px 10px"}}>Copyright ©2020 – Metaflow LTD. – All rights reserved.</p>
                            <hr style={{height:"1px", width:"100%", position:"absolute", top:"75%", color:"black"}}/>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default footer;