const dossierPrincipal = {
    nom: 'Ada',
    contenu: [{
        nom: 'Projets collectifs Ada',
        contenu: [{
            nom: 'Pico8',
            contenu: [{
              nom: 'mariokart.p8'
            }]
          },
          {
            nom: 'Dataviz',
            contenu: [{
                nom: 'index.html'
              },
              {
                nom: 'script.js'
              }
            ]
          }
        ]
      },
      {nom: 'CV.pdf'},
      {
        nom: 'Projets persos',
        contenu: [{
          nom: 'Portfolio',
          contenu: [{
              nom: 'index.html'
            },
            {
              nom: 'script.js'
            }
          ]
        }]
      },
    ],
  }
  //console.log(dossierPrincipal)

function afficherDossier(){
  console.log(dossierPrincipal.nom)
}
afficherDossier()


function afficherDossierIteratif(){
  for (let i = 0; i < dossierPrincipal.contenu.length; i++){
    console.log(dossierPrincipal.contenu[i].nom);
  }
}
afficherDossierIteratif()


function afficherDossierRecursif(objet, i){
  if(i >= objet.contenu.length){
    return
  }
  console.log(objet.contenu[i].nom);

  afficherDossierRecursif(dossierPrincipal, i+1)
}
afficherDossierRecursif(dossierPrincipal, 0)


