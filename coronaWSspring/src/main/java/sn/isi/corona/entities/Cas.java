package sn.isi.corona.entities;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Cas {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(length = 200)
    private String ville;
    @Column(length = 200)
    private String quartier;
    @Temporal(TemporalType.DATE)
    private Date date;

    public Cas() {
    }

    public Cas(int id, String ville, String quartier, Date date) {
        this.id = id;
        this.ville = ville;
        this.quartier = quartier;
        this.date = date;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public String getQuartier() {
        return quartier;
    }

    public void setQuartier(String quartier) {
        this.quartier = quartier;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
