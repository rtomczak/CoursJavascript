let x; // Déclaration d'une variable x.

x = 0; // Maintenant la variable vaut zéro
x; // retourne sa valeur cad 0
console.log("x = "+ x);

// JavaScript supporte plusieurs types de variables
x = 1; // des entiers.
x = 0.01; // réels.
x = "hello world"; // chaîne de caractères entre des guillemets doubles
x = 'JavaScript'; // ou des simples
x = true; // valeur booléenne vrai
x = false; // ou faux
x = null; // null est une valeur spéciale qui signifie "pas de valeur" 
x = undefined; // Presque la même chose, non définie

// Au tour des tableaux
let prix = [212.5, 301, 125, 250]; // un tableau de valeurs délimités par []
prix[0] // retourne 212.5 cad le premier élément à l'indice 0 
console.log("prix[0] = "+ prix[0]);
prix[3] // retourne 250 le dernier élément à l'indice 3
console.log("prix[3] = "+prix[3]);
prix[prix.length-1] // Même résultat 
console.log("prix[prix.length-1] = " + prix[prix.length-1]);
prix.length // retourne 4 car le nombre d'éléments est 4.
console.log("prix.length = "+prix.length); 
prix[4] = 119; // Ajoute un nouvel élément.
prix // retourne  Array(4) [ 212.5, 301, 125, 250, 119 ]
console.log("prix = "+prix);
prix[4] = 0; // modification d'un éléments du tableau.
let tableauVide = []; // [] indique un tableau vide
tableauVide.length; // retourne 0
console.log("tableauVide.length = "+ tableauVide.length);
let tab = [1,"e"] // un tableau peut contenir différent types de données

// Dictionnaire = Object
// Les objects est une collection de paires nom/valeur comme en Python
// les objets se trouvent entre crochets {}
let ang2fr ={"one":"un"} ;
ang2fr["two"] = "deux"; // Ajout d'une paire nom/valeur
ang2fr; // Renvoie Object { one: "un", two: "deux" }
console.log("ang2fr = "+ang2fr)
ang2fr.one; // Renvoie "un"
console.log("ang2fr.one = "+ang2fr.one)
ang2fr.content = {}; // Le contenu est vidé

// Listes et dictionnaires
// Il est possible d'inclure des dictionnaires dans une liste
let pointsXY = [ // un tableau à deux dimensions
    {x:1, y:0},// l'élément est un object
    {x:10, y:10}
    ];
pointsXY[1] ;// Retourne Object { x: 10, y: 10 }
console.log("pointsXY[1] = "+pointsXY[1])
// Des dictionnaires de tableaux
let vecteurs = {
    vect1:[ [1,2] , [3,4] ],
      vect2:[ [3,4] , [5,4]]
  }; 

  vecteurs["vect1"] // Renvoie Array [ [1,2] , [3,4] ]
  console.log('vecteurs["vect1"] = '+ vecteurs["vect1"])
  vecteurs["vect"] = [ [11,12], [21,22]]; // Modifie le deuxième

// Calculs
3 + 2 ;// retourne 5: addition
3 - 2 ;// retourne 1: soustraction
3 * 2 ;// retourne 6: multiplication
3 / 2 ;// retourne 1.5: division
"3" + "2" ;// retourne Attention le résultat est "32"

// Les opérateurs d'incrémentation et de décrémentation
let compteur = 0; // Defini un compteur
compteur++; // Incrémente le compteur
compteur--; // Décrémente le compteur
compteur += 2; // ajoute 2 à la variable : idem compteur = compteur + 2;
compteur *= 3; // Multiplie par 3: idem compteur = compteur * 3;
compteur // retourne 6
console.log("compteur = "+ compteur)
// Condition booléenne
x = 1;
y = 2;
x === y ;// retourne false faux: égalité stricte
console.log("x === y ->" + (x === y));
x !== y ;// retourne true vrai: inégalité
console.log("x !== y = "+ (x !== y));
x < y ;// retourne true vrai 
console.log("x < y = " + (x < y));
x <= y ;// retourne true vrai
console.log("x <= y = " + (x <= y));
x > y ;// retourne false faux 
console.log("x > y = " + (x > y));
x >= y ;// retourne false faux
"un" === "deux" ;// retourne false faux  
console.log("x >= y  = " + (x >= y ));
"un" > "deux" ;// retourne false faux car "un" est alphabétiquement plus grand que "de"
console.log('"un" > "deux" = ' + ("un" > "deux"));

/*
L'égalité faible (==) effectuera une conversion des deux éléments à comparer avant d'effectuer la comparaison
L'égalité stricte (===) effectuera la même comparaison mais sans conversion préalable (elle renverra toujours false si les types des deux valeurs comparées sont différents)
*/
let num = 0, str="0"; 
num == str; // Retourne true Vrai !!!
num === str; // Retourne false Faux ouf ...

// Ou ET  Non ...
// Logical operators combine or invert boolean values
(x === 1) && (y === 3) ;// retourne false faux : les 2 comparaisons doivent être vraie. && =  ET
(x > 3) || (y < 3) ;// retourne true vrai : un des 2 comparaisons est vraie ((y < 3)) || = OU
!(x === y) ;// retourne true vrai: ! inverser la valeur booléenne

// Les fonctions
function carre(x){ // La définition d'une fonction se fait par function
    return x*x; // on retourne le carré de x : x*x
  } 

carre(4); // Appelle la fonction carre avec comme paramètre 4. Cette fonction retourne 16

// Conditionnel
function abs(x){
    if (x<0){
        return -x;
    }
    else {
        return x;
    }
}
abs(3); // Retourne 3
abs(-3); // Retourne 3 

// Boucle pour
let somme = 0,i;
for (i=0;i<=3;i++) {
    somme = somme + i;
}
somme;// Renvoie 6 car 0+1+2+3 = 6

// Boucle tant que
i = 0;
somme = 0;
while (i<=3){
    somme += i;
    i++;
}
somme;// Renvoie 6 car 0+1+2+3 = 6

// pour avec un tableau
prix = [10,100,1000];

function calculSomme(tableau) { // Calcule la somme des éléments de tableau
    let total = 0; // initialisation à zéro.
    // Boucle sur tableau et récupère chaque élément dans unPrix
    for(let unPrix of tableau) { 
        total += unPrix; // Ajoute l’élément au total
    } // Fin de la boucle
}

calculSomme(prix); // Renvoie 10+100+1000 = 1110