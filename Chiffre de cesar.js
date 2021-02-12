            document.getElementById('textNormal').addEventListener('keyup', function () {nettoy.value = nettoyer(this.value)}, false);
            document.getElementById('coder').addEventListener('click', function () {code.value = coder (nettoy.value, decal.value)} ,false);

            // Nettoyage du message (enleve les accents, les caractères, les espaces)
            function nettoyer (text) {
                var accents = 'àâëéèêïîôüûç'
                var sansAccents = 'aaeeeeiiouuc'
                return [...text.toLowerCase()].map (a=>accents.includes(a) ? sansAccents[accents.indexOf(a)]: a) // on converti le text en minuscule et en tableau, pour chacune des lettres "a" on vérifie si elle est dans la variable accents et on la converti en sansAccents selon son index
                .join('').replace (/[^a-z]/g, '').toUpperCase() // on join les lettre et on les met en majuscule
            }

            //fonction cesar
            function cesar (caractere, decalage){
            var lettre = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            return lettre [(+ decalage + lettre.indexOf(caractere) + 26) % 26]; // (decalage + le rang de la lettre ) % 26 pour trouver la lettre après le décalage
            // le (+26) pour gérer les nombres négatifs
            }
            

            // fonction coder
            function coder (text, dec){
                return [...text].map( c => cesar(c, dec)).join(" ");
            }