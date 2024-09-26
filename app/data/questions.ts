// app/data/questions.ts
const questions = [
  {
    question: "Quel club a remporté le plus de titres en Ligue 1 ?",
    options: [
      "Olympique de Marseille",
      "Paris Saint-Germain",
      "Saint-Étienne",
      "Olympique Lyonnais",
    ],
    correctAnswer: "Paris Saint-Germain",
    explanation:
      "Le PSG est le recordman de titres (12). Il devance l'ASSE (10) et l'OM (9). L'OL en compte 7.",
  },
  {
    question:
      "En quelle année le championnat de France de football a-t-il été fondé ?",
    options: ["1912", "1922", "1932", "1952"],
    correctAnswer: "1932",
    explanation:
      "Le 1er championnat de France de football unique et professionnel est organisé à partir de 1932. D'abord crée sous le nom de « Division nationale », il sera renommé en 1945 en « Division 1 », puis deviendra en 2002 la « Ligue 1 », son nom actuel.",
  },
  {
    question:
      "Quel club a remporté la première édition du Championnat de France ?",
    options: [
      "Stade de Reims",
      "Olympique d'Antibes",
      "Olympique Lillois",
      "Olympique de Marseille",
    ],
    correctAnswer: "Olympique Lillois",
    explanation:
      "À l'issue de la saison 1932-1933, l'Olympique Lillois devient le 1er champion de France officiel, grâce à son succès sur l'AS Cannes (4-3). Le championnat était à l'époque divisé en 2 groupes de 10 équipes, puis une finale.",
  },
  {
    question:
      "Quel joueur détient le record du plus grand nombre de buts marqués en Ligue 1 ?",
    options: [
      "Delio Onnis",
      "Jean-Pierre Papin",
      "Carlos Bianchi",
      "Kylian Mbappé",
    ],
    correctAnswer: "Delio Onnis",
    explanation:
      "Avec 299 buts au compteur, Delio Onnis est le meilleur buteur de l'histoire de la Ligue 1. L'Italo-argentin n'a pourtant jamais été sélectionné, ni par l'Italie, ni par l'Argentine ! Mbappé s'est arrêté à 191 réalisations, Bianchi en compte 179 et Papin 156.",
  },
  {
    question: "Qui est l'entraîneur le plus titré en Ligue 1 ?",
    options: [
      "Robert Herbin",
      "Albert Batteux",
      "Lucien Leduc",
      "Laurent Blanc",
    ],
    correctAnswer: "Albert Batteux",
    explanation:
      "Albert Batteux est le coach recordman avec 8 titres à son palmarès (5 avec le	Stade de Reims et 3 avec l'AS Saint-Étienne), loin devant Robert Herbin, Lucien Leduc et Laurent Blanc, deuxièmes ex æquo avec 4 titres.",
  },
  {
    question: "Quel est le plus grand stade d'une équipe de Ligue 1 ?",
    options: [
      "Groupama Stadium",
      "Parc des Princes",
      "Stade Orange Vélodrome",
      "Stade de France",
    ],
    correctAnswer: "Stade Orange Vélodrome",
    explanation:
      "Avec une capacité de 67 394 places, c'est le Vélodrome (Marseille) qui est le plus grand stade de L1. Le Groupama Stadium (Lyon) peut accueillir 59 186 personnes, alors que le Parc des Princes (Paris) compte 47 929 places. Le Stade de France (Saint-Denis) est le plus grand stade du pays (80 698 places), mais il n'a pas de club résident.",
  },
  {
    question: "Combien d'équipes participent à la Ligue 1 ?",
    options: ["14", "16", "18", "20"],
    correctAnswer: "18",
    explanation:
      "Après la fin de la Seconde Guerre mondiale (1945), le Championnat de France a toujours oscillé entre 18 et 20 clubs. Depuis la saison 2023/2024, la Ligue 1 est revenue à 18 équipes.",
  },
  {
    question: "Quel est le club le plus ancien de Ligue 1 encore en activité ?",
    options: [
      "Olympique de Marseille",
      "Stade de Reims",
      "Le Havre",
      "AS Saint-Étienne",
    ],
    correctAnswer: "Le Havre",
    explanation:
      "Le Havre Athletic Club (HAC) a été fondé en 1894, l'OM en 1899, l'AS Saint-Étienne en 1919, alors que le Stade de Reims n'a vu le jour qu'en 1931.",
  },
  {
    question: "Quel club a remporté le plus de Coupes de France ?",
    options: [
      "AS Saint-Étienne",
      "Olympique de Marseille",
      "Paris Saint-Germain",
      "RC Lens",
    ],
    correctAnswer: "Paris Saint-Germain",
    explanation:
      "Le PSG est le recordman de victoires en Coupe de France avec 15 trophées à son actif. L'OM en a remporté 10, Saint-Étienne 6, et étonnement, le RC Lens n'en a encore jamais gagné ! ",
  },
  {
    question: "Quel est le nom de l'organisme qui gère la Ligue 1 ?",
    options: ["FFF", "LFP", "UEFA", "FIFA"],
    correctAnswer: "LFP",
    explanation:
      "La Ligue de Football Professionnel (LFP) gère le championnat de France. La FFF est, quant à elle, la Fédération Française de Football et gère la Coupe de France. L'UEFA est l'instance qui gère le football à l'échelle européenne (Euro et Coupes d'Europe), tandis que la FIFA gère le football international, notamment la Coupe du monde.",
  },
  {
    question: "Quel club a eu le plus de titres consécutifs en Ligue 1 ?",
    options: [
      "Olympique de Marseille",
      "Paris Saint-Germain",
      "Olympique Lyonnais",
      "AS Saint-Étienne",
    ],
    correctAnswer: "Olympique Lyonnais",
    explanation:
      "À son palmarès, l'OL compte 7 titres, tous consécutifs entre 2002 et 2008 ! L'OM, le PSG et l'ASSE ont, eux, conquis 4 titres d'affilée.",
  },
  {
    question: "Quel est le nombre total de clubs ayant remporté la Ligue 1 ?",
    options: ["10", "15", "20", "25"],
    correctAnswer: "20",
    explanation:
      "Vingt clubs différents ont remporté la Ligue 1 depuis sa création : Olympique lillois, FC Sète, FC Sochaux-Montbéliard, RC Paris, Olympique de Marseille, LOSC Lille, CO Roubaix-Tourcoing, Stade de Reims, Girondins de Bordeaux, OGC Nice, AS Saint-Étienne, AS Monaco, FC Nantes, RC Strasbourg, Paris Saint-Germain, AJ Auxerre, RC Lens, Olympique lyonnais et Montpellier HSC.",
  },
];

export default questions;
