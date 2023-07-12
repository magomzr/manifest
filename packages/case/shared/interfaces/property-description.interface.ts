import { PropType } from '../enums/prop-type.enum'
import { CurrencyOptions } from './property-options/currency-options.interface'
import { PropertyOptions } from './property-options/property-options.interface'
import { RelationOptions } from './property-options/relation-options.interface'

export interface PropertyDescription {
  propName: string
  label: string
  type: PropType
  options?: PropertyOptions | CurrencyOptions | RelationOptions
}
