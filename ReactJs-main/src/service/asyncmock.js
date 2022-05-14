const products = [
	{
		id: 0,
		category: "camisetas",
		title: "ARGENTINA TITULAR 2022",
		brand: "Adidas",
		price: 10999,
		stock: 9,
		picUrl:
			"https://cdn.shopify.com/s/files/1/0591/6196/8831/products/IMG-20211101-WA0021_540x.jpg?v=1635742582",
		description:
			"Camiseta utilizada por la Selección Argentina en la copa América 2021, con el parche de campeón",
	},
	{
		id: 1,
		category: "camisetas",
		title: "PSG TITULAR 2022",
		brand: "Nike",
		price: 8490,
		stock: 9,
		picUrl:
			"https://cdn.shopify.com/s/files/1/0591/6196/8831/products/IMG-20211002-WA0055_370x.jpg?v=1635523369",
		description:
			"Camiseta utilizada por el PSG en la temporada 2022 de la Liga de Francia"
	},
	{
		id: 2,
		category: "camisetas",
		title: "INTER TITULAR 2022",
		brand: "Nike",
		price: 8290,
		stock: 9,
		picUrl:
			"https://cdn.shopify.com/s/files/1/0591/6196/8831/products/IMG-20211106-WA0080_370x.jpg?v=1636221081",
		description:
			"Camiseta utilizada por el Inter de Milán en la temporada 2022 de la Liga Italiana"
	},
	{
		id: 3,
		category: "camisetas",
		title: "ARSENAL SUPLENTE 2005",
		brand: "Nike",
		price: 9990,
		stock: 9,
		picUrl:
			"https://cdn.shopify.com/s/files/1/0591/6196/8831/products/IMG_20211018_161113_370x.jpg?v=1635688848",
		description:
			"Camiseta utilizada por el Arsenal en la temporada 2005 de la Liga Inglesa"
	},
	{
		id: 4,
		category: "camisetas",
		title: "BARCELONA SUPLENTE 2002",
		brand: "Zomo",
		price: 8150,
		stock: 9,
		picUrl: "https://cdn.shopify.com/s/files/1/0591/6196/8831/products/IMG_20210416_170100_3_370x.jpg?v=1635701549",
		description:
		"Camiseta utilizada por el Barcelona en la temporada 2002 de la Liga Española"
	},
	{
		id: 5,
		category: "camisetas",
		title: "BRASIL TITULAR 2006",
		brand: "Nike",
		price: 500,
		stock: 9,
		picUrl:
			"https://cdn.shopify.com/s/files/1/0591/6196/8831/products/IMG-20210630-WA0050_370x.jpg?v=1630948617",
		description:
		"Camiseta utilizada por la selección de Brasil en la Copa Del Mundo Alemania 2006"
	},
	{
		id: 6,
		category: "shorts",
		title: "PSG SUPLENTE 2022",
		brand: "Nike",
		price: 7250,
		stock: 11,
		picUrl:
			"https://cdn.shopify.com/s/files/1/0591/6196/8831/products/IMG-20220210-WA0042_370x.jpg?v=1644585946",
		description:
			"Short utilizado por el PSG en la temporada 2022 de la liga de Francia"
	},
	{
		id: 7,
		category: "shorts",
		title: "INTER MIAMI 2022",
		brand: "Adidas",
		price: 7250,
		stock: 18,
		picUrl:
			"https://cdn.shopify.com/s/files/1/0591/6196/8831/products/IMG-20220210-WA0039_370x.jpg?v=1644585844",
		description:
			"Short utilizado por el INTER MIAMI en la temporada 2022 de la MLS"
	},
	{
		id: 8,
		category: "shorts",
		title: "NAPOLI 2022",
		brand: "EA7",
		price: 7250,
		stock: 14,
		picUrl:
			"https://cdn.shopify.com/s/files/1/0591/6196/8831/products/IMG-20220210-WA0045_370x.jpg?v=1644585703",
		description:
			"Short utilizado por el NAPOLI en la temporada 2022 de la Liga Italiana",
	},
	{
		id: 9,
		category: "shorts",
		title: "MANCHESTER CITY 2022",
		brand: "Puma",
		price: 7250,
		stock: 3,
		picUrl:
			"https://cdn.shopify.com/s/files/1/0591/6196/8831/products/IMG-20220210-WA0047_370x.jpg?v=1644585599",
		description:
			"Short utilizado por el MANCHESTER CITY en la temporada 2022 de la Liga Inglesa",
	},
	{
		id: 10,
		category: "shorts",
		title: "ROMA 2022",
		brand: "NewBalance",
		price: 7250,
		stock: 6,
		picUrl:
			"https://cdn.shopify.com/s/files/1/0591/6196/8831/products/IMG-20220210-WA0035_370x.jpg?v=1644585456",
		description:
			"Short utilizado por la ROMA FC en la temporada 2022 de la Liga Italiana"
	},
	{
		id: 11,
		category: "shorts",
		title: "WESTHAM 2022",
		brand: "Umbro",
		price: 7250,
		stock: 4,
		picUrl:
			"https://cdn.shopify.com/s/files/1/0591/6196/8831/products/IMG-20220210-WA0051_370x.jpg?v=1644585317",
		description:
			"Short utilizado por el WESTHAM en la  temporada 2022 de la Liga Inglesa"
	},
]

const task = new Promise((resp) => {
	resp(products)
}, 2000)

export const getItem = () => {
	return task
}
