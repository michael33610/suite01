/*
    Ecrire une fonction "shoppingList",
    qui prend un paramètre un tableau de paniers;

    Un panier est un tableau de mots;

    La fonction retourne un objet contenant:
        - comme clef le nom du produit rencontré
        - comme valeur le nombre de fois qu'il à été rencontré

    Important -> l'ordre n'a aucune importance
*/

/*      Test 1
    Appel à la fonction "shoppingList",
    prenant en paramètre le tableau

    [
        ["orange", "orange", "kiwi", "ananas"],
        ["kiwi", "ananas", "banane", "prune"],
        ["orange", "orange", "orange", "orange"],
        ["orange", "orange", "kiwi", "kiwi"],
        ["prune", "banane", "pamplemousse", "ananas"]
    ]

    et nous attendons comme résultat

    {
        "orange": 8,
        "kiwi": 4,
        "ananas": 3,
        "prune": 2,
        "banane": 2,
        "pamplemousse": 1
    }

*/

shoppingList([
    ["orange", "orange", "kiwi", "ananas"],
    ["kiwi", "ananas", "banane", "prune"],
    ["orange", "orange", "orange", "orange"],
    ["orange", "orange", "kiwi", "kiwi"],
    ["prune", "banane", "pamplemousse", "ananas"]
]);

//  écrire votre code sous ce commentaire
/*
function shoppingList(param){
    var resultat={};
    for (i=0;i<param.length;i++){
        var tab=param[i];
        var fruitTrouve=false;
        for (j in tab){
            var fruit=tab[j];
            fruitTrouve=resultat.hasOwnProperty(fruit);
            if (fruitTrouve==true){
                var cpt=resultat[fruit]++;
            } else {   
                resultat[fruit]=1;
            }
        }
        //console.log(resultat);
    }
    return (resultat);
}*/

function shoppingList(param){
    var resultat={};
    for (i=0;i<param.length;i++){
        for (j=0;j<param[i].length;j++){
            if (resultat.hasOwnProperty(param[i][j])==true){
                resultat[param[i][j]]++;
            } else {
                resultat[param[i][j]]=1;
            }
        }
    }
    return (resultat);
}

console.log(shoppingList([
    ["orange", "orange", "kiwi", "ananas"],
    ["kiwi", "ananas", "banane", "prune"],
    ["orange", "orange", "orange", "orange"],
    ["orange", "orange", "kiwi", "kiwi"],
    ["prune", "banane", "pamplemousse", "ananas"]
]));

