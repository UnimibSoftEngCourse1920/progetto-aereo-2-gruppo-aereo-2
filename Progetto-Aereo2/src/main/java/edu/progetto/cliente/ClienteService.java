package edu.progetto.cliente;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	
	public List<Cliente> getAllclienti() {
		List<Cliente> clienti= new ArrayList<Cliente>();
		for (Cliente c : clienteRepository.findAll()){
			clienti.add(c);
		}
		return clienti;
	}

	public Optional<Cliente> getCliente(Integer id) {
		return clienteRepository.findById(id);
	}

	public void addCliente(Cliente c) {
		clienteRepository.save(c);
	}

	public void updateCliente(Integer id, Cliente c) {
		clienteRepository.save(c);
	}
	
	public void deleteCliente(Integer id) {
		clienteRepository.deleteById(id);
	}
	
}

