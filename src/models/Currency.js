export default class Currency {
  constructor({
    id,
    name,
    short_code,
    code,
    precision,
    subunit,
    symbol,
    symbol_first,
    decimal_mark,
    thousands_separator,
  }) {
    this.id = id ?? ''
    this.name = name ?? ''
    this.shortCode = short_code ?? ''
    this.code = code ?? ''
    this.precision = this.#currencyPrecision(precision) ?? ''
    this.precisionNumber = precision ?? ''
    this.subunit = subunit ?? ''
    this.symbol = symbol ?? ''
    this.symbolFirst = symbol_first ?? ''
    this.decimalMark = decimal_mark ?? ''
    this.thousandsSeparator = thousands_separator ?? ''
  }

  #currencyPrecision(responsePrecision) {
    if (responsePrecision === 0) return 1
    return 1 / Math.pow(10, +responsePrecision)
  }
}
