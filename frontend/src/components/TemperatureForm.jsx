import React from 'react';
import { Form, Button } from 'react-bootstrap';

const TemperatureForm = ({ 
  formData, 
  editMode, 
  handleInputChange, 
  handleSubmit, 
  handleCancelEdit 
}) => {
  return (
    <div className="p-3 border rounded">
      <h3>{editMode ? 'Edit Temperature' : 'Add New Temperature'}</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Sensor ID</Form.Label>
          <Form.Control
            type="text"
            name="sensorId"
            value={formData.sensorId}
            onChange={handleInputChange}
            placeholder="Enter sensor ID"
            required
            disabled={editMode}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Temperature Value</Form.Label>
          <Form.Control
            type="number"
            step="0.1"
            name="valueTemp"
            value={formData.valueTemp}
            onChange={handleInputChange}
            placeholder="Enter temperature value"
            required
          />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="primary" type="submit">
            {editMode ? 'Update Temperature' : 'Add Temperature'}
          </Button>
          {editMode && (
            <Button variant="secondary" onClick={handleCancelEdit}>
              Cancel Edit
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
};

export default TemperatureForm;