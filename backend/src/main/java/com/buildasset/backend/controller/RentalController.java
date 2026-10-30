package com.buildasset.backend.controller;

import com.buildasset.backend.entity.Rental;
import com.buildasset.backend.service.RentalService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rentals")
@CrossOrigin(origins = "http://localhost:5173")
public class RentalController {

    private final RentalService rentalService;

    public RentalController(RentalService rentalService) {
        this.rentalService = rentalService;
    }

    // Get all rentals
    @GetMapping
    public List<Rental> getAllRentals() {
        return rentalService.getAllRentals();
    }

    // Get rental by ID
    @GetMapping("/{id}")
    public ResponseEntity<Rental> getRentalById(
            @PathVariable Long id) {

        return rentalService.getRentalById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Create rental
    @PostMapping
    public Rental createRental(
            @RequestBody Rental rental) {

        return rentalService.createRental(rental);
    }

    // Update rental
    @PutMapping("/{id}")
    public ResponseEntity<Rental> updateRental(
            @PathVariable Long id,
            @RequestBody Rental rentalDetails) {

        try {

            Rental updatedRental =
                    rentalService.updateRental(id, rentalDetails);

            return ResponseEntity.ok(updatedRental);

        } catch (RuntimeException e) {

            return ResponseEntity.notFound().build();
        }
    }

    // Delete rental
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRental(
            @PathVariable Long id) {

        rentalService.deleteRental(id);

        return ResponseEntity.noContent().build();
    }
}