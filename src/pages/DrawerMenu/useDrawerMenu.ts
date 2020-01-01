const menutItems: {title: string; onPress: () => void}[] = [
  {title: 'Hello', onPress: () => {}},
  {title: 'Je crée ma Dictée à Choix Multiples', onPress: () => {}},
];

export const useDrawerMenu = () => {
  return {menutItems};
};
