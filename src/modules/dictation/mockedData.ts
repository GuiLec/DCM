import {Dictation} from './interface';

export const mockedDictations: Dictation[] = [
  {
    id: '1',
    name: '',
    text:
      'Les courses en mer\n\nSur les quais, la foule agglutinée qui lance à cor et à cri un au revoir aux équipages annonce l\'imminence du départ. "Ohé !" Des mains et des mouchoirs, semblables à des oriflammes bariolées, sont agités par la famille, les amis, des enfants... Puis les ancres surjalées sont relevées: "Larguez les amarres !"\n\nQu\'il s\'agisse de Christophe Colomb, de Florence Arthaud ou du charismatique Eric Tabarly, que ce soit à bord de trois-mâts, de catamarans ou de simples canots, les navigateurs, inlassables, depuis la nuit des temps, ont sillonné les océans. Tous ces découvreurs d\'îlots inconnus, ces marins sportifs familiers des top niveaux et ces scientifiques de haut vol ont confié leur phénoménal destin à la mer.',
    choiceInputs: [
      {
        position: 4,
        originalTextLength: 7,
        choiceInputID: '1',
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
        choices: [
          {text: 'mer', choiceID: '1'},
          {text: 'mère', choiceID: '2'},
          {text: 'maire', choiceID: '3'},
        ],
      },
    ],
  },
];
