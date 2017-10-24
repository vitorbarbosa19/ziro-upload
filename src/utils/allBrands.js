const arrayOfBrands = [
	{
		name: 'Luzia Fazzolli',
		ig_account: 'luziafazzollioficial'
	},
	{
		name: 'Di Collani',
		ig_account: 'dicollanioficial'
	},
	{
		name: 'Unique Chic',
		ig_account: 'uniquechicoficial'
	},
	{
		name: 'Nuxx',
		ig_account: 'nuxxoficial'
	},
	{
		name: 'Donna Ritz',
		ig_account: 'donnaritzoficial'
	},
	{
		name: 'Blessed',
		ig_account: 'blessedstore'
	},
	{
		name: 'Innocence',
		ig_account: 'innocencefashion'
	},
	{
		name: 'Ave Rara',
		ig_account: 'averarafashion'
	},
	{
		name: 'Karmani',
		ig_account: 'karmanioficial'
	},
	{
		name: 'Amissima',
		ig_account: 'amissimaoficial'
	},
	{
		name: 'Lovlity',
		ig_account: 'lovlity'
	},
	{
		name: 'Linny',
		ig_account: 'linnyoficial'
	},
	{
		name: 'Hush',
		ig_account: 'hushbyrosana'
	},
	{
		name: 'Loubucca',
		ig_account: 'loubucca'
	},
	{
		name: 'Champagne',
		ig_account: 'bychampagneoficial'
	},
	{
		name: 'Muse',
		ig_account: 'musebrasil'
	},
	{
		name: 'Doce Flor',
		ig_account: 'doceflor.oficial'
	},
	{
		name: 'Morina',
		ig_account: 'morinafashion'
	},
	{
		name: 'Chocoleite',
		ig_account: 'chocoleite68'
	},
	{
		name: 'La Chocole',
		ig_account: 'la_chocole'
	},
	{
		name: 'Duplo Sentido',
		ig_account: 'duplosentido_oficial'
	},
	{
		name: 'Poema Hit',
		ig_account: 'poemahitoficial'
	},
	{
		name: 'Eva Bela',
		ig_account: 'evabellaoficial'
	},
	{
		name: 'Rock Lola',
		ig_account: 'rocklola_'
	},
	{
		name: 'Esmeral',
		ig_account: 'esmeral_oficial'
	},
]

export const allBrandNames = arrayOfBrands.map( (brand) => {
	return brand.name
}).sort()

export const allBrandAccounts = arrayOfBrands.map( (brand) => {
	return brand.ig_account
}).sort()



