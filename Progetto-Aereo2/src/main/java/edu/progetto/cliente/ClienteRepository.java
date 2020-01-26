package edu.progetto.cliente;

import org.springframework.data.repository.CrudRepository;

public interface ClienteRepository extends CrudRepository<Cliente,Integer>{
	public Cliente findByUsername(String username);
}
