import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {Card} from 'antd';

const { Meta } = Card;

const Astro = () => {

    return(
        <>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2 style={{textAlign:"center"}}>ASTRO-HOLIC</h2>
            <Container style={{position: "relative", left:"50px"}}>
                <Row>
                    <Col>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                        <h5>Life Purpose & Career Reading</h5>
                        <p>You are meant to be happy.  You have a deeper purpose.  Uncover your path to fufillment - whether a spirtual path or a career - here.</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                        <h5>Life Partner Reading</h5>
                        <p>You attract what you are and you attract what you think you deserve.  Learn about your relationship patterns and your destined soulmate here.</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                        <h5>Location Astrology</h5>
                        <p>Have you ever visited a location that felt off?  Or another that immediatly felt likw home?  Astrology can answer the question of "Where in the world should I live?" Learn More here.</p>
                        </Card>
                    </Col>
                </Row>   
            

            </Container>
            
        </>
    )
}

export default Astro;