import React, { Component } from 'react';
import {Row,Col} from 'antd';

import './phase3.css';
import phase1 from '../phase1/phase1';

class phase3 extends Component{
    render(){
        return(
            <div className="phase3">
                <Row>
                    <Col md={14} offset={5}>
                        <div className="text3">
                            <div className="heading31">
                                <p className="heading311">The science is not new, </p>
                                <p className="heading312"> but the technology is.</p>
                            </div>
                            <p className="heading32">The Lumen device uses a CO2 sensor and flow meter to determine the CO2 concentration in a single breath. This indicates the type of fuel your body is using to produce energy.</p>
                            <a className="a3">LEARN MORE</a>
                        </div>
                    </Col>
                </Row>
                <Row className="wave">
                    <Col md={24}>
                        <img src="/wave.png"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} offset={4}>
                    <div className="heading33">
                        <p className="heading331"><img src="/check.svg"/>Scientifically Validated</p>
                        <p className="heading332">Lumen has been scientifically proven to meet the the gold standard of metabolism measurement (RER) in multiple validation studies.</p>
                    </div>
                    </Col>
                    <Col md={8}>
                        <img className="phase3_image" src="/lumenphase3.jpg"/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default phase3;