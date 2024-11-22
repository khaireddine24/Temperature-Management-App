import React from 'react';
import { Card } from 'react-bootstrap';

const TemperatureStats = ({ sum }) => (
  <Card>
    <Card.Body>
      <Card.Title>Total Statistics</Card.Title>
      <Card.Text>Total Temperature (°C): {sum}</Card.Text>
    </Card.Body>
  </Card>
);

export default TemperatureStats;
