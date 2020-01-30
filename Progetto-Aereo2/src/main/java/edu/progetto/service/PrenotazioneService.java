package edu.progetto.service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.progetto.entity.Cliente;
import edu.progetto.entity.Prenotazione;
import edu.progetto.repository.PrenotazioneRepository;

@Service
public class PrenotazioneService {
	
	@Autowired
	private PrenotazioneRepository prenotazioneRepo;
	
	@Autowired
	private ClienteService clienteService;
	
	
	public List<Prenotazione> getAllPrenotazioniByCliente(String username){
		Cliente cliente = clienteService.getClienteByUsername(username);
		return prenotazioneRepo.findByCliente(cliente);
	}
	
	public Prenotazione getPrenotazione(Integer id) {
		return prenotazioneRepo.findById(id)
				.orElseThrow(() -> new EntityNotFoundException());
	}
	
	public void addPrenotazione(Prenotazione prenotazione) {
		prenotazioneRepo.save(prenotazione);
	}
	
	
	public void updatePrenotazione(Integer id, Prenotazione prenotazione) {
		prenotazioneRepo.save(prenotazione);
	}
	

	

}
