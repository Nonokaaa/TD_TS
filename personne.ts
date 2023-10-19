import { Adresse } from "./adresse";

export class personne{
    private nom: string;
    private prenom: string;
    private adresse: Adresse;

    constructor(nom: string, prenom: string, adresse: Adresse){
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
    }

    public getNom(): string{
        return this.nom;
    }
    public getPrenom(): string{
        return this.prenom;
    }
    public getAdresse(): string{
        return this.adresse.getFullAdresse();
    }
    public setAdresse(adresse: Adresse): any{
        this.adresse = adresse;
    }
    public getFullInfos(): string{
        return "nom : " + this.prenom + " " + this.nom + " adresse : " + this.adresse.getFullAdresse();
    }
}