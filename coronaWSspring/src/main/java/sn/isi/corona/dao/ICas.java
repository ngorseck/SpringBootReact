package sn.isi.corona.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import sn.isi.corona.entities.Cas;

import java.util.List;

@Repository
public interface ICas extends JpaRepository<Cas, Integer> {

    @Query("select c from Cas c where c.ville = :ville")
    public List<Cas> getAllCasByVille(@Param("ville") String ville);

    @Query("select c from Cas c where c.quartier = :quartier")
    public List<Cas> getAllCasByQuartier(@Param("quartier") String quartier);

    @Query("select c from Cas c where c.id = :id")
    public Cas getById(@Param("id") int id);

}
