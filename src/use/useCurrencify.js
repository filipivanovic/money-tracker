// imports
import { useStoreSettings } from "stores/storeSettings"

const storeSettings = useStoreSettings()

export const useCurrencify = (amount) => {
//   format: '+ $ 4,999.00' | '- $ 999.00'

  let posNegSymbol = ''
  if (amount > 0) posNegSymbol = '+'
  else if (amount < 0) posNegSymbol = '-'

  const amountPositive = Math.abs(amount)
  const currencySymbol = storeSettings.settings.currencySymbol

  const amountFormatted = amountPositive.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  return `${ posNegSymbol } ${ currencySymbol } ${ amountFormatted }`
}
