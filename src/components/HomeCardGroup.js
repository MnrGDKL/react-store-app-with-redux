import React from 'react'
import { CardGroup, Card, Button } from 'react-bootstrap'
import Q1 from '../utilities/Q1.jpg'
import Q2 from '../utilities/Q2.jpg';
import loadingImg from "../utilities/loading.gif";
import Q3 from '../utilities/Q3.jpg'
import { Link } from 'react-router-dom'

const HomeCardGroup = ({ data, loading }) => {
  const Loading = () => {
    return <div><img src={loadingImg} alt="" /></div>
  }

  const Compos = () => {
    return (
      <CardGroup className="justify-content-center">
        <Card
          className="mx-2 text-center shadow-lg"
          style={{ maxWidth: '400px' }}
        >
          <Card.Img variant="bottom" src={Q1} style={{ maxHeight: '250px' }} />
          <Card.Body className="cardbody">
            <Card.Title>{data[0].category}</Card.Title>
            <Card.Text></Card.Text>
            <Button as={Link} to="/react-store-app-with-redux/man" variant="outline-warning">
              Shop GO
            </Button>
          </Card.Body>
        </Card>

        <Card
          className="mx-2 text-center shadow-lg"
          style={{ maxWidth: '400px' }}
        >
          <Card.Img
            variant="top"
            src={data[10].image}
            style={{ maxHeight: '250px' }}
          />
          <Card.Body className="cardbody">
            <Card.Title>{data[10].category}</Card.Title>
            <Card.Text></Card.Text>
            <Button as={Link} to="/react-store-app-with-redux/elect" variant="outline-warning">
              Shop GO
            </Button>
          </Card.Body>
        </Card>
        <Card
          className="mx-2 text-center shadow-lg"
          style={{ maxWidth: '400px' }}
        >
          <Card.Img variant="top" src={Q3} style={{ maxHeight: '250px' }} />
          <Card.Body className="cardbody">
            <Card.Title>{data[17].category}</Card.Title>
            <Card.Text>
              <Button as={Link} to="/react-store-app-with-redux/women" variant="outline-warning">
                Shop GO
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    )
  }

  return <div className="cardGroup">{loading ? <Compos /> : <Loading />}</div>
}

export default HomeCardGroup
