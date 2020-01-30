package edu.progetto.request;

import java.io.Serializable;

public class PrenotazioneRequest implements Serializable{

	private static final long serialVersionUID = -4463541949897166232L;
	
	private String username;
	private Integer voloId;
	private Integer numBiglietti;
	
	//need default constructor for JSON Parsing
	public PrenotazioneRequest() {
		
	}
	
	public PrenotazioneRequest(String username, Integer voloId, Integer numBiglietti) {
		this.username = username;
		this.voloId = voloId;
		this.numBiglietti = numBiglietti;
	}
	
	
	public Integer getNumBiglietti() {
		return numBiglietti;
	}
	public void setNumBiglietti(Integer numBiglietti) {
		this.numBiglietti = numBiglietti;
	}
	public Integer getVoloId() {
		return voloId;
	}
	public void setVoloId(Integer voloId) {
		this.voloId = voloId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}

	
}
