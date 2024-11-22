package com.temp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.temp.Entites.TemperatureRs;

public interface TemperatureRepo extends JpaRepository<TemperatureRs,String> {

}
