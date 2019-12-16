import {useDictationArea} from '../useDictationArea';
import {mockedDictations} from '../../../../../modules/dictation/mockedData';

describe('DictationArea', () => {
  it('slices properly dictations', () => {
    const {sliceDication} = useDictationArea();
    const expected = [
      {text: 'Les ', type: 'hard'},
      {
        choices: [{text: 'courses'}, {text: 'course'}, {text: 'cources'}],
        type: 'choice',
      },
      {
        text:
          ' en mer\n\nSur les quais, la foule agglutinée qui lance à cor et à cri un au revoir aux équipages annonce l\'imminence du départ. "Ohé !" Des mains et des mouchoirs, semblables à des oriflammes bariolées, sont agités par la famille, les amis, des enfants... Puis les ancres surjalées sont relevées: "Larguez les amarres !"\n\nQu\'il s\'agisse de Christophe Colomb, de Florence Arthaud ou du charismatique Eric Tabarly, que ce soit à bord de trois-mâts, de catamarans ou de simples canots, les navigateurs, inlassables, depuis la nuit des temps, ont sillonné les océans. Tous ces découvreurs d\'îlots inconnus, ces marins sportifs familiers des top niveaux et ces scientifiques de haut vol ont confié leur phénoménal destin à la mer.',
        type: 'hard',
      },
    ];
    expect(sliceDication(mockedDictations[0])).toStrictEqual(expected);
  });
});
