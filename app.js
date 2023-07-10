const importar = require("./collectibles.js")

const hotToys = importar("1");
const bandai = importar("2");
const starWars = importar("3");

const unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

const collectibles ={
    figuras: unifiedCollectibles,
    listFigures(){
        this.figuras.forEach(figura => {
            console.log("Marca:" + figura.marca);
            console.log("Nombre:" + figura.nombre);
            console.log("Precio:" + figura.precio);
            console.log("Stock:" + figura.stock);
            console.log("----------------------");
    });
    },
    figuresByBrand(marca) {
        return this.figuras.filter(figura => figura.marca === marca);
    }
};
console.log(collectibles.listFigures());
console.log(collectibles.figuresByBrand("Star Wars"));