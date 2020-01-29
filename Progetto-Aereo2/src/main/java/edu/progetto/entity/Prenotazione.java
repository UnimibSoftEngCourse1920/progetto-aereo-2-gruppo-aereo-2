package edu.progetto.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Prenotazione {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Integer id;
	@ManyToOne
	private Volo volo;
	@ManyToOne
	private Cliente cliente;

	public Prenotazione(Volo volo, Cliente cliente) {
		this.volo = volo;
		this.cliente = cliente;
	}
	
	public Prenotazione() {
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Volo getVolo() {
		return volo;
	}

	public void setVolo(Volo volo) {
		this.volo = volo;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}
	
	
	
	
	
}
