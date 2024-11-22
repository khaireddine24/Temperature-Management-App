package com.temp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.temp.Entites.TemperatureRs;
import com.temp.repo.TemperatureRepo;

@Service
public class TemperatureServ implements TemperatureService {
	
	@Autowired
	TemperatureRepo temperatureRepo;
	

	@Override
	public TemperatureRs saveTemp(TemperatureRs t) {
		return temperatureRepo.save(t);
	}

	@Override
	public TemperatureRs updateTemp(TemperatureRs t) {
		return temperatureRepo.save(t);
	}

	@Override
	public void deleteTemp(TemperatureRs t) {
		temperatureRepo.delete(t);
		
	}

	@Override
	public void deleteTempById(String sensorId) {
		temperatureRepo.deleteById(sensorId);
		
	}

	@Override
	public TemperatureRs getTemp(String sensorId) {
		return temperatureRepo.findById(sensorId).get();
	}

	@Override
	public List<TemperatureRs> getAllTemp() {
		return temperatureRepo.findAll();
	}

}
