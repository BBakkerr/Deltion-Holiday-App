export function getRegionFromProvince(province) {

  const noord = [
    'flevoland',
    'friesland',
    'groningen',
    'drenthe',
    'overijssel',
    'noord-holland',
  ];

  const midden = [
    'utrecht',
    'gelderland',
    'zuid-holland',
  ];

  const zuid = [
    'zeeland',
    'noord-brabant',
    'limburg',
  ];

  const lowerProvince =
    province.toLowerCase();

  if (noord.includes(lowerProvince)) {
    return 'noord';
  }

  if (midden.includes(lowerProvince)) {
    return 'midden';
  }

  if (zuid.includes(lowerProvince)) {
    return 'zuid';
  }

  return 'noord';
}