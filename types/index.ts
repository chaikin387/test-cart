// types/index.ts
// Экспорты из base-selects
export {
	attributeBaseSelect,
	attributeValueSelect,
	categoryBaseSelect,
	productVariantBaseSelect,
	variantImageSelect,
	type AttributeBaseData,
	type AttributeValueData,
	type CategoryBaseData,
} from './base-selects'

// Экспорты из attribute
export { attributeGroupSelect, type AttributeGroup } from './attribute'

// Экспорты из category
export {
	categoryMenuSelect,
	categoryWithAttributesSelect,
	homeCategorySelect,
	type CategoryMenuItem,
	type CategoryWithAttributes,
	type CategoryWithProducts,
} from './category'

// Экспорты из product
export {
	productCardSelect,
	productPageSelect,
	productVariantPageSelect,
	type ProductCardItem,
	type ProductPageData,
	type ProductVariantPageData,
} from './product'
