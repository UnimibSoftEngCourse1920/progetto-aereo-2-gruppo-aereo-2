package edu.progetto.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.progetto.entity.Volo;
import edu.progetto.repository.VoloRepository;

@Service
public class VoloService {

	@Autowired
	private VoloRepository voloRepository;
	
	
	public List<Volo> getAllvoli() {
		List<Volo> voli= new ArrayList<Volo>();
		for (Volo v : voloRepository.findAll()){
			voli.add(v);
			System.out.println(v);
		}
		return voli;
	}

	public Volo getVolo(Integer id) {
		return voloRepository.findById(id)
				.orElseThrow(() -> new EntityNotFoundException());
	}

	public void addVolo(Volo v) {
		voloRepository.save(v);
	}

	public void updateVolo(Integer id, Volo v) {
		voloRepository.save(v);
	}
	
	public void deleteVolo(Integer id) {
		voloRepository.deleteById(id);
	}
	
	

}
