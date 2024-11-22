import React from 'react';
import { Table, Button } from 'react-bootstrap';

const TemperatureTable = ({ temperatures, handleEdit, handleDelete }) => {
  return (
    <div className="mt-4">
      <h3>Temperature Records</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Sensor ID</th>
            <th>Temperature (°C)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {temperatures.map((temp) => (
            <tr key={temp.sensorId}>
              <td>{temp.sensorId}</td>
              <td>{temp.valueTemp}°C</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => handleEdit(temp)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(temp.sensorId)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TemperatureTable;