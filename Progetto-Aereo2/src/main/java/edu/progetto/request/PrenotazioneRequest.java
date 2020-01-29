package edu.progetto.request;

import java.io.Serializable;

public class PrenotazioneRequest implements Serializable{

	private static final long serialVersionUID = -4463541949897166232L;
	
	private Integer clienteId;
	private Integer voloId;
	
	//need default constructor for JSON Parsing
	public PrenotazioneRequest() {
		
	}
	
	public PrenotazioneRequest(Integer clienteId, Integer voloId) {
		this.clienteId = clienteId;
		this.voloId = voloId;
	}
	
	
//	public Integer getNumBiglietti() {
//		return numBiglietti;
//	}
//	public void setNumBiglietti(Integer numBiglietti) {
//		this.numBiglietti = numBiglietti;
//	}
	public Integer getVoloId() {
		return voloId;
	}
	public void setVoloId(Integer voloId) {
		this.voloId = voloId;
	}
	public Integer getClienteId() {
		return clienteId;
	}
	public void setClienteId(Integer clienteId) {
		this.clienteId = clienteId;
	}

	
}
