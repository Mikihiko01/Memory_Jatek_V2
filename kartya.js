class Kartya {
    constructor(faljnev, elem) {
        this.elem = elem;//aktuális div elem
        this.faljnev = faljnev;
        //console.log(faljnev);
        //az img elem ,akkor elem.atrr("src", faljnev);
        this.kepElem = elem.children("img");
        //az aktuális div elemunk kép eleme lesz 
        this.kepElem.attr("src", this.faljnev);

        this.allapot = false;//kezdetben a háttere látszik
        this.hatter = "kepek/hatter.jpg";
        this.setLap();
        //console.log(this);
        this.elem.on("click", () => {
            
            this.atvalt();
            this.KattintasTrigger();//ezzel váltom ki az eseményt

        });


    }

    atvalt(){
        this.allapot=!this.allapot;
        this.setLap();
        
    }

    setLap() {
        if (this.allapot) {
            this.kepElem.attr("src", this.faljnev);
        } else {
            this.kepElem.attr("src", this.hatter);
        }
    }
    KattintasTrigger(){
        //let esemeny = new Event("kartyaKattintas");
        let esemeny = new CustomEvent("kartyaKattintas",{detail:this});
        //úgy hozzunk létre eseményt hogy azt is meg mondjuk hogy melyik objektum váltottaki
       console.log("esemény kiváltva");
        window.dispatchEvent(esemeny);
    }

    eletuntet(){
        this.elem.css("visibility","hidden");
    }
}