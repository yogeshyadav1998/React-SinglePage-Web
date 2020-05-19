import React, { Component } from 'react';
import Background from './phase5background.jpg';
import {Row, Col} from 'antd';

import './phase5.css';

class phase5 extends Component{
    render(){
        return(
            <div  style={{backgroundImage:"url(" + { Background } + ")"}} className="phase5">
                    <Row>
                        <Col md={15} offset={4}>
                            <div className="text51">
                                <p className="heading51">Like having a nutritionist in your pocket</p>
                                <p className="heading52">Know what and when to eat to fuel your workout, improve your metabolic flexibility and support fat burn.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} offset={4}>
                            <div className="grid">
                            <p className="heading53">Track your metabolism daily</p>
                            <p className="heading54">See how your metabolism is affected by your sleep, physical activity, and nutrition.</p>
                            </div>
                        </Col>
                        <Col md={8}>
                        <div className="grid">
                        <img style={{height:"65vh", width:"100%"}} src="/phase51.jpg"/>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} offset={4}>
                        <div className="grid">
                        <img style={{height:"65vh", width:"100%"}} src="/phase52.jpg"/>
                        </div>
                        </Col>
                        <Col md={8}>
                        <div className="grid">
                            <p className="heading53">Customize your nutrition</p>
                            <p className="heading54">Get daily personalized meal plans. Know exactly what to eat and when.</p>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} offset={4}>
                            <div className="grid">
                            <p className="heading53">Workout optimization</p>
                            <p className="heading54">See if you have enough energy before a workout or if you need to fuel up. Breathe afterwards to see the impact on your body.</p>
                            </div>
                        </Col>
                        <Col md={8}>
                        <div className="grid">
                        <img style={{height:"65vh", width:"100%"}} src="/phase53.jpg"/>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} offset={4}>
                            <div className="grid">
                            <img style={{height:"65vh", width:"100%"}} src="/phase54.jpg"/>
                            </div>
                        </Col>
                        <Col md={8}>
                        <div className="grid">
                        <p className="heading53">Monitor and improve  metabolic health</p>
                            <p className="heading54">Over time, Lumen tracks your metabolism, sleep, nutrition, and fitness data to provide a Lumen Flex Score, which reflects your success and helps sustain results.</p>
                        </div>
                        </Col>
                    </Row>
            </div>
        )
    }
}

export default phase5;