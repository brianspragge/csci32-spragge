export enum Variant {
  PRIMARY,
  SECONDARY,
  TERTIARY,
}

export function getVariantBackgroundStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'bg-deep-crimson-500 hover:bg-deep-crimson-700 active:bg-deep-crimson-800'
    case Variant.SECONDARY:
      return 'bg-baltic-blue-500 hover:bg-baltic-blue-700 active:bg-baltic-blue-800'
    case Variant.TERTIARY:
      return 'bg-olive-leaf-500 hover:bg-olive-leaf-700 active:bg-olive-leaf-800'
  }
}
export function getVariantBorderStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'border-2 border-deep-crimson-500'
    case Variant.SECONDARY:
      return 'border-2 border-baltic-blue-500'
    case Variant.TERTIARY:
      return 'border-2 border-olive-leaf-500'
  }
}

export function getVariantOutlineStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'outline-deep-crimson-600'
    case Variant.SECONDARY:
      return 'outline-baltic-blue-600'
    case Variant.TERTIARY:
      return 'outline-olive-leaf-600'
  }
}

// (Brian): I do not know what these are for
export function getVariantInputTextStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'text-deep-crimson-300'
    case Variant.SECONDARY:
      return 'text-baltic-blue-300'
    case Variant.TERTIARY:
      return 'text-olive-leaf-300'
  }
}

export function getVariantButtonTextStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'text-deep-crimson-100'
    case Variant.SECONDARY:
      return 'text-baltic-blue-100'
    case Variant.TERTIARY:
      return 'text-olive-leaf-100'
  }
}
