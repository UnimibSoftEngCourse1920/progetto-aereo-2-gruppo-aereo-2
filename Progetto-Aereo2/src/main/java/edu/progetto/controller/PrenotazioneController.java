package edu.progetto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import edu.progetto.entity.Prenotazione;
import edu.progetto.request.PrenotazioneRequest;
import edu.progetto.response.PrenotazioneResponse;
import edu.progetto.service.ClienteService;
import edu.progetto.service.PrenotazioneService;
import edu.progetto.service.VoloService;

@CrossOrigin(origins = "*")
@RestController
public class PrenotazioneController {
	
	
	@Autowired
	PrenotazioneService prenotazioneService;
	
	@Autowired
	VoloService voloService;
	
	@Autowired
	ClienteService clienteService;
	
	
	@RequestMapping("/prenotazioni/{clienteId}")
	public List<Prenotazione> getAllPrenotazioni(@PathVariable Integer clienteId){
		return prenotazioneService.getAllPrenotazioniByCliente(clienteId);
	}
	
	@RequestMapping("/prenotazioni/mia/{prenotazioneId}")
	public Prenotazione getPrenotazione(@PathVariable Integer prenotazioneId)
	{
		return prenotazioneService.getPrenotazione(prenotazioneId);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/prenotazioni")
	public ResponseEntity<PrenotazioneResponse> addPrenotazione(@RequestBody PrenotazioneRequest prenotazioneReq) {
		Prenotazione p = new Prenotazione(voloService.getVolo(prenotazioneReq.getVoloId()),
				clienteService.getCliente(prenotazioneReq.getClienteId()));	
			prenotazioneService.addPrenotazione(p);			
			return ResponseEntity.ok(new PrenotazioneResponse(p.getId()));
	}
	
//	@RequestMapping(method=RequestMethod.PUT, value="/voli/{id}")
//	public void updateVolo(@RequestBody Volo v, String id) {
//		voloService.updateVolo(id,v);
//	}
//	
//	@RequestMapping(method=RequestMethod.DELETE, value="/voli/{id}")
//	public void deleteVolo(@PathVariable String id) {
//		voloService.deleteVolo(id);
//	}

}
