package com.buildasset.backend.service;

import com.buildasset.backend.entity.Equipment;
import com.buildasset.backend.repository.EquipmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EquipmentService {

    private final EquipmentRepository equipmentRepository;

    public EquipmentService(EquipmentRepository equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }

    // Get all equipment
    public List<Equipment> getAllEquipment() {
        return equipmentRepository.findAll();
    }

    // Get equipment by ID
    public Optional<Equipment> getEquipmentById(Long id) {
        return equipmentRepository.findById(id);
    }

    // Add new equipment
    public Equipment createEquipment(Equipment equipment) {
        return equipmentRepository.save(equipment);
    }

    // Update equipment
    public Equipment updateEquipment(Long id, Equipment equipmentDetails) {

        Equipment equipment = equipmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Equipment not found"));

        equipment.setName(equipmentDetails.getName());
        equipment.setType(equipmentDetails.getType());
        equipment.setModel(equipmentDetails.getModel());
        equipment.setStatus(equipmentDetails.getStatus());
        equipment.setRentalPrice(equipmentDetails.getRentalPrice());
        equipment.setLocation(equipmentDetails.getLocation());

        return equipmentRepository.save(equipment);
    }

    // Delete equipment
    public void deleteEquipment(Long id) {
        equipmentRepository.deleteById(id);
    }
}