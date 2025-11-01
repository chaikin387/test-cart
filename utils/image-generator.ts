export class ImageGenerator {
	private static readonly BASE_URL = 'https://picsum.photos'
	private static readonly CATEGORY_THEMES: Record<string, string> = {
		Пиццы: 'food,pizza,italian',
		Завтраки: 'breakfast,food,morning',
		Закуски: 'appetizer,snack,food',
		Комбо: 'combo,set,collection',
		Десерты: 'dessert,sweet,cake',
		Кофе: 'coffee,drink,cafe',
		Напитки: 'drink,beverage,refreshment',
		Коктейли: 'cocktail,drink,bar',
	}

	static getImageUrl(category: string, width: number = 400, height: number = 300): string {
		const theme = this.CATEGORY_THEMES[category] || 'food'
		const seed = this.getSeedForCategory(category)

		return `${this.BASE_URL}/seed/${seed}/${width}/${height}`
	}

	private static getSeedForCategory(category: string): string {
		const seeds: Record<string, string> = {
			Пиццы: 'pizza123',
			Завтраки: 'breakfast456',
			Закуски: 'snack789',
			Комбо: 'combo101',
			Десерты: 'dessert202',
			Кофе: 'coffee303',
			Напитки: 'drink404',
			Коктейли: 'cocktail505',
		}

		return seeds[category] || 'food999'
	}

	static generateVariantImages(
		category: string,
		variantName: string,
	): Array<{
		url: string
		alt: string
		position: number
	}> {
		return [
			{
				url: this.getImageUrl(category, 400, 300),
				alt: `${variantName} - вид 1`,
				position: 1,
			},
			{
				url: this.getImageUrl(category, 400, 300),
				alt: `${variantName} - вид 2`,
				position: 2,
			},
		]
	}
}
