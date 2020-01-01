const menutItems: {
  title: string;
  onPress: () => void;
  hasRightArrow?: boolean;
  itemLogoName?: string;
}[] = [
  {
    title: 'Je crée ma Dictée à Choix Multiples',
    onPress: () => {},
    hasRightArrow: true,
    itemLogoName: 'edit',
  },
];

export const useDrawerMenu = () => {
  return {menutItems};
};
