import React, { Component } from 'react';
import {Row, Col, Carousel} from 'antd';

import './phase4.css';

class phase4 extends Component{
    render(){
        return(
            <div className="phase4">
                 <Carousel autoplay className="phase4carousel">
                    <div className="phase4carousel">
                        <Row>
                            <Col md={8} offset={4}>
                                <div className="carouselimage">
                                    <a href="#"><img style={{height:"40vh", width:"auto"}} src="/phase41.png"/></a>
                                </div>
                            </Col>
                            <Col md={8}>
                                <div className="text4 text41">
                                <p className="heading41">“</p>
                                <p className="heading42">Being able to track my metabolism has been pretty epic. Now I have the data to see exactly where my body is at.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                        <Col md={8} offset={4}>
                                <div className="carouselimage">
                                <a href="#"><img style={{height:"40vh", width:"auto"}} src="/phase42.png"/></a>
                                </div>
                            </Col>
                            <Col md={8}>
                                <div className="text4 text42">
                                <p className="heading41">“</p>
                                <p className="heading42">Being able to track my metabolism has been pretty epic. Now I have the data to see exactly where my body is at.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                        <Col md={8} offset={4}>
                                <div className="carouselimage">
                                <a href="#"><img style={{height:"40vh", width:"auto"}} src="/phase43.png"/></a>
                                </div>
                            </Col>
                            <Col md={8}>
                                <div className="text4 text43">
                                <p className="heading41">“</p>
                                <p className="heading42">Being able to track my metabolism has been pretty epic. Now I have the data to see exactly where my body is at.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                        <Col md={8} offset={4}>
                                <div className="carouselimage">
                                <a href="#"><img style={{height:"40vh", width:"auto"}} src="/phase44.png"/></a>
                                </div>
                            </Col>
                            <Col md={8}>
                                <div className="text4 text44">
                                <p className="heading41">“</p>
                                <p className="heading42">Being able to track my metabolism has been pretty epic. Now I have the data to see exactly where my body is at.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default phase4;