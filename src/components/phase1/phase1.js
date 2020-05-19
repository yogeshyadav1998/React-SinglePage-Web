import React, { Component } from 'react';
import{Row,Col, Icon} from 'antd';

import './phase1.css';

class phase1 extends Component{
    render(){
        return(
            <div className="phase1">
                <Row>
                    <Col md={11} offset={4}>
                        <div className="text">
                            <p className="heading11">The first device to hack your metabolism</p>
                            <p className="heading12">Lumen knows if your body is using fats or carbs for fuel</p>
                            <button className="buy_now_button hvr-pulse-grow">BUY NOW</button>
                            <button className="see_action_button hvr-pulse-grow">SEE IT IN ACTION <Icon type="caret-right" /></button>
                            <hr style={{height:"3px", width:"100%", position:"absolute", top:"75%", color:"black"}}/>
                            <div className="icons">
                            <img style={{padding:"0px"}} src="/workout.svg"/>
                            <p className="icontext">Optimize Workout</p>
                            <img src="/nutrition.svg"/>
                            <p className="icontext">Get The Right Nutrition</p>
                            <img src="/looseweight.svg"/>
                            <p className="icontext">Loose Weight</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={8}>
                     <div className="home_image">
                            <img src="lumenhome.png"></img>
                     </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default phase1;