const historyData = [
  {
    page: 0,
    title: "",
    text: "",
    image: "assets/page0.mp4",
    options: {
      number: 0,
      choice: [
        {
          value: "",
          page: 0,
        },
        {
          value: "",
          page: 0,
        },
      ],
    },
    dice: "hidden",
  },

  {
    page: 1,
    title: "",
    text: "Notre héros dans cette histoire est un petit chaton condamné à l'exil par un roi cruel. Seul, il s'est entraîné sans relâche pour devenir le meilleur. Il s'est juré de ne plus jamais laisser passer les injustices. Depuis, il parcourt le pays pour faire de ce monde un endroit paisible, où chacun peut découvrir le bonheur… On l'appelle El Gato.",
    image: "assets/photosPerso/ElGato.png",
    options: {
      number: 1,
      choice: [
        {
          value: "Commencer",
          page: 2,
        },
      ],
    },
    dice: "hidden", //visible
  },

  {
    page: 2,
    title: "",
    text: "Le maire du village fait appel à notre héros pendant le réveillon, car il est en détresse. L'étoile du sapin de Noël de la ville a disparu ! Impensable ! Dans ce village, il y a une vieille légende qui raconte que le Père Noël a besoin de cette étoile magique pour trouver le chemin du village afin de distribuer les cadeaux. Autant dire que depuis qu'elle a disparu, les parents viennent voir le maire et la popularité du maire est en chute libre. Il vous propose une grosse récompense si vous lui rapportez l'étoile. Voulez-vous aider le maire ?",
    image: "assets/photosPerso/maireEntier.png",
    options: {
      number: 2,
      choice: [
        {
          value: "Oui",
          page: 3,
        },
        {
          value: "Non",
          page: 4,
        },
      ],
    },
    dice: "hidden", //hidden
  },
  {
    page: 3,
    title: "",
    text: "Par quoi voulez-vous commencer ? Interroger les témoins ou Rechercher des indices ?",
    image: "assets/photosPerso/village.png",
    options: {
      number: 2,
      choice: [
        {
          value: "Témoins",
          page: 5,
        },
        {
          value: "Indices",
          page: 6,
        },
      ],
    },
    dice: "hidden", //hidden
  },
  {
    page: 4,
    title: "",
    text: "Vous décidez que cette histoire d'étoile magique et de Père Noël, c'est pour les bébés, et que vous avez des choses beaucoup plus importantes à faire !",
    image: "assets/photosPerso/danse.gif",
    options: {
      number: 1,
      choice: [
        {
          value: "Rejouer",
          page: 2,
        },
      ],
    },
    dice: "hidden", //hidden
  },
  {
    page: 5,
    title: "",
    text: "Qui voulez-vous interroger ? La serveuse de l'auberge, Le boulanger ou Une passante ?",
    image: "assets/photosPerso/village.png",
    options: {
      number: 3,
      choice: [
        {
          value: "La serveuse",
          page: 7,
        },
        {
          value: "Le boulanger",
          page: 8,
        },
        {
          value: "Une passante",
          page: 9,
        },
      ],
    },
    dice: "hidden", //hidden
  },
  {
    page: 6,
    title: "",
    text: "Où voulez-vous rechercher ? Regarder autour du sapin ou escalader le sapin à la recherche d'indices là où se trouvait l'étoile ?",
    image: "assets/photosPerso/village.png",
    options: {
      number: 2,
      choice: [
        {
          value: "Autour du sapin",
          page: 10,
        },
        {
          value: "Escalader le sapin",
          page: 11,
        },
      ],
    },
    dice: "hidden", //hidden
  },
  {
    page: 7,
    title: "",
    text:
      "- Bonjour, bienvenue à l'auberge du Chat Teigne, je m'appelle Juliette. Que puis-je pour vous ?" +
      "<br>" +
      "- Hola ! On vous cite comme témoin dans l'histoire du vol de l'étoile, vous pouvez m'en dire plus ?" +
      "<br>" +
      "- Bien sûr, au début de mon service à 17h, elle était encore là, mais après mon service, j'ai remplacé Bernard à la plonge. Je suis rentrée chez moi vers 3h et elle avait disparu. J'ai remarqué des traces de pas autour de l'arbre, mais je n'ai pas reconnu la forme des pattes. Voulez-vous interroger d'autres témoins ou suivre la piste ?",
    image: "assets/photosPerso/JulietteEntier.png",
    options: {
      number: 2,
      choice: [
        {
          value: "D'autres témoins",
          page: 5,
        },
        {
          value: "Suivre la piste",
          page: 12,
        },
      ],
    },
    dice: "hidden", //hidden
  },
  {
    page: 8,
    title: "",
    text:
      "- Bonjour, bienvenue à la boulangerie Chat Malow, qu'est-ce que je vous sers ?" +
      "<br>" +
      " - Hola ! J'aimerais parler au boulanger, s'il vous plaît./n - Je suis Malow, le boulanger, c'est pour quoi ?" +
      "<br>" +
      " - On vous cite comme témoin dans l'histoire du vol de l'étoile, vous pouvez m'en dire plus ?" +
      "<br>" +
      " - Oui, j'étais dans mon labo en train de préparer mes tartes à la châtaigne quand je me suis aperçu de sa disparition. La fenêtre du labo donne sur l'arbre. Je ne pouvais pas la manquer, il était aux alentours de 2h45 quand j'ai remarqué sa disparition. Voulez-vous interroger d'autres témoins ou suivre la piste ?",
    image: "assets/photosPerso/MalowEntier.png",
    options: {
      number: 2,
      choice: [
        {
          value: "D'autres témoins",
          page: 5,
        },
        {
          value: "Suivre la piste",
          page: 12,
        },
      ],
    },
    dice: "hidden", //hidden
  },
  {
    page: 9,
    title: "",
    text:
      " Vous voyez une vieille taupe se diriger vers vous." +
      "<br>" +
      " - Claudia : Bonjour, vous êtes l'aventurier qui recherche l'étoile ?" +
      "<br>" +
      " - Si ! C'est moi, El Gato." +
      "<br>" +
      " - J'ai tout vu ! Il a pris l'étoile et est parti avec ! Il ressemblait à une sorte d'elfe, mais tout vert, il a même perdu son bonnet./n Elle vous tend un bonnet vert avec un pompon blanc au bout. Voulez-vous interroger d'autres témoins ou suivre la piste ? ",
    image: "assets/photosPerso/Claudia.png",
    options: {
      number: 2,
      choice: [
        {
          value: "D'autres témoins",
          page: 5,
        },
        {
          value: "Suivre la piste",
          page: 12,
        },
      ],
    },
    dice: "hidden", //hidden
  },

  {
    page: 10,
    title: "",
    text: "Vous faites le tour du sapin et vous remarquez des traces de pas étranges. Un début de piste peut être suivi. Voulez-vous suivre cette piste ou interroger les témoins ?  ",
    image: "assets/photosPerso/village.png",
    options: {
      number: 2,
      choice: [
        {
          value: "Suivre la piste",
          page: 12,
        },
        {
          value: "Voir les témoins",
          page: 5,
        },
      ],
    },
    dice: "hidden", //hidden
  },
  {
    page: 11,
    title: "",
    text: "Vous grimpez tout en haut du sapin avec la grâce et l'agilité connues d'El Gato. Vous analysez la scène du crime attentivement et trouvez une touffe de poils accrochée à une branche. Dans l'excitation d'avoir trouvé une piste sérieuse, vous célébrez votre trouvaille en faisant une petite danse. Mais une guirlande accrochée à cette branche vous fait glisser. Vous chutez du haut de l'arbre et vous vous rompez le cou.",
    image: "assets/photosPerso/village.png",
    options: {
      number: 1,
      choice: [
        {
          value: "Rejouer ?",
          page: 2,
        },
      ],
    },
    dice: "hidden", //hidden
  },
  {
    page: 12,
    title: "",
    text: "En suivant la piste que vous avez trouvée, vous arrivez dans une forêt. Soudain, une bande de renards vous encercle et vous vous retrouvez piégé. Deux possibilités se présentent à vous : vous décidez de les menacer avec votre charisme et votre prestance, ou vous décidez de les combattre tous ?",
    image: "assets/photosPerso/renardsBrigand.png",
    options: {
      number: 2,
      choice: [
        {
          value: "Menacer",
          page: 13,
        },
        {
          value: "Combattre",
          page: 14,
        },
      ],
    },
    dice: "hidden", //hidden
  },
  {
    page: 13,
    title: "",
    text:
      "Vous faites le dos rond pour vous rendre plus grand et commencez à grogner… " +
      "<br>" +
      " Lancer le dès pour savoir si vous reussissez ! ",
    image: "assets/photosPerso/renardsBrigand.png",
    options: {
      number: 0,
      choice: [
        {
          value: "La menace ne fonctionne pas",
          page: 15,
        },
        {
          value: "La menace fonctionne",
          page: 16,
        },
      ],
    },
    dice: "visible", //hidden
  },
  {
    page: 14,
    title: "",
    text:
      "Vous prenez votre position d'attaque, analysez la situation et… " +
      "<br>" +
      " Lancer le dès pour savoir si vous reussissez ! ",
    image: "assets/photosPerso/renardsBrigand.png",
    options: {
      number: 0,
      choice: [
        {
          value: "L'attaque ne fonctionne pas",
          page: 17,
        },
        {
          value: "L'attaque fonctionne",
          page: 18,
        },
      ],
    },
    dice: "visible", //hidden
  },
  {
    page: 15,
    title: "Ça n'a pas fonctionné !",
    text: "En essayant de grogner, vous recrachez une boule de poils et perdez toute crédibilité auprès des brigands. Ils en profitent pour vous attaquer. Même en utilisant votre botte secrète, vous vous retrouvez dépassé par le nombre. Les brigands en profitent pour vous détrousser et vous vous retrouvez complètement nu, attaché dans la forêt. On vous retrouvera le lendemain, malheureusement trop tard, et l'étoile n'ayant pas été retrouvée, tout le monde vous rejettera la faute.",
    image: "assets/photosPerso/renardsBrigand.png",
    options: {
      number: 1,
      choice: [
        {
          value: "Rejouer ?",
          page: 2,
        },
      ],
    },
    dice: "hidden", //hidden
  },
  {
    page: 16,
    title: "C'est une reussite !",
    text: "Avec votre posture impressionnante et votre présentation, tous les brigands frissonnent quand le nom d'El Gato est prononcé. Ils s'excusent immédiatement et vous indiquent la cachette d'une personne suspecte.",
    image: "assets/photosPerso/ElGato.png",
    options: {
      number: 1,
      choice: [
        {
          value: "Confronter le voleur",
          page: 19,
        },
      ],
    },
    dice: "hidden", //hidden
  },

  {
    page: 17,
    title: "Ça n'a pas fonctionné !",
    text: "Dans la précipitation, vous dégainez votre épée, mais celle-ci vous échappe des mains et se retrouve au pied de vos adversaires. Avec votre agilité légendaire, vous sautez contre un arbre pour prendre appui afin d'effectuer votre botte secrète, mais au moment de rebondir, votre patte se coince et vous vous retrouvez coincé dans l'arbre, la tête en bas. Les assaillants vous utilisent alors comme punching-ball. Après vous avoir roué de coups, ils vous laissent nu dans la forêt, agonisant… Vous mourez quelques heures après dans d'atroces souffrances et tout le monde au village pense qu'El Gato les a abandonnés… ",
    image: "assets/photosPerso/renardsBrigand.png",
    options: {
      number: 1,
      choice: [
        {
          value: "Rejouer",
          page: 2,
        },
      ],
    },
    dice: "hidden", //hidden
  },
  {
    page: 18,
    title: "C'est une reussite !",
    text: "Vous dégainez lentement votre épée, la pression dans l'air est palpable. Entouré par vos adversaires, vous décidez de tourner sur vous-même, la lame de votre épée fendant l'air et les ceintures de vos adversaires. Leurs pantalons tombent sur leurs genoux, sentant une brise fraîche sur leurs fesses. Un mouvement de panique se crée et ils finissent tous par tomber à la renverse. Vous les attachez facilement et sans effort. Ils vous révèlent qu'un individu suspect se cache non loin et vous indiquent sa cachette.  ",
    image: "assets/photosPerso/ElGato.png",
    options: {
      number: 1,
      choice: [
        {
          value: "Confronter le voleur",
          page: 19,
        },
      ],
    },
    dice: "hidden", //hidden
  },
  {
    page: 19,
    title: "",
    text: "Après avoir découvert la cachette du voleur, vous le confrontez…  Vous avez deux possibilités : essayer de le persuader de se rendre et récupérer l'étoile en douceur ou la reprendre par la force.",
    image: "assets/photosPerso/VoleurEntier.png",
    options: {
      number: 2,
      choice: [
        {
          value: "Le persuader ?",
          page: 20,
        },
        {
          value: "Utiliser la force ?",
          page: 21,
        },
      ],
    },
    dice: "hidden", //hidden
  },
  {
    page: 20,
    title: "",
    text:
      "- Ne sois pas un idiot ! Rends-moi l'étoile avant qu'El Gato te fasse bobo !" +
      "<br>" +
      " Lancer le dès pour savoir si vous reussissez ! ",
    image: "assets/photosPerso/VoleurEntier.png",
    options: {
      number: 0,
      choice: [
        {
          value: "La menace ne fonctionne pas",
          page: 22,
        },
        {
          value: "La menace fonctionne",
          page: 23,
        },
      ],
    },
    dice: "visible", //hidden
  },
  {
    page: 21,
    title: "",
    text:
      "Vous foncez tête baissée sur lui…" +
      "<br>" +
      " Lancer le dès pour savoir si vous reussissez ! ",
    image: "assets/photosPerso/VoleurEntier.png",
    options: {
      number: 0,
      choice: [
        {
          value: "L'attaque ne fonctionne pas",
          page: 31,
        },
        {
          value: "L'attaque fonctionne",
          page: 32,
        },
      ],
    },
    dice: "visible", //hidden
  },
  {
    page: 22,
    title: "Ça n'a pas fonctionné !",
    text:
      "- Euh, qui ça ? " +
      "<br>" +
      "- Bah, El Gato, le grand justicier !  " +
      "<br>" +
      " - Euh, je connais pas ?  " +
      "<br>" +
      "- Mais si, le défenseur de la veuve et de l'orphelin, le pourfendeur des…  " +
      "<br>" +
      " Pendant que vous faites l'éloge de vos exploits, le voleur en profite pour prendre la fuite. Vous vous rendez compte qu'il a pris soin d'effacer ses traces. Introuvable, vous rentrez la queue entre les jambes, la tête baissée d'avoir échoué à votre mission…",
    image: "assets/photosPerso/VoleurEntier.png",
    options: {
      number: 1,
      choice: [
        {
          value: "Rejouer",
          page: 2,
        },
      ],
    },
    dice: "hidden", //hidden
  },
  {
    page: 23,
    title: "C'est une reussite !",
    text:
      "- Non, ce n'est pas possible ! Un vulgaire chaton ne peut pas être le grand El Gato ! " +
      "<br>" +
      "Vous effectuez alors une acrobatie avec votre arme et faites un grand G sur la chemise du voleur avec votre épée. " +
      "<br>" +
      "- C'est bon, je vous crois ! Ne me faites pas de mal, s'il vous plaît ! Je me rends ! " +
      "<br>" +
      "Le voleur se laisse attacher les poignets et vous rend l'étoile. Vous reprenez la route, la tête haute, vers le village.",
    image: "assets/photosPerso/ElGato.png",
    options: {
      number: 1,
      choice: [
        {
          value: "Retourner au village",
          page: 24,
        },
      ],
    },
    dice: "hidden", //hidden
  },
  {
    page: 24,
    title: "",
    text:
      "Après avoir récupéré vaillamment l'étoile, en vous dirigeant vers le village, vous vous faites stopper par un gros chien qui vous dit : " +
      "<br>" +
      "- Eh toi là ! Donne à Brutus tout de suite l'étoile sinon ça va mal se passer ! " +
      "<br>" +
      "Vous tentez de feinter votre adversaire. " +
      "<br>" +
      "- Euh, une étoile ? Je n'ai pas d'étoile, vous devez sûrement confondre avec El Gato, je l'ai vu tout à l'heure en cherchant des champignons ! " +
      "<br>" +
      " Lancer le dès pour savoir si vous reussissez ! ",
    image: "assets/photosPerso/brutusEntier.png",
    options: {
      number: 0,
      choice: [
        {
          value: "La feinte ne fonctionne pas",
          page: 25,
        },
        {
          value: "La feinte fonctionne",
          page: 26,
        },
      ],
    },
    dice: "visible", //hidden
  },
  {
    page: 25,
    title: "Ça n'a pas fonctionné !",
    text:
      "Brutus vous regarde bizarrement, sort un portrait de sa poche, le regarde, vous regarde, le regarde, vous regarde et dit : " +
      "<br>" +
      "- Beeeeeeh, si c'est pas toi El Gato, pourquoi sur cette affiche y'a ta tête avec écrit 'El Gato' ? J'aime pas qu'on me prenne pour un imbécile ! " +
      "<br>" +
      "Dans un accès de colère, Brutus se jette sur vous. Vous devez vous défendre ou vous excuser et donner l'étoile ?",
    image: "assets/photosPerso/brutusEntier.png",
    options: {
      number: 2,
      choice: [
        {
          value: "Se défendre ?",
          page: 27,
        },
        {
          value: "s'excuser ?",
          page: 28,
        },
      ],
    },
    dice: "hidden", //hidden
  },
  {
    page: 26,
    title: "C'est une reussite !",
    text:
      "- Ah ! Bah pardon, je croyais que c'était toi ! Tu l'as vu où exactement ? " +
      "<br>" +
      "Vous lui indiquez une direction, Brutus vous remercie chaleureusement et s'en va. " +
      "<br>" +
      "Vous arrivez au village en véritable héros, tout le monde vous acclame. " +
      "<br>" +
      "En échange de l'étoile, le maire vous offre une énorme récompense que vous décidez d'offrir à l'orphelinat du village. " +
      "<br>" +
      "Ainsi démarre la légende d'El Gato !",
    image: "assets/photosPerso/ElGato.png",
    options: {
      number: 1,
      choice: [
        {
          value: "Bravo ! Rejouer ?",
          page: 1,
        },
      ],
    },
    dice: "hidden", //hidden
  },
  {
    page: 27,
    title: "",
    text:
      "Vous savez qu'il est trop tard pour s'excuser, il faut vous défendre !" +
      "<br>" +
      " Lancer le dès pour savoir si vous reussissez ! ",
    image: "assets/photosPerso/brutusEntier.png",
    options: {
      number: 0,
      choice: [
        {
          value: "La défense ne fonctionne pas",
          page: 29,
        },
        {
          value: "La défense fonctionne",
          page: 30,
        },
      ],
    },
    dice: "visible", //hidden
  },
  {
    page: 28,
    title: "",
    text:
      "Voyant Brutus arriver sur vous, vous vous mettez à genoux pour implorer son pardon et lui demander de ne pas vous faire de mal." +
      "<br>" +
      "Vous lui tendez l’étoile, la main tremblante, il la récupère, le sourire aux lèvres, et s’en va en sifflotant." +
      "<br>" +
      "Vous retournez au village, honteux, et vous êtes accueillis par un silence glacial tandis que tout le monde vante les mérites et les exploits de Brutus.",
    image: "assets/photosPerso/brutusEntier.png",
    options: {
      number: 1,
      choice: [
        {
          value: "Rejouer ?",
          page: 2,
        },
      ],
    },
    dice: "hidden", //hidden
  },
  {
    page: 29,
    title: "Ça n'a pas fonctionné !",
    text:
      "Brutus arrive sur vous si rapidement que vous n’arrivez pas à parer ou esquiver l’attaque. La violence du choc vous fait perdre connaissance." +
      "<br>" +
      "À votre réveil, vous constatez qu’après un beau passage à tabac, Brutus a pris l’étoile." +
      "<br>" +
      "Vous retournez au village en boitant, le visage tuméfié. Vous êtes accueillis par un silence glacial tandis que tout le monde vante les mérites et les exploits de Brutus.",
    image: "assets/photosPerso/brutusEntier.png",
    options: {
      number: 1,
      choice: [
        {
          value: "Rejouer ?",
          page: 2,
        },
      ],
    },
    dice: "hidden", //hidden
  },
  {
    page: 30,
    title: "C'est une reussite !",
    text:
      "Vous voyez Brutus foncer sur vous comme un taureau furieux et, tel un torero avec votre cape, vous l’esquivez plusieurs fois. L’animal, à bout de souffle, met ses dernières forces dans une ultime course, sans se rendre compte que vous aviez tout calculé depuis le début." +
      "<br>" +
      "Vous l’esquivez une dernière fois et il se retrouve tête la première dans un arbre. Assommé sur le coup, vous lui dites : « C’est ce qui arrive quand on s’en prend à El Gato ! »" +
      "<br>" +
      "Vous arrivez au village en véritable héros, tout le monde vous acclame." +
      "<br>" +
      "En échange de l’étoile, le maire vous offre une énorme récompense que vous décidez d’offrir à l’orphelinat du village." +
      "<br>" +
      "Ainsi démarre la légende d’El Gato !",
    image: "assets/photosPerso/torero.gif",
    options: {
      number: 1,
      choice: [
        {
          value: "Bravo ! Rejouer ?",
          page: 1,
        },
      ],
    },
    dice: "hidden", //hidden
  },
  {
    page: 31,
    title: "Ça n'a pas fonctionné !",
    text:
      "Quand vous arrivez jusqu'au voleur, prêt à l'embrocher comme un kebab, il vous esquive. " +
      "<br>" +
      "Dans votre élan, vous vous prenez les pieds dans une racine. En tombant, vous vous empalez sur votre épée et vous mourez sur le coup.",
    image: "assets/photosPerso/VoleurEntier.png",
    options: {
      number: 1,
      choice: [
        {
          value: "Rejouer ?",
          page: 2,
        },
      ],
    },
    dice: "hidden", //hidden
  },
  {
    page: 32,
    title: "C'est une reussite !",
    text: "Vif comme l'éclair, vous arrivez derrière le voleur et lui assénez un coup de pommeau sur la nuque. Vous le ligotez aisément, récupérez l'étoile et direction le village pour toucher la récompense.",
    image: "assets/photosPerso/epee.gif",
    options: {
      number: 1,
      choice: [
        {
          value: "Retourner au village",
          page: 24,
        },
      ],
    },
    dice: "hidden", //hidden
  },
];
