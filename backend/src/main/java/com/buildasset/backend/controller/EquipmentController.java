package com.buildasset.backend.controller;

import com.buildasset.backend.entity.Equipment;
import com.buildasset.backend.service.EquipmentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/equipment")
@CrossOrigin(origins = "http://localhost:5173")
public class EquipmentController {

    private final EquipmentService equipmentService;

    public EquipmentController(EquipmentService equipmentService) {
        this.equipmentService = equipmentService;
    }

    // Get all equipment
    @GetMapping
    public List<Equipment> getAllEquipment() {
        return equipmentService.getAllEquipment();
    }

    // Get equipment by ID
    @GetMapping("/{id}")
    public ResponseEntity<Equipment> getEquipmentById(
            @PathVariable Long id) {

        return equipmentService.getEquipmentById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Add new equipment
    @PostMapping
    public Equipment createEquipment(
            @RequestBody Equipment equipment) {

        return equipmentService.createEquipment(equipment);
    }

    // Update equipment
    @PutMapping("/{id}")
    public ResponseEntity<Equipment> updateEquipment(
            @PathVariable Long id,
            @RequestBody Equipment equipmentDetails) {

        try {
            Equipment updatedEquipment =
                    equipmentService.updateEquipment(id, equipmentDetails);

            return ResponseEntity.ok(updatedEquipment);

        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete equipment
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEquipment(
            @PathVariable Long id) {

        equipmentService.deleteEquipment(id);

        return ResponseEntity.noContent().build();
    }
}