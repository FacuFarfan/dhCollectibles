const fs = require("fs");

function importar(marca) {
    const figura = JSON.parse(fs.readFileSync("./datos/figuras" + marca + ".json", "utf8"));
    return figura;
}

module.exports = importar;