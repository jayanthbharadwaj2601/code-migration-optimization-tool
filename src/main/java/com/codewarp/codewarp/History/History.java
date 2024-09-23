package com.codewarp.codewarp.History;

import jakarta.annotation.Generated;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class History {
    @Id
    @GeneratedValue
    public int id;
    @Column
    public String requesttype;
    @Column
    public String sourcelang;
    @Column
    public String targetlang;
    @Column
    @Lob
    public String sourceval;
    @Column
    @Lob
    public String targetval;
    @Column
    public String username;
}
