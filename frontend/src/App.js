import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import TemperatureForm from './components/TemperatureForm';
import TemperatureStats from './components/TemperatureStats';
import TemperatureTable from './components/TemperatureTable';
import MessageAlert from './components/MessageAlert';

const App = () => {
  const [temperatures, setTemperatures] = useState([]);
  const [sum, setSum] = useState(0);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({ sensorId: '', valueTemp: '' });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const baseUrl = 'http://localhost:8081/temperature';

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/getall`);
      setTemperatures(response.data);
      const total = response.data.reduce((acc, curr) => acc + parseFloat(curr.valueTemp), 0);
      setSum(total);
    } catch (error) {
      showMessage('Error fetching data', 'danger');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage(''), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await axios.put(`${baseUrl}/${editId}`, formData);
        showMessage('Temperature updated successfully');
      } else {
        await axios.post(`${baseUrl}/addTemp`, formData);
        showMessage('Temperature added successfully');
      }
      setFormData({ sensorId: '', valueTemp: '' });
      setEditMode(false);
      setEditId(null);
      fetchData();
    } catch (error) {
      showMessage('Error processing request', 'danger');
    }
  };

  const handleDelete = async (sensorId) => {
    try {
      await axios.delete(`${baseUrl}/${sensorId}`);
      showMessage('Temperature deleted successfully');
      fetchData();
    } catch (error) {
      showMessage('Error deleting temperature', 'danger');
    }
  };

  const handleEdit = (temp) => {
    setFormData({ sensorId: temp.sensorId, valueTemp: temp.valueTemp });
    setEditMode(true);
    setEditId(temp.sensorId);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setFormData({ sensorId: '', valueTemp: '' });
  };

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Temperature Management System</h1>

      <MessageAlert message={message} />

      <Row className="mb-4">
        <Col md={6}>
          <TemperatureForm
            formData={formData}
            editMode={editMode}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            handleCancelEdit={handleCancelEdit}
          />
        </Col>

        <Col md={6}>
          <TemperatureStats sum={sum} />
        </Col>
      </Row>

      <TemperatureTable temperatures={temperatures} handleEdit={handleEdit} handleDelete={handleDelete} />
    </Container>
  );
};

export default App;
