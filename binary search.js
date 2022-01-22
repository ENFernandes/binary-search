var array = [1, 5, 7, 8, 9, 10, 11, 12, 13];
var pAct = Math.round((1 + array.length) / 2);
var pMax = array.length;
var pMin = 0;
var aux;
var entrada = 13;

function busca(coisa) {
    console.log(pAct);
        if (array[pAct] == coisa) {
            return console.log(`O numero esta na possição ${pAct}`);
        }
        else if (coisa < array[pAct]) {
            pMax = pAct;
            aux = Math.round((pMax - pMin) / 2);
            pAct = pAct - aux;
            
            busca(entrada);
        }
        else if (coisa > array[pAct]) {
            pMin = pAct;
            aux = Math.round((pMax - pAct) / 2);
            pAct = pAct + aux;
            busca(entrada);
        }
    

}
busca(entrada);

