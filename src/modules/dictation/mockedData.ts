import {Dictation} from './interface';

export const mockedDictations: Dictation[] = [
  {
    id: '1',
    name: 'Les courses en mer',
    text:
      'Les courses en mer\n\nSur les quais, la foule agglutinée qui lance à cor et à cri un au revoir aux équipages annonce l\'imminence du départ. "Ohé !" Des mains et des mouchoirs, semblables à des oriflammes bariolées, sont agités par la famille, les amis, des enfants... Puis les ancres surjalées sont relevées: "Larguez les amarres !"\n\nQu\'il s\'agisse de Christophe Colomb, de Florence Arthaud ou du charismatique Eric Tabarly, que ce soit à bord de trois-mâts, de catamarans ou de simples canots, les navigateurs, inlassables, depuis la nuit des temps, ont sillonné les océans. Tous ces découvreurs d\'îlots inconnus, ces marins sportifs familiers des top niveaux et ces scientifiques de haut vol ont confié leur phénoménal destin à la mer.',
    choiceInputs: [
      {
        position: 4,
        originalTextLength: 7,
        choiceInputID: '1',
        correctChoiceID: '1',
        choices: [
          {text: 'courses', choiceID: '1'},
          {text: 'course', choiceID: '2'},
          {text: 'cources', choiceID: '3'},
        ],
      },
      {
        position: 24,
        originalTextLength: 3,
        choiceInputID: '2',
        correctChoiceID: '1',
        choices: [
          {text: 'les', choiceID: '1'},
          {text: 'lait', choiceID: '2'},
          {text: 'laid', choiceID: '3'},
        ],
      },
      {
        position: 15,
        originalTextLength: 3,
        choiceInputID: '3',
        correctChoiceID: '1',
        choices: [
          {text: 'mer', choiceID: '1'},
          {text: 'mère', choiceID: '2'},
          {text: 'maire', choiceID: '3'},
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Demain, dès l’aube',
    text:
      'Demain, dès l’aube, à l’heure où blanchit la campagne,\nJe partirai. Vois-tu, je sais que tu m’attends.\nJ’irai par la forêt, j’irai par la montagne.\nJe ne puis demeurer loin de toi plus longtemps.\n\nJe marcherai les yeux fixés sur mes pensées,\nSans rien voir au dehors, sans entendre aucun bruit,\nSeul, inconnu, le dos courbé, les mains croisées,\nTriste, et le jour pour moi sera comme la nuit.\n\nJe ne regarderai ni l’or du soir qui tombe,\nNi les voiles au loin descendant vers Harfleur,\nEt quand j’arriverai, je mettrai sur ta tombe\nUn bouquet de houx vert et de bruyère en fleur.',
    choiceInputs: [
      {
        position: 8,
        originalTextLength: 3,
        choiceInputID: '1',
        correctChoiceID: '3',
        choices: [
          {text: 'dés', choiceID: '1'},
          {text: 'des', choiceID: '2'},
          {text: 'dès', choiceID: '3'},
          {text: 'dé', choiceID: '4'},
          {text: 'dais', choiceID: '5'},
        ],
      },
      {
        position: 58,
        originalTextLength: 8,
        choiceInputID: '2',
        correctChoiceID: '2',
        choices: [
          {text: 'partirer', choiceID: '1'},
          {text: 'partirai', choiceID: '2'},
          {text: 'partirais', choiceID: '3'},
          {text: 'partirait', choiceID: '4'},
        ],
      },
    ],
  },
  {
    id: '3',
    name: "Le Petit Bonhomme de pain d'épice",
    text:
      "Le Petit Bonhomme de pain d'épice\n\nUne vieille femme était en train de faire du pain d'épice. Comme il lui restait de la pâte, elle façonna un petit bonhomme. Avec des raisins secs, elle dessina des yeux, un nez, un grand sourire et les boutons de son habit. Puis elle le mit à cuire. Au bout d'un moment, elle entendit tambouriner à la porte du four...\nElle l'ouvrit et, à sa grande surprise, le petit bonhomme de pain d'épice en sortit d'un bond. Elle voulut l'attraper, mais il lui échappa en criant.",
    choiceInputs: [
      {
        position: 47,
        originalTextLength: 5,
        choiceInputID: '1',
        correctChoiceID: '3',
        choices: [
          {text: 'famme', choiceID: '1'},
          {text: 'fame', choiceID: '2'},
          {text: 'femme', choiceID: '3'},
        ],
      },
      {
        position: 71,
        originalTextLength: 5,
        choiceInputID: '2',
        correctChoiceID: '4',
        choices: [
          {text: 'pheire', choiceID: '1'},
          {text: 'fère', choiceID: '2'},
          {text: 'fer', choiceID: '3'},
          {text: 'faire', choiceID: '4'},
        ],
      },
    ],
  },
];
