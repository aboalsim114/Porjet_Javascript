

// Génération des variables
let ambiance = document.querySelector("#ambiance")
let on = document.querySelector("#on")
let off = document.querySelector("#off")
let surricat  = document.querySelector("#surricat")
let elephant  = document.querySelector("#elephant")
let bird  = document.querySelector("#bird")
let fox  = document.querySelector("#fox")
let lion = document.querySelector("#lion")
let koala = document.querySelector("#koala")
let tiger = document.querySelector("#tiger")
let change = document.querySelector("#change")          // Bouton pour changer de niveau
let memory = document.querySelector("#memory")          // Titre "MEMORY"
let block = document.querySelector("#block")            // Div qui contient toutes les cartes
let score = document.querySelector("#score")            // Balise de score
let c1 = document.querySelector("#one")                 // carte 1
let c2 = document.querySelector("#two")                 // carte 2
let c3 = document.querySelector("#three")               // carte 3
let c4 = document.querySelector("#four")                // carte 4
let c5 = document.querySelector("#five")                // carte 5
let c6 = document.querySelector("#six")                 // carte 6
let c7 = document.querySelector("#seven")               // carte 7
let c8 = document.querySelector("#eight")               // carte 8
let c9 = document.querySelector("#nine")                // carte 9
let c10 = document.querySelector("#ten")                // carte 10
let c11 = document.querySelector("#eleven")             // carte 11
let c13 = document.querySelector("#thirteen")           // carte 13
let c14 = document.querySelector("#fourteen")            // carte 14
let c15 = document.querySelector("#fifteen")            // carte 15
let d3 = document.getElementsByClassName("return")      // cartes qui ont la classe return (quand elles sont retournées)
let start = document.querySelector("#start")            // bouton START
let button_lvl_1 = document.querySelector("#lvl1")      // bouton difficulté 1
let button_lvl_2 = document.querySelector("#lvl2")      // bouton difficulté 2
let tentatives = 0                                      // nombre de tentatives
let lvl_1 = [ c1, c2, c3, c4, c5, c6, c7, c8]           // tableau regroupant toutes les cartes pour la difficulté 1 
let lvl_2 = [ c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c13, c14, c15]        // tableau regroupant toutes les cartes pour la difficulté 2


function arrayShuffle(a) {                              // fonction qui mélange le contenu d'un tableau, j'ai pris
   var l = a.length, t, r;                              // beaucoup de temps à chercher mais je n'ai pas réussi à trouver
   while (0 !== l) {                                    // une bonne manière de disposer aléatoirement les cartes, donc
      r = Math.floor(Math.random() * l);                // j'ai eu l'idée de les mettres dans un tableau et j'ai cherché
      l -= 1;                                           // sur internet une façon de le faire :
      t = a[l];                                         
      a[l] = a[r];
      a[r] = t;
   }
   return a;
}    // https://www.equinode.com/blog/article/changer-l-ordre-de-plusieurs-elements-aleatoirement-avec-javascript
   

off.addEventListener('click', function() {
   on.classList.remove("none")
   off.classList.add("none")
   ambiance.play()
})

on.addEventListener('click', function() {
   off.classList.remove("none")
   on.classList.add("none")
   ambiance.pause()
})

// Le joueur choisit la difficulté en cliquant sur un des boutons de niveau
document.querySelector("body").classList.add("white") 
// Si il clique sur le niveau 1 :

button_lvl_1.addEventListener('click',function(){
   memory.classList.add("none")                             // Je fais disparaître le titre MEMORY
   button_lvl_1.classList.add("none")                       // Je fais disparaître le bouton de niveau 1      
   button_lvl_2.classList.add("none")                       // et le bouton de niveau 2
   start.classList.remove("none")                           // Je fais apparaître le bouton START

   // Quand on clique sur le bouton START : Le jeu démarre

   start.addEventListener('click',function(){
      change.classList.add("none")
      block.classList.remove("grey")  
      block.classList.add("black")
    

      let array_reset = ["one","two","three","four"]        // Je crée un tableau pour réinitialiser 
                                                            // les cartes de la partie d'avant
      lvl_1.forEach(classe => {                             // Foreach pour retirer toutes les classes de cartes
         i = 0 
         while (i < 5) {
            classe.classList.remove(array_reset[i]) 
            i++       
         }
      })
      
      lvl_1.forEach(element => {                            // Foreach pour retirer les classes none(retire la carte),
         element.classList.remove("found","return","none")  // found(carte trouvée) et return(carte est retournée)   
      });
      

      start.classList.add("none")                           // J'ajoute none au bouton start pour qu'il disparaîsse
      tentatives = 0                                        // Le nombre de tentatives est à zéro
      score.classList.add("none")                           // J'ajoute none à la balise de score
      let choice = new Map()                                // Je crée un nouveau 'dictionnaire'

      const array = ["one","two","three","two","three","one","four","four"]    // Il y a deux fois chaque classe pour les
      arrayShuffle(array)                                                      // deux cartes qui constituent une paire
      v = 0                                                 // Mélange du tableau avec arrayShuffle()         
      lvl_1.forEach(element => {                            // Pour chaque carte, je lui ajoute une classe avec le compteur
         element.classList.add(array[v])                    // v qui parcours le tableau
         v++               
      })

      /* J'ajoute un événement onclick pour chaque carte */
      lvl_1.forEach(element => {                        
      element.addEventListener('click', function(){       
         if (element.classList.contains("found")) {         // SI la carte contient la classe found, qui veut dire qu'on
            if (element.classList.contains("one")) {
               fox.play()
            } else if (element.classList.contains("two")) {
               koala.play()
            } else if (element.classList.contains("three")) {
               tiger.play()
            } else if (element.classList.contains("four")) {
               lion.play()
            }

               
         } else {                                           // SINON
            if ( d3.length == 0) {                          // SI le nombre de cartes retournée est égal à zéro,
               element.classList.add("return")              // Je retourne ma carte(class -> return)
               choice.set("1",element)                      // et j'ajoute la carte au dictionnaire en tant que première
                                                            // carte retournée ("1")
            } else if (d3.length == 1) {                    // SINON SI le nombre de cartes retournée est de 1,
               if (choice.get("1") == element) {            // SI la première carte retournée est celle sur laquelle
                                                            // je clique, rien ne se passe
               } else {                                     // SINON
                  element.classList.add("return")           // Je retourne la carte avec la class return
                  choice.set("2",element)                   // Je l'ajoute au dico en tant que deuxième carte retournée
                  
                  if ((choice.get("1").classList.contains("one") && choice.get("2").classList.contains("one")) || (choice.get("1").classList.contains("two") && choice.get("2").classList.contains("two")) || (choice.get("1").classList.contains("three") && choice.get("2").classList.contains("three")) || (choice.get("1").classList.contains("four") && choice.get("2").classList.contains("four"))) {
                        // SI la class du choix "1" du dico est égale à celle du choix "2" du dico,
                        
                     if (element.classList.contains("one")) {
                        fox.play()
                     } else if (element.classList.contains("two")) {
                        koala.play()
                     } else if (element.classList.contains("three")) {
                        tiger.play()
                     } else if (element.classList.contains("four")) {
                        lion.play()
                     }

                     choice.get("1").classList.add("found")          // La paire est trouvée (class -> found),
                     choice.get("2").classList.add("found")          // j'ajoute la class aux deux cartes
                     choice.get("1").classList.remove("return")      // Je leur retire la class return
                     choice.get("2").classList.remove("return")  
                     choice.delete("1")                              // et je les enlève toutes les deux du dictionnaire
                     choice.delete("2") 
                     tentatives += 1                                 // Le nombre de tentatives augmente de 1
                           
                  } else {                                           // SINON (si les cartes ne sont pas pareilles)
   // https://www.w3schools.com/jsref/met_win_settimeout.asp ( fonction trouvée sur internet)
                     setTimeout(function() {                         // fonction qui fait une 'pause' dans le temps
                        choice.get("1").classList.remove("return")   // Je retourne mes cartes de nouveau
                        choice.get("2").classList.remove("return")  
                        choice.delete("1")                           // Je les retire du dictionnaire
                        choice.delete("2")  
                        tentatives += 1                              // Mon nombre de tentatives monte de 1s
                        }                                            
                        , 1000 )   // Correspond au temps, en ms (ici le temps est donc de 1 seconde)
                  }
               }
            } else if (d3.length == 2) {                             // SINON SI le nombre de cartes retournées est de 2,
               choice.get("1").classList.remove("return")            // Je ne peux pas en ajouter plus alors je leur
               choice.get("2").classList.remove("return")            // retire la class return
               choice.delete("1")                                    // Je les enlève du dictionnaire
               choice.delete("2")
            }
            if (document.querySelectorAll(".found").length == 8) {
               setTimeout(function() {    // SI le nombre de cartes trouvées est de 8 (max),
               start.classList.remove("none")                        // Le bouton START réapparaît (pour recommencer)
               change.classList.remove("none")                       // Le bouton pour changer de niveau apparaît
               score.innerHTML = "SCORE : " + tentatives             // J'ajoute le score à la balise de score
               score.classList.remove("none")                        // Je la fais réapparaître aussi
               lvl_1.forEach(carte => {                              // Les carte disparaîssent 
                     carte.classList.add("none")   
               });
               document.querySelector("body").classList.remove("grey") 
               document.querySelector("body").classList.add("white")   
               block.classList.add("grey") 
               block.classList.remove("white")            
               }, 1000)
            }
            change.addEventListener('click',function(){
               change.classList.add("none")
               button_lvl_1.classList.remove("none")
               button_lvl_2.classList.remove("none")
               memory.classList.remove("none")
               start.classList.add("none")
               score.classList.add("none")
         })

         }
      })
      
      })
   })
})

// Si il clique sur le niveau 2 :

button_lvl_2.addEventListener('click',function(){
   memory.classList.add("none")                             // Je fais disparaître le titre MEMORY
   button_lvl_1.classList.add("none")                       // Je fais disparaître le bouton de niveau 1      
   button_lvl_2.classList.add("none")                       // et le bouton de niveau 2
   start.classList.remove("none")                           // Je fais apparaître le bouton START

   // Quand on clique sur le bouton START : Le jeu démarre

   start.addEventListener('click',function(){
      change.classList.add("none")
      block.classList.remove("grey")  
      block.classList.add("black")

        
                                                            // les cartes de la partie d'avant
      lvl_2.forEach(element => {                             // Foreach pour retirer toutes les classes de cartes
         let array_reset2 = ["one","two","three","four","five","six","seven"] // Je crée un tableau pour réinitialiser
         g = 0 
         while (g < 8) {
            element.classList.remove(array_reset2[g]) 
            g++       
         }
      })
      
      lvl_2.forEach(element => {                            // Foreach pour retirer les classes none(retire la carte),
         element.classList.remove("found","return","none")  // found(carte trouvée) et return(carte est retournée)   
      });
      

      start.classList.add("none")                           // J'ajoute none au bouton start pour qu'il disparaîsse
      tentatives = 0                                        // Le nombre de tentatives est à zéro
      score.classList.add("none")                           // J'ajoute none à la balise de score
      let choice = new Map()                                // Je crée un nouveau 'dictionnaire'

      const array1 = ["one","two","three","two","three","one","four","four","five","seven","five","six","six","seven"]    // Il y a deux fois chaque classe pour les deux cartes qui constituent une paire
      arrayShuffle(array1)                                                       
      h = 0                                                 // Mélange du tableau avec arrayShuffle()         
      lvl_2.forEach(element => {                            // Pour chaque carte, je lui ajoute une classe avec le compteur
         element.classList.add(array1[h])                    // v qui parcours le tableau
         h++               
      })

      /* J'ajoute un événement onclick pour chaque carte */
      lvl_2.forEach(element => {                        
      element.addEventListener('click', function(){       
         if (element.classList.contains("found")) {         // SI la carte contient la classe found, qui veut dire qu'on
            if (element.classList.contains("one")) {
               fox.play()
            } else if (element.classList.contains("two")) {
               koala.play()
            } else if (element.classList.contains("three")) {
               tiger.play()
            } else if (element.classList.contains("four")) {
               lion.play()
            } else if (element.classList.contains("five")) {
               elephant.play()
            } else if (element.classList.contains("six")) {
               surricat.play()
            } else if (element.classList.contains("seven")) {
               bird.play()
            }             

         } else {                                           // SINON
            if ( d3.length == 0) {                          // SI le nombre de cartes retournée est égal à zéro,
               element.classList.add("return")              // Je retourne ma carte(class -> return)
               choice.set("1",element)                      // et j'ajoute la carte au dictionnaire en tant que première
                                                            // carte retournée ("1")
            } else if (d3.length == 1) {                    // SINON SI le nombre de cartes retournée est de 1,
               if (choice.get("1") == element) {            // SI la première carte retournée est celle sur laquelle
                                                            // je clique, rien ne se passe
               } else {                                     // SINON
                  element.classList.add("return")           // Je retourne la carte avec la class return
                  choice.set("2",element)                   // Je l'ajoute au dico en tant que deuxième carte retournée
                  
                  if ((choice.get("1").classList.contains("one") && choice.get("2").classList.contains("one")) || (choice.get("1").classList.contains("two") && choice.get("2").classList.contains("two")) || (choice.get("1").classList.contains("three") && choice.get("2").classList.contains("three")) || (choice.get("1").classList.contains("four") && choice.get("2").classList.contains("four")) || (choice.get("1").classList.contains("five") && choice.get("2").classList.contains("five")) || (choice.get("1").classList.contains("six") && choice.get("2").classList.contains("six")) || (choice.get("1").classList.contains("seven") && choice.get("2").classList.contains("seven")) || (choice.get("1").classList.contains("eight") && choice.get("2").classList.contains("eight"))) {
                        // SI la class du choix "1" du dico est égale à celle du choix "2" du dico,

                     if (element.classList.contains("one")) {
                        fox.play()
                     } else if (element.classList.contains("two")) {
                        koala.play()
                     } else if (element.classList.contains("three")) {
                        tiger.play()
                     } else if (element.classList.contains("four")) {
                        lion.play()
                     } else if (element.classList.contains("five")) {
                        elephant.play()
                     } else if (element.classList.contains("six")) {
                        surricat.play()
                     } else if (element.classList.contains("seven")) {
                        bird.play()
                     }

                     choice.get("1").classList.add("found")          // La paire est trouvée (class -> found),
                     choice.get("2").classList.add("found")          // j'ajoute la class aux deux cartes
                     choice.get("1").classList.remove("return")      // Je leur retire la class return
                     choice.get("2").classList.remove("return")  
                     choice.delete("1")                              // et je les enlève toutes les deux du dictionnaire
                     choice.delete("2") 
                     tentatives += 1                                 // Le nombre de tentatives augmente de 1
                           
                  } else {                                           // SINON (si les cartes ne sont pas pareilles)
   // https://www.w3schools.com/jsref/met_win_settimeout.asp ( fonction trouvée sur internet)
                     setTimeout(function() {                         // fonction qui fait une 'pause' dans le temps
                        choice.get("1").classList.remove("return")   // Je retourne mes cartes de nouveau
                        choice.get("2").classList.remove("return")  
                        choice.delete("1")                           // Je les retire du dictionnaire
                        choice.delete("2")  
                        tentatives += 1                              // Mon nombre de tentatives monte de 1s
                        }                                            
                        , 1000 )   // Correspond au temps, en ms (ici le temps est donc de 1 seconde)
                  }
               }
            } else if (d3.length == 2) {                             // SINON SI le nombre de cartes retournées est de 2,
               choice.get("1").classList.remove("return")            // Je ne peux pas en ajouter plus alors je leur
               choice.get("2").classList.remove("return")            // retire la class return
               choice.delete("1")                                    // Je les enlève du dictionnaire
               choice.delete("2")
            }
            if (document.querySelectorAll(".found").length == 14) {
               setTimeout(function() {    // SI le nombre de cartes trouvées est de 8 (max),
               start.classList.remove("none")                        // Le bouton START réapparaît (pour recommencer)
               change.classList.remove("none")                       // Le bouton pour changer de niveau apparaît
               score.innerHTML = "SCORE : " + tentatives             // J'ajoute le score à la balise de score
               score.classList.remove("none")                        // Je la fais réapparaître aussi
               lvl_2.forEach(carte => {                              // Les carte disparaîssent 
                     carte.classList.add("none")   
               });
               document.querySelector("body").classList.remove("grey") 
               document.querySelector("body").classList.add("white")   
               block.classList.add("grey") 
               block.classList.remove("white")              
               }, 1000)
            }
            change.addEventListener('click',function(){
                  change.classList.add("none")
                  button_lvl_1.classList.remove("none")
                  button_lvl_2.classList.remove("none")
                  memory.classList.remove("none")
                  start.classList.add("none")
                  score.classList.add("none")
            })
         }
      })
      })
   })
})

