import React, { Component } from 'react';
import{Row,Col} from 'antd';

import './phase2.css';

class phase2 extends Component{
    render(){
        return(
            <div className="phase2">
                <Row>
                    <Col md={18} offset={3}>
                        <div className="brands">
                            <p className="heading21">FEATURED IN</p>
                            <div className="brandicons">
                                <img style={{height:"35px"}} src="/bbc.png"/>
                                <img style={{height:"35px"}} src="/entrepreneur.png"/>
                                <img style={{height:"35px"}} src="/techcrunch.png"/>
                                <img style={{height:"35px"}} src="/forbes.png"/>
                                <img style={{height:"35px"}} src="/wired.png"/>
                            </div>
                            <hr style={{height:"2px", width:"100%", position:"absolute", top:"100%", backgroundcolor:"#000000", color:"#000000"}}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} offset={3}>
                    <div className="phase2_image">
                        <img style={{height:"100%", padding:"0px 0px 0px 30px"}} src="/lumenphase2.jpg" />
                    </div>
                    </Col>
                    <Col md={9}>
                    <div className="text2">
                        <p className="heading22">It starts with a breath</p>
                        <p className="heading23">Lumen is the world first hand-held, portable device to accurately measure metabolism.Once available only to top athletes, in hospitals and clinics, metabolic testing is now available to everyone.</p>
                    </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default phase2;