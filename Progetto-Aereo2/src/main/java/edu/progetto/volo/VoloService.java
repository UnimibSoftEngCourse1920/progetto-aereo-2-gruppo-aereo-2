package edu.progetto.volo;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VoloService {

	@Autowired
	private VoloRepository voloRepository;
	
	
	public List<Volo> getAllvoli() {
		List<Volo> voli= new ArrayList<Volo>();
		for (Volo v : voloRepository.findAll()){
			voli.add(v);
		}
		return voli;
	}

	public Optional<Volo> getVolo(String id) {
		return voloRepository.findById(id);
	}

	public void addVolo(Volo v) {
		voloRepository.save(v);
	}

	public void updateVolo(String id, Volo v) {
		voloRepository.save(v);
	}
	
	public void deleteVolo(String id) {
		voloRepository.deleteById(id);
	}
	
	

}
