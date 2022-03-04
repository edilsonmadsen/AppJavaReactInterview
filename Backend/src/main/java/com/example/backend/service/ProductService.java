package com.example.backend.service;

import com.example.backend.model.Product;
import com.example.backend.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    public Product save(Product product){
        return  repository.save(product);
    }

    public List<Product>  saveAllProducts(List<Product> product){
        return  repository.saveAll(product);
    }

    public Product getProductsById(int id) {
        return repository.findById(id).orElse(null);
    }

    public List<Product> getProductsByCategory(String category) {
        return repository.findByCategory(category);
    }

    public List<Product> getProducts() {
        return repository.findAll();
    }
}
