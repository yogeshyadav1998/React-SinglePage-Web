import React, { Component } from 'react';
import {Row,Col,Icon} from 'antd';

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
                            <Row>
                                <Col md={3}>
                                <img src="/lumentrade.svg"/>
                                </Col>
                                <Col md={10}>
                                <p>Copyright ©2020 – Metaflow LTD. – All rights reserved.</p>
                                </Col>
                                <Col md={4} offset={7}>
                                    <Col md={6}>
                                    <Icon type="twitter" />
                                    </Col>
                                    <Col md={6}>
                                    <Icon type="facebook" />
                                    </Col>
                                    <Col md={6}>
                                    <Icon type="instagram" />
                                    </Col>
                                    <Col md={6}>
                                    <Icon type="youtube" />
                                    </Col>
                                </Col>
                            </Row>
                            <hr style={{height:"1px", width:"100%", position:"absolute", color:"black"}}/>
                            <Row className="paymentadd">
                                <Col md={3} offset={16}><p>secure checkout</p></Col>
                                <Col md={1}><img src="/paypal.svg"/></Col>
                                <Col md={1}><img src="/visa.svg"/></Col>
                                <Col md={1}><img src="/master.svg"/></Col>
                                <Col md={1}><img src="/americanexpress.svg"/></Col>
                                <Col md={1}><img style={{height:"25px"}} src="/discover.jpg"/></Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default footer;