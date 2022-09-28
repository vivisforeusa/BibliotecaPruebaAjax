package com.prestamos.Biblioteca.Controlador;

import com.prestamos.Biblioteca.Entidades.Libro;
import com.prestamos.Biblioteca.Servicios.libroServicio;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class libroControlador {
     private libroServicio servicio;

    public libroControlador(libroServicio servicio) {
        this.servicio = servicio;
    }

   /* @GetMapping("/")
    public String inicio(){
        return "index";
    }*/

    @GetMapping("/ListarLibros")
    public List<Libro> listar(){
        return servicio.listaLibros();
    }

    @PostMapping("/AgregarLibro")
    public Libro agregarLibro(@RequestBody Libro libro) {
        return this.servicio.agregarLibro(libro);
    }


    }
