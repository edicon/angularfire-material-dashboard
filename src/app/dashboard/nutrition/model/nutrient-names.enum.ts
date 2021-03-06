export enum EssentialNutrientNames {
  Energy = 'Energy',
  Water = 'Water',
  'Chromium, Cr' = 'Chromium', // Missing
  'Chloride, Cl' = 'Chloride', // Missing
  'Molybdenum, Mo' = 'Molybdenum', // Missing
  'Iodine, I' = 'Iodine', // Missing
  'Calcium, Ca' = 'Calcium',
  'Iron, Fe' = 'Iron',
  'Magnesium, Mg' = 'Magnesium',
  'Phosphorus, P' = 'Phosphorus',
  'Potassium, K' = 'Potassium',
  'Sodium, Na' = 'Sodium',
  'Zinc, Zn' = 'Zinc',
  'Copper, Cu' = 'Copper',
  'Manganese, Mn' = 'Manganese',
  'Selenium, Se' = 'Selenium',
  'Fluoride, F' = 'Fluoride',
  'Vitamin C, total ascorbic  acid' = 'Vitamin C',
  Thiamin = 'Vitamin B1',
  Riboflavin = 'Vitamin B2',
  Niacin = 'Vitamin B3',
  'Pantothenic acid' = 'Vitamin B5',
  'Vitamin B6' = 'Vitamin B6',
  Biotin = 'Vitamin B7', // Missing
  'Folate, total' = 'Vitamin B9',
  'Choline, total' = 'Choline',
  'Vitamin B12' = 'Vitamin B12',
  'Vitamin A, RAE' = 'Vitamin A',
  'Vitamin E (alpha-tocopherol)' = 'Vitamin E',
  'Vitamin D (D2 + D3)' = 'Vitamin D',
  'Vitamin K (phylloquinone)' = 'Vitamin K',
  '18:2 undifferentiated' = 'Linoleic acid',
  '18:3 n-3 c,c,c (ALA)' = 'Alpha-linolenic acid',
  '20:5 n-3 (EPA)' = 'Eicosapentaenoic acid',
  '22:6 n-3 (DHA)' = 'Docosahexaenoic acid',
  Tryptophan = 'Tryptophan',
  Threonine = 'Threonine',
  Isoleucine = 'Isoleucine',
  Leucine = 'Leucine',
  Lysine = 'Lysine',
  Methionine = 'Methionine',
  Phenylalanine = 'Phenylalanine',
  Valine = 'Valine',
  Histidine = 'Histidine'
}

export enum MacronutrientNames {
  Protein = 'Protein',
  'Total lipid (fat)' = 'Lipid',
  'Carbohydrate, by difference' = 'Carbohydrate'
}

export enum NonEssentialNutrientNames {
  Ash = 'Ash',
  'Starch' = 'Starch',
  'Sugars, total' = 'Sugars',
  Sucrose = 'Sucrose',
  'Glucose (dextrose)' = 'Glucose',
  Fructose = 'Fructose',
  Lactose = 'Lactose',
  Maltose = 'Maltose',
  Galactose = 'Galactose',
  'Fatty acids, total saturated' = 'Saturated fatty acids',
  '4:0' = 'Butyric acid',
  '6:0' = 'Caproic acid',
  '8:0' = 'Caprylic acid',
  '10:0' = 'Capric acid',
  '12:0' = 'Lauric acid',
  '13:0' = 'Tridecylic acid',
  '14:0' = 'Myristic acid',
  '15:0' = 'Pentadecylic acid',
  '16:0' = 'Palmitic acid',
  '17:0' = 'Margaric acid',
  '18:0' = 'Stearic acid',
  '20:0' = 'Arachidic acid',
  '22:0' = 'Behenic acid',
  '24:0' = 'Lignoceric acid',
  'Fatty acids, total monounsaturated' = 'Monounsaturated fatty acids',
  '14:1' = 'Myristoleic acid',
  '16:1 undifferentiated' = 'Palmitoleic acid',
  '17:1' = 'Heptadecenoic acid',
  '18:1 undifferentiated' = 'Oleic acid',
  '18:1-11 t (18:1t n-7)' = 'Vaccenic acid',
  '20:1' = 'Gadoleic acid',
  '22:1 undifferentiated' = 'Docosenoic acid',
  '22:1 c' = 'Erucic acid',
  '24:1 c' = 'Nervonic acid',
  'Fatty acids, total polyunsaturated' = 'Polyunsaturated fatty acids',
  '18:2 CLAs' = 'Conjugated linoleic acid',
  '18:3 undifferentiated' = 'Linolenic acid',
  '18:3 n-6 c,c,c' = 'Gamma-linolenic acid (GLA)',
  '18:4' = 'Parinaric acid',
  '20:2 n-6 c,c' = 'Eicosadienoic acid',
  '20:3 undifferentiated' = 'Eicosatrienoic acid',
  '20:4 undifferentiated' = 'Eicosatetraenoic acid',
  '20:4 n-6' = 'Arachidonic acid',
  '22:5 n-3 (DPA)' = 'Docosapentaenoic acid',
  'Fatty acids, total trans' = 'Trans fatty acids',
  'Fatty acids, total trans-monoenoic' = 'Trans-monoenoic fatty acids',
  'Fatty acids, total trans-polyenoic' = 'Trans-polyenoic fatty acids',
  'Alcohol, ethyl' = 'Alcohol',
}

export enum BeneficialNutrientNames {
  'Fiber, total dietary' = 'Fiber',
  Betaine = 'Betaine',
  Lycopene = 'Lycopene',
  'Lutein + zeaxanthin' = 'Lutein and Zeaxanthin',
  Theobromine = 'Theobromine'
}

export const NutrientNames = Object.assign(
  {},
  MacronutrientNames,
  EssentialNutrientNames,
  NonEssentialNutrientNames,
  BeneficialNutrientNames,
);
