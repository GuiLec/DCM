import {sliceDication, sliceText} from '../adapters';
import {mockedDictations} from '../mockedData';

describe('dictation adapters', () => {
  it('slices properly dictations', () => {
    const expected = [
      {text: 'Les ', type: 'hard'},
      {
        choices: [
          {text: 'courses', choiceID: '1'},
          {text: 'course', choiceID: '2'},
          {text: 'cources', choiceID: '3'},
        ],
        choiceInputID: '1',
        type: 'choice',
        originalTextLength: 7,
      },
      {
        text: ' en ',
        type: 'hard',
      },
      {
        choices: [
          {text: 'mer', choiceID: '1'},
          {text: 'mère', choiceID: '2'},
          {text: 'maire', choiceID: '3'},
        ],
        choiceInputID: '3',
        type: 'choice',
        originalTextLength: 3,
      },
      {
        text: '\n\nSur ',
        type: 'hard',
      },
      {
        choices: [
          {text: 'les', choiceID: '1'},
          {text: 'lait', choiceID: '2'},
          {text: 'laid', choiceID: '3'},
        ],
        type: 'choice',
        choiceInputID: '2',
        originalTextLength: 3,
      },
      {
        text:
          ' quais, la foule agglutinée qui lance à cor et à cri un au revoir aux équipages annonce l\'imminence du départ. "Ohé !" Des mains et des mouchoirs, semblables à des oriflammes bariolées, sont agités par la famille, les amis, des enfants... Puis les ancres surjalées sont relevées: "Larguez les amarres !"\n\nQu\'il s\'agisse de Christophe Colomb, de Florence Arthaud ou du charismatique Eric Tabarly, que ce soit à bord de trois-mâts, de catamarans ou de simples canots, les navigateurs, inlassables, depuis la nuit des temps, ont sillonné les océans. Tous ces découvreurs d\'îlots inconnus, ces marins sportifs familiers des top niveaux et ces scientifiques de haut vol ont confié leur phénoménal destin à la mer.',
        type: 'hard',
      },
    ];
    expect(sliceDication(mockedDictations[0])).toStrictEqual({
      elements: expected,
    });
  });

  it('slices properly dictations', () => {
    const expected = [
      [
        {text: 'Je', position: 0},
        {text: 'ne', position: 3},
        {text: 'veux', position: 6},
        {text: 'pas', position: 11},
        {text: 'travailler', position: 15},
      ],
      [{text: '', position: 26}],
      [
        {text: 'Mais', position: 27},
        {text: "j'aime", position: 32},
        {text: 'coder', position: 39},
      ],
    ];
    expect(
      sliceText("Je ne veux pas travailler\n\nMais j'aime coder"),
    ).toStrictEqual(expected);
  });
});
