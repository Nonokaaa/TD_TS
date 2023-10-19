export class Adresse{
    private rue: string;
    private cp: string;
    private ville: string;

    constructor(rue: string, cp: string, ville: string){
        this.rue = rue;
        this.cp = cp;
        this.ville = ville;
    }

    public getRue(): string{
        return this.rue;
    }
    public getCp(): string{
        return this.cp;
    }
    public getVille(): string{
        return this.ville;
    }
    public setRue(rue: string): any{
        this.rue = rue;
    }
    public setCp(cp: string): any{
        this.cp = cp;
    }
    public setVille(ville: string): any{
        this.ville = ville;
    }
    public getFullAdresse(): string{
        return "Vous vivez dans " + this.rue + " à " + this.ville + " " + this.cp;
    }
}