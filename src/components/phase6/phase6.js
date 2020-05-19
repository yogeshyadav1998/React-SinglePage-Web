import React, { Component } from 'react';
import {Row,Col} from 'antd';

import './phase6.css';

class phase6 extends Component{
    render(){
        return(
            <div className="phase6">
                <Row>
                    <Col md={16} offset={4}>
                        <div className="phase6form">
                            <Row>
                                <Col md={10}>
                                    <div className="formimage">
                                        <img style={{height:"70vh", width:"100%"}}  src="/phase6form.jpg"/>
                                    </div>
                                </Col>
                                <Col md={14}>
                                    <div className="formcontent">
                                        <p className="formheading1">Stay a breath ahead</p>
                                        <p className="formheading2">Lumen newsletter</p>.
                                        <input class="forminput" placeholder="EMAIL ADDRESS"/>
                                        <input class="forminput" placeholder="PASSWORD"/>
                                        <button className="formsubmit_button">SUBMIT</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default phase6;