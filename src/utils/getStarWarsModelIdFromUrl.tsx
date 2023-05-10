export const getStarWarsModelIdFromUrl: (url: string) => number = (
  url: String
): number => {
  const chunks: string[] = url.split('/');
  const id: string = chunks[chunks.length - 2];

  return Number(id);
};
