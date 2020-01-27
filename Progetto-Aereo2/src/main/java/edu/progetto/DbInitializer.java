package edu.progetto;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import edu.progetto.cliente.Cliente;
import edu.progetto.cliente.ClienteRepository;
import edu.progetto.volo.Volo;
import edu.progetto.volo.VoloRepository;

@Component
@ConditionalOnProperty(name = "app.db-init", havingValue = "true")
public class DbInitializer implements CommandLineRunner {
	
	private VoloRepository voloRepo;
	private ClienteRepository clienteRepo;
	
	@Autowired
	private PasswordEncoder bcryptoEncoder;

	public DbInitializer(VoloRepository voloRepo, ClienteRepository clienteRepo) {
		this.voloRepo = voloRepo;
		this.clienteRepo = clienteRepo;
	}


	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		this.clienteRepo.deleteAll();
		this.voloRepo.deleteAll();
		
		Date data = new Date();
		
		Cliente cliente1 = new Cliente("Oleg","Stoianov","oleg.stoianov@babbo.it","oleghinho",bcryptoEncoder.encode("123456"));
		Cliente cliente2 = new Cliente("Lorenzo","Nosotti","lollo.noso@babbo.it","lollonoso",bcryptoEncoder.encode("4321"));
		
		Volo volo1 = new Volo("AFG8D",data,"Milano","Roma", 100);
		Volo volo2 = new Volo("B32FS",data,"Roma","Milano", 100);
		
		
		this.clienteRepo.save(cliente1);
		this.clienteRepo.save(cliente2);
		
		this.voloRepo.save(volo1);
		this.voloRepo.save(volo2);
		
	}
	
	

}
