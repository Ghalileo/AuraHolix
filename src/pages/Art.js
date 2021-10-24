import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {Card} from 'antd';
import orgonitecat from '../assets/catorgonite.jpg'
import healingcrystals from '../assets/healingcrystals.jpg'
import musicphoto from '../assets/musicphoto.jpg'
const { Meta } = Card;

const Art = () => {

    return(
        <>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2 style={{textAlign:"center"}}>ART ADDICT!</h2>
            <Container style={{position: "relative", left:"50px"}}>
                <Row>
                    <Col>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={orgonitecat} />}
                            >
                                 <br/>
                        <h5>Orgonite Pyramids</h5>
                        <p>"Orgone", is the life energy found everwhere.  These custom pyramids are not only beautiful but they can also transform negative, harmful energy into postive, productive energy.</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={musicphoto} />}
                            >
                                <br/>
                        <h5>Music!</h5>
                        <ul style={{position: "relative", right:"15px"}}>
                            <li>Spotify</li>
                            <li>Pandora</li>
                            <li>Youtube</li>
                            <li>Itunes</li>
                        </ul>
                        </Card>
                    </Col>
                    <Col>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={healingcrystals} />}
                            >
                                 <br/>
                        <h5>Zodiac NoteBooks</h5>
                        <p>Customized Zodiac journals make the perfect gift for evert one - from Aries to Pisces.</p>
                        </Card>
                    </Col>
                </Row>   
            

            </Container>
            
        </>
    )
}

export default Art;