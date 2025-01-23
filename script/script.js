let pageActuel = 0; //page de presentation
// fonctions

const showPage = function (page) {
  if (page.page === 0) {
    //on montre le vidèo d'introduction
    const containerHistory = document.querySelector(".containerMainHistory");
    const containerIntro = document.querySelector(".containerMainIntro");
    // const video = document.querySelector(".video");

    containerHistory.style.setProperty("display", "none");
    containerIntro.style.setProperty("display", "flex");
    // video.style.setProperty("src", getPage(0).image);
    setTimeout(() => {
      pageActuel = 1;
      showPage(getPage(pageActuel));
    }, "5000"); //attent le timps qui dure l'introduction
    // on saute à la page 1

  } else {
    const containerHistory = document.querySelector(".containerMainHistory");
    const containerIntro = document.querySelector(".containerMainIntro");
    containerHistory.style.setProperty("display", "flex");
    containerIntro.style.setProperty("display", "none");

    //on affiche l'histoire...
    const text = document.querySelector(".text");
    const image = document.querySelector(".containerImageHistory");
    const choices = document.querySelector(".containerChoices");
    const title = document.querySelector(".title");

    //   on compléte les champs avec le contenu de l'histoire
    text.innerHTML = page.text;
    title.innerText = page.title;

    image.src = page.image;

    //   on montre/cache le dès si necessaire...

    //d'abord on vide les options précédents
    choices.innerHTML = "";

    //   charger les options de choix
    if (page.options.number > 0) {
      //il existent des options de choix

      page.options.choice.forEach((option) => {
        const choice = document.createElement("div");
        choice.className = "choice";
        choice.innerText = option.value;

        //   il faut affecter un evenement click sur cette ption!
        choice.addEventListener("click", (event) => {
          pageActuel = option.page;
          // console.log(pageActuel);

          showPage(getPage(pageActuel));
        });

        choices.append(choice);
      });
    }
    //s'il faut lancer les dés on configure le bouton

    if (page.dice === "visible") {
      const dice = document.querySelector(".containerDice");

      dice.style.setProperty("visibility", page.dice);
      dice.addEventListener("click", rollDice);
    } else {
      const dice = document.querySelector(".containerDice");

      dice.style.setProperty("visibility", page.dice);
    }
  }
};

const getPage = function (index) {
  return historyData[index];
};

// const showCover = function () {
//   const text = document.querySelector(".text");
//   const image = document.querySelector(".containerImageHistory");
//   const dice = document.querySelector(".containerDice");
//   const choices = document.querySelector(".containerChoices");
// const main = document.querySelector(".containerMain");

//   //   disparition du dès et des options
//   dice.style.setProperty("visibility", "hidden");
//   choices.style.setProperty("visibility", "hidden");

//   //   chargement du text et de l'image
//   text.innerText = historyData[0].text;
//   image.src = historyData[0].image;

//   //   on cache le dès si necessaire...
//   dice.style.setProperty("visibility", historyData[0].dice);

//   // on returne la page principal pour la montrer
//   return main;

// };

const generateDicePoints = function () {
  let dice = parseInt(6 * Math.random() + 1);
  return dice;
};

const rollDice = function (page) {
  // //1. on lance le dè
  const diceResult = generateDicePoints();

  //  On va à la page par rapport au resultat du dé
  if (diceResult <= 3) {
    console.log(getPage(pageActuel).options.choice[0].page);
    pageActuel = getPage(pageActuel).options.choice[0].page;
  } else {
    console.log(getPage(pageActuel).options.choice[1].page);
    pageActuel = getPage(pageActuel).options.choice[1].page;
  }

  showPage(getPage(pageActuel));
};

// point d'entrée !
// console.log(getPage(pageActuel));
showPage(getPage(pageActuel));
