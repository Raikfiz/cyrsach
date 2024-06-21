import React, { Component} from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './Home.css';
import CardBody from '../../node_modules/react-bootstrap/esm/CardBody';



export default class Blog extends Component {
    render() {
      return (
        <div className="main-container">
          <Container>
          <Row>
              <Col md={12}>
                <Card>
                  <Card.Body>
                  <Card.Img variant="top" src="https://uaeu.top/images/2023/09/03/03-3-09-02-40_large.jpg" />
                    <Card.Title>Чебуреки</Card.Title>
                    <Card.Text>Наши чебуреки настолько вкусные что у вас слюнки будут идти от запаха</Card.Text> 
                  </Card.Body>
                </Card>
              </Col>
          </Row>
            <h2 className="text-center mt-5 mb-3">Галерея</h2>
            <Row>
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src="https://cdn.foodpicasso.com/assets/2022/11/30/d8d1b1d29be1eff56c28b50215dce6dc---jpg_1000x_103c0_convert.jpg" />
                  <Card.Body>
                    <Card.Title>Чебурек с бараниной</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              {/* след товар */}
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src="https://avatars.dzeninfra.ru/get-zen_doc/3986059/pub_61a0a4f6febeaf2ea7f143aa_61a0a89b95f1e13fcaa19d73/scale_1200" />
                  <Card.Body>
                    <Card.Title>Чебурек с говядиной</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              {/* след товар */}
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src="https://prochepetsk.ru/userfiles/picfullsize/img-20587-15857242149398.jpg" />
                  <Card.Body>
                    <Card.Title>Чебурек со свининой</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              {/* след товар */}
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src="https://vego-kolbasa.ru/wp-content/uploads/9/2/7/927135bc9c0b0f2bbc9f34715de69512.jpeg" />
                  <Card.Body>
                    <Card.Title>Чебурек с сыром</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <h2 className="text-center mt-5 mb-3">Где нас найти?</h2>
            <Row>
              <Col md={12}>
                <Card>
                  <CardBody>
                    <YMaps>
                      <Map width='100%' height='500px' defaultState={{ center: [59.945363, 30.259206], zoom: 15 }}>
                        <Placemark defaultGeometry={[59.945363, 30.259206]} />
                      </Map>
                    </YMaps>
                    <Card.Text>16-я линия Васильевского острова, 85к1Б, Санкт-Петербургг</Card.Text>
                 </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      );
    };
}    