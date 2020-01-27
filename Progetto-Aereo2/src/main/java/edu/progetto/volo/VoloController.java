package edu.progetto.volo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin()
@RestController
public class VoloController {
	
	
	@Autowired
	VoloService voloService;
	
	
	@RequestMapping("/voli")
	public List<Volo> getAllVoli(){
		return voloService.getAllvoli();
	}
	
	@RequestMapping("/voli/{id}")
	public Optional<Volo> getVolo(@PathVariable String id)
	{
		return voloService.getVolo(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/voli")
	public void addVolo(@RequestBody Volo v) {
		voloService.addVolo(v);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/voli/{id}")
	public void updateVolo(@RequestBody Volo v, String id) {
		voloService.updateVolo(id,v);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/voli/{id}")
	public void deleteVolo(@PathVariable String id) {
		voloService.deleteVolo(id);
	}

}
