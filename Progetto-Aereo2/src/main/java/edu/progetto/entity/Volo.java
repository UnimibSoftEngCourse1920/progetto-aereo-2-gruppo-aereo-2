package edu.progetto.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Volo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Integer id;
	private Date dataPartenza;
	private String aeroportoP;
	private String aeroportoD;
	private int numPostiDisponibili;
	
	public Volo() {
	}
	
	public Volo(Date dataPartenza, String aeroportoP, String aeroportoD, int numPostiDisponibili) {
		this.dataPartenza = dataPartenza;
		this.aeroportoP = aeroportoP;
		this.aeroportoD = aeroportoD;
		this.numPostiDisponibili = numPostiDisponibili;
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Date getDataPartenza() {
		return dataPartenza;
	}
	public void setDataPartenza(Date dataPartenza) {
		this.dataPartenza = dataPartenza;
	}
	public String getAeroportoP() {
		return aeroportoP;
	}
	public void setAeroportoP(String aeroportoP) {
		this.aeroportoP = aeroportoP;
	}
	public String getAeroportoD() {
		return aeroportoD;
	}
	public void setAeroportoD(String aeroportoD) {
		this.aeroportoD = aeroportoD;
	}
	public int getNumPostiDisponibili() {
		return numPostiDisponibili;
	}
	public void setNumPostiDisponibili(int numPostiDisponibili) {
		this.numPostiDisponibili = numPostiDisponibili;
	}
	
	
	
	
	
	
	
}
