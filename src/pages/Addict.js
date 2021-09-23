import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {Card} from 'antd';

const { Meta } = Card;

const Addict = () => {

    return(
        <>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2 style={{textAlign:"center"}}>GET ADDICTED TO DOING GOOD</h2>
            <Container style={{position: "relative", left:"50px"}}>
                <Row>
                    <Col>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                        <h5>For Every Human Foundation</h5>
                        <p>Human rights matter todday more than ever.  Learn more about human rights and how you can help.</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                        <h5>Pretty Cool Person™</h5>
                        <p>Look trendy while contributing to a great cause.  High quality tees, sweaters, and totes with a portion of proceeds going to your charity of choice.</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                        <h5>Weekly Live Meditation Sessions</h5>
                        <p>The new way to spend Friday nights.  Join us every friday at 9pm EST for a live meditation session and discussion (Zoom).</p>
                        </Card>
                    </Col>
                </Row>   
            

            </Container>
            
        </>
    )
}

export default Addict;