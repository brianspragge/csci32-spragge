import { getInputSizeStyles, Size } from './size'
import { HTMLInputTypeAttribute } from 'react'
import { getVariantBorderStyles, getVariantInputTextStyles, getVariantOutlineStyles, Variant } from './variant'
import { getCommonStyles } from './tokens'

interface InputProps {
  className?: string
  defaultValue?: string | number
  id: string
  name: string
  placeholder?: string
  setValue?: (newValue: string) => void
  size?: Size
  type?: HTMLInputTypeAttribute
  value?: string | number
  variant?: Variant
}
export function Input({
  className = 'bg-sand-dune-50',
  defaultValue,
  id,
  name,
  placeholder,
  setValue,
  size = Size.MEDIUM,
  type = 'text',
  value,
  variant = Variant.PRIMARY,
}: InputProps) {
  const sizeCssClasses = getInputSizeStyles(size)
  const variantBorderCssClasses = getVariantBorderStyles(variant)
  const variantOutlineCssClasses = getVariantOutlineStyles(variant)
  const variantInputTextCssClasses = getVariantInputTextStyles(variant)
  const commonCssClasses = getCommonStyles()

  return (
    <input
      className={`${sizeCssClasses} ${variantBorderCssClasses} ${variantInputTextCssClasses} ${variantOutlineCssClasses} ${commonCssClasses} ${className}`}
      name={name}
      id={id}
      defaultValue={defaultValue}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={setValue ? (newValue) => setValue(newValue.currentTarget.value) : () => {}}
    />
  )
}
