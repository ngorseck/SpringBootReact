package sn.isi.corona;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import sn.isi.corona.dao.ICas;
import sn.isi.corona.entities.Cas;

import java.text.SimpleDateFormat;
import java.util.Date;

@SpringBootApplication
public class CoronaApplication implements CommandLineRunner {

	@Autowired
	private ICas casdao;
	public static void main(String[] args) {
		SpringApplication.run(CoronaApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		Cas cas = new Cas();
		cas.setVille("Test ville");
		cas.setQuartier("Test quartier");

		Date date = null;
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		date = sdf.parse("2020-04-28");
		cas.setDate(date);

		//casdao.save(cas);

		casdao.findAll().forEach(c -> System.out.println(c.getVille()));
	}
}
