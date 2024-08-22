import { StyleSheet } from 'react-native';
import { Card, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

export function ChampDisplay(props) {

  return (
    
    <Card style={{ width: '20rem', margin: '2rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Release Date: {props.release}</ListGroup.Item>
        <ListGroup.Item>By or Featuring JID</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
