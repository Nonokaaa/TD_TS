import { Adresse } from "./adresse";
import { personne } from "./personne";
import { Enseignant } from "./enseignant";

let adr1: Adresse = new Adresse("rue de Paris", "75000", "Paris");
let adr2: Adresse = new Adresse("rue de Rome", "13000", "Marseille");
let p1: personne = new personne("Dupont", "Jean", adr1);
let p2: personne = new personne("Durand", "Paul", adr2);
let e1: Enseignant = new Enseignant("Martin", "Luc", adr2, "Maths", "Professeur");
let e2: Enseignant = new Enseignant("Dubois", "Marc", adr1, "Physique", "Professeur");

let liste: Array<personne> = new Array<personne>();
liste.push(e1, e2);

for(let Enseignant of liste){
    console.log(Enseignant.getFullInfos());
}