$(function () {
    const szuloElem = $("article");
    const sablonElem = $(".karta");
    const meret = 3;

    const kivalasztottKartyaTomb = [];

    for (let index = 0; index < meret; index++) {
        for (let k = 0; k < 2; k++) {
            const ujElem = sablonElem.clone().appendTo(szuloElem);
            const kartya = new Kartya("kepek/kep" + (index + 1) + ".jpg", ujElem);

        }


    }

    sablonElem.remove();

    //itt tudjuk számolni hogy hány kártya van felforditva
    $(window).on("kartyaKattintas", (event) => {
        console.log(event.detail);//aktuális kártya adata

        //az,amelyik kiválasztotta az eseményt.
        kivalasztottKartyaTomb.push(event.detail);

        //akkor van két kártya felforditva ha tömb hossza 2
        if (kivalasztottKartyaTomb.length == 2) {
            if (kivalasztottKartyaTomb[0].faljnev == kivalasztottKartyaTomb[1].faljnev) {
                console.log("egyforma");
                //eltüntetni a kártyákat
                setTimeout(function () {
                    kivalasztottKartyaTomb[0].eletuntet();
                    kivalasztottKartyaTomb[1].eletuntet();

                    kivalasztottKartyaTomb[0].atvalt();
                    kivalasztottKartyaTomb[1].atvalt();
                    kivalasztottKartyaTomb.splice(0, 2);

                }, 1000);

            } else {
                console.log(" NEM egyforma");
                kivalasztottKartyaTomb.splice(0, 2);

            }
            
        }
    });

});