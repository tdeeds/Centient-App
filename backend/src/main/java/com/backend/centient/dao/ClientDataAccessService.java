package com.backend.centient.dao;

import com.backend.centient.model.Client;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("postgres")
public class ClientDataAccessService implements ClientDao{
    @Override
    public int insertClient(UUID id, Client client) {
        return 0;
    }

    @Override
    public List<Client> selectAllClients() {
        return List.of(new Client(UUID.randomUUID(),"FROM POSTGRES DB"));
    }

    @Override
    public Optional<Client> selectClientByID(UUID id) {
        return Optional.empty();
    }

    @Override
    public int deleteClientById(UUID id) {
        return 0;
    }

    @Override
    public int updateClientById(UUID id, Client client) {
        return 0;
    }
}