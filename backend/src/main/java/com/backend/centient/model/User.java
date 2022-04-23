package com.backend.centient.model;

import javax.persistence.*;
import java.util.Set;


@Entity
@Table(name = "users", uniqueConstraints = {
@UniqueConstraint(columnNames = {"username"}),
@UniqueConstraint(columnNames = {"email"})
})
public class User {

    private final UUID id;

    private final String name;

    public Client(@JsonProperty("id") UUID id,
                  @JsonProperty("name") String name) {
        this.id = id;
        this.name = name;
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
