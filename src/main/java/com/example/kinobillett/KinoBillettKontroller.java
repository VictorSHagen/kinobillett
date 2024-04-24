package com.example.kinobillett;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class KinoBillettKontroller {

    @Autowired
    KinoBillettRepository rep;

    @PostMapping("/lagre")
    public void lagreBillett (KinoBillett innKinoBillett){
        rep.lagreBillett(innKinoBillett);
    }
    @GetMapping("/hentAlle")
    public List<KinoBillett> hentAlle(){
        return rep.hentalle();
    }
    @GetMapping("/slettAlle")
    public void slettAlle(){
        rep.slettAlle();
    }
}
