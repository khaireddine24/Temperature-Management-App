package com.temp.service;

import java.util.List;

import com.temp.Entites.TemperatureRs;

public interface TemperatureService {
	TemperatureRs saveTemp(TemperatureRs t);
	TemperatureRs updateTemp(TemperatureRs t);
	void deleteTemp(TemperatureRs t);
	void deleteTempById(String sensorId);
	TemperatureRs getTemp(String sensorId);
	List<TemperatureRs> getAllTemp();
}
