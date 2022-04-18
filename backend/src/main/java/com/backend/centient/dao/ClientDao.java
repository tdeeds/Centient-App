package com.backend.centient.dao;

import com.backend.centient.model.Client;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ClientDao {

    int insertClient(UUID id, Client client);

    default int insertClient(Client client) {
        UUID id = UUID.randomUUID();
        return insertClient(id, client);
    }

    List<Client> selectAllClients();

    Optional<Client> selectClientByID(UUID id);

    int deleteClientById(UUID id);

    int updateClientById(UUID id, Client client);
}