import Havainto from './Havainto'

class Lintu {
    constructor(name, latinName, migrates, spread, rarity){
        this.name = name;
        this.latinName = latinName;
        this.migrates = migrates;
        this.spread = spread; //Levenneisyys on teksti muodossa oikeasti olisi kartta
        this.rarity = rarity;
        this.havainnot = [];
    }

    static addHavainto(havainto) {
        this.havainnot.push(havainto);
    }
}