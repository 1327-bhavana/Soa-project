package com.buildasset.backend.service;

import com.buildasset.backend.entity.Rental;
import com.buildasset.backend.repository.RentalRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RentalService {

    private final RentalRepository rentalRepository;

    public RentalService(RentalRepository rentalRepository) {
        this.rentalRepository = rentalRepository;
    }

    // Get all rentals
    public List<Rental> getAllRentals() {
        return rentalRepository.findAll();
    }

    // Get rental by ID
    public Optional<Rental> getRentalById(Long id) {
        return rentalRepository.findById(id);
    }

    // Create rental
    public Rental createRental(Rental rental) {
        return rentalRepository.save(rental);
    }

    // Update rental
    public Rental updateRental(Long id, Rental rentalDetails) {

        Rental rental = rentalRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Rental not found"));

        rental.setEquipmentId(rentalDetails.getEquipmentId());
        rental.setCustomerName(rentalDetails.getCustomerName());
        rental.setCustomerEmail(rentalDetails.getCustomerEmail());
        rental.setStartDate(rentalDetails.getStartDate());
        rental.setEndDate(rentalDetails.getEndDate());
        rental.setTotalAmount(rentalDetails.getTotalAmount());
        rental.setStatus(rentalDetails.getStatus());

        return rentalRepository.save(rental);
    }

    // Delete rental
    public void deleteRental(Long id) {
        rentalRepository.deleteById(id);
    }
}