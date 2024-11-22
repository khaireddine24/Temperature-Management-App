package com.temp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.temp.Entites.TemperatureRs;
import com.temp.service.TemperatureService;

@RestController
@RequestMapping("/temperature")
@CrossOrigin(origins = "http://localhost:3000")
public class TemperatureController {

    @Autowired
    private TemperatureService temperatureService;

    @PostMapping("addTemp")
    public ResponseEntity<TemperatureRs> createTemperature(@RequestBody TemperatureRs temperature) {
        TemperatureRs savedTemp = temperatureService.saveTemp(temperature);
        return new ResponseEntity<>(savedTemp, HttpStatus.CREATED);
    }

    @GetMapping("/getall")
    public ResponseEntity<List<TemperatureRs>> getAllTemperatures() {
        List<TemperatureRs> temperatures = temperatureService.getAllTemp();
        return new ResponseEntity<>(temperatures, HttpStatus.OK);
    }

    @GetMapping("/{sensorId}")
    public ResponseEntity<TemperatureRs> getTemperatureById(@PathVariable String sensorId) {
        try {
            TemperatureRs temperature = temperatureService.getTemp(sensorId);
            return new ResponseEntity<>(temperature, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{sensorId}")
    public ResponseEntity<TemperatureRs> updateTemperature(
            @PathVariable String sensorId,
            @RequestBody TemperatureRs temperature) {
        try {
            temperature.setSensorId(sensorId);
            TemperatureRs updatedTemp = temperatureService.updateTemp(temperature);
            return new ResponseEntity<>(updatedTemp, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{sensorId}")
    public ResponseEntity<Void> deleteTemperature(@PathVariable String sensorId) {
        try {
            temperatureService.deleteTempById(sensorId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
