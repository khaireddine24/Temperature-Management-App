package com.temp.Entites;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="temperatures")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TemperatureRs {
    @Id
    private String sensorId;
    private double valueTemp;
}