// Home.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Jumbotron, Button, Grid, Row, Col, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProfilePic from '../images/ProfilePic.png';

export class Home extends React.Component {
    render() {
        return (<div>
            <Grid>
                <Row>
                    <Col lg={11}>
                        <Jumbotron>
                            <Grid>
                                <Row>
                                    <Col lg={3}>
                                         <img src={ProfilePic} height='399px' width='300px' />
                                    </Col>
                                    <Col lg={7} lgOffset="2">
                                        <h1>Welcome</h1>
                                        <p>
                                            <i>Thanks so much for dropping by!</i>
                                            <br /><br />
                                            This is a place where I can share my professional experiences and show off some of my technical talents.
                                            <br />
                                            Please feel free to look around and reach out to me if you are looking for a hard working full stack software engineer.
                                        </p>
                                        <p>
                                            <Link to={'/about'}>
                                                <Button bsStyle="primary">Learn more</Button>
                                            </Link>
                                        </p>
                                    </Col>
                                </Row>
                            </Grid>
                        </Jumbotron>
                    </Col>
                </Row>
            </Grid>
        </div>
        );
    }
}