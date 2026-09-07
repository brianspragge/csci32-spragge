'use client'

import { ReactNode } from 'react'
import { getInputSizeStyles, Size } from './size'
import { getVariantBackgroundStyles, getVariantButtonTextStyles, getVariantOutlineStyles, Variant } from './variant'
import { getCommonStyles } from './tokens'

interface ButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  size?: Size
  variant?: Variant
}

export const Button = ({
  children,
  className,
  href,
  onClick,
  size = Size.MEDIUM,
  variant = Variant.SECONDARY,
}: ButtonProps) => {
  const sizeCssClasses = getInputSizeStyles(size)
  const variantBackgroundCssClasses = getVariantBackgroundStyles(variant)
  const variantOutlineCssClasses = getVariantOutlineStyles(variant)
  const variantButtonTextCssClasses = getVariantButtonTextStyles(variant)
  const commonCssClasses = getCommonStyles()

  const completedCssClasses = `${sizeCssClasses} ${variantBackgroundCssClasses} ${variantOutlineCssClasses} ${variantButtonTextCssClasses} ${commonCssClasses} ${className}`
  return href ? (
    <a href={href} className={completedCssClasses}>
      {children}
    </a>
  ) : (
    <button className={completedCssClasses} onClick={onClick}>
      {children}
    </button>
  )
}
