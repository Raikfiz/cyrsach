import React, { useState } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

const Products = ({ addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [flavor, setFlavor] = useState('');

  const cardStyle = {
    width: '18rem',
    backgroundColor: 'rgb(202, 164, 116)'
  };


  const handleQuantityChange1 = (e) => {
    setQuantity(parseInt(e.target.value));
  };
  const handleQuantityChange2 = (e) => {
        setQuantity(parseInt(e.target.value));
    };
  const handleQuantityChange3 = (e) => {
        setQuantity(parseInt(e.target.value));
    };
  const handleQuantityChange4 = (e) => {
        setQuantity(parseInt(e.target.value));
    };

  const handleAddToCart1 = () => {
    addToCart({ name: 'Чебурек с бараниной', quantity: quantity, flavor: flavor, price: 100 }); 
  };
  const handleAddToCart2 = () => {
        addToCart({ name: 'Чебурек с говядиной', quantity: quantity, flavor: flavor, price: 150 });
    };
  const handleAddToCart3 = () => {
        addToCart({ name: 'Чебурек со свининой', quantity: quantity, flavor: flavor, price: 200 });
    };
  const handleAddToCart4 = () => {
        addToCart({ name: 'Чебурек с сыром', quantity: quantity, flavor: flavor, price: 250 });
    };

  return (
    <div>
      <h2 className="text-center mt-4 mb-3">Товары</h2>
      <Row>
        <Col sm={6} className='mb-3'>
          <Card style={cardStyle}>
            <Card.Img variant="top" src="https://uaeu.top/images/2023/09/03/03-3-09-02-40_large.jpg" />
            <Card.Body>
              <Card.Title>Чебурек</Card.Title>
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">Количество:</Form.Label>
                  <Col sm="8">
                    <Form.Control type="number" min = '1' value={quantity} onChange={handleQuantityChange1} />
                  </Col>
                </Form.Group>
              </Form>
              <hr />
              <Button onClick={handleAddToCart1}>Добавить в корзину</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} className='mb-3'>
          <Card style={cardStyle}>
            <Card.Img variant="top" src="https://cdn.foodpicasso.com/assets/2022/11/30/d8d1b1d29be1eff56c28b50215dce6dc---jpg_1000x_103c0_convert.jpg" />
            <Card.Body>
              <Card.Title>Чебурек</Card.Title>
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">Количество:</Form.Label>
                  <Col sm="8">
                    <Form.Control type="number" min = '1' value={quantity} onChange={handleQuantityChange2} />
                  </Col>
                </Form.Group>
              </Form>
              <hr />
              <Button onClick={handleAddToCart2}>Добавить в корзину</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* След карточки  */}
      <Row>
        <Col sm={6} className='mb-3'>
          <Card style={cardStyle}>
            <Card.Img variant="top" src="https://avatars.dzeninfra.ru/get-zen_doc/3986059/pub_61a0a4f6febeaf2ea7f143aa_61a0a89b95f1e13fcaa19d73/scale_1200" />
            <Card.Body>
              <Card.Title>Чебурек</Card.Title>
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">Количество:</Form.Label>
                  <Col sm="8">
                    <Form.Control type="number" min = '1' value={quantity} onChange={handleQuantityChange3} />
                  </Col>
                </Form.Group>
              </Form>
              <hr />
              <Button onClick={handleAddToCart3}>Добавить в корзину</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} className='mb-3'>
          <Card style={cardStyle}>
            <Card.Img variant="top" src="https://prochepetsk.ru/userfiles/picfullsize/img-20587-15857242149398.jpg" />
            <Card.Body>
              <Card.Title>Чебурек</Card.Title>
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">Количество:</Form.Label>
                  <Col sm="8">
                    <Form.Control type="number" min = '1' value={quantity} onChange={handleQuantityChange4} />
                  </Col>
                </Form.Group>
              </Form>
              <hr />
              <Button onClick={handleAddToCart4}>Добавить в корзину</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Products;