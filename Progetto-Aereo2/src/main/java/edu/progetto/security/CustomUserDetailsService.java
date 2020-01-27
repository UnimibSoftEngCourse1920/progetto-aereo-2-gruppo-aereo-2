package edu.progetto.security;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import edu.progetto.cliente.Cliente;
import edu.progetto.cliente.ClienteRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private ClienteRepository clienteRepo;
	
	@Autowired
	private PasswordEncoder bcryptEncoder;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Cliente cliente = clienteRepo.findByUsername(username);
		 if(cliente == null) {
	        	throw new UsernameNotFoundException("username not found");
	        }

	        UserDetails userDetails = new org.springframework.security.core.userdetails.User(cliente.getUsername(), cliente.getPassword(), new ArrayList<>());
	        return userDetails;
	}

	public Cliente save(Cliente cliente) {
		Cliente nuovoCliente = new Cliente();
		nuovoCliente.setUsername(cliente.getUsername());
		nuovoCliente.setEmail(cliente.getEmail());
		nuovoCliente.setNome(cliente.getNome());
		nuovoCliente.setCognome(cliente.getCognome());
		nuovoCliente.setPassword(bcryptEncoder.encode(cliente.getPassword()));
		return clienteRepo.save(nuovoCliente);
	}

}
