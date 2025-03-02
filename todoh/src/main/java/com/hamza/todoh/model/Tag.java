package com.hamza.todoh.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "_tags")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Tag {

    private Integer id_tag;
    private String name;


}
