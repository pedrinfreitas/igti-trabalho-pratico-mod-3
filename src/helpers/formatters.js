const moneyFormatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

//const formatNumber = (value) => Intl.NumberFormat('pt-BR').format(value);

const formatMoney = (value) => moneyFormatter.format(value);

const formatPercentage = (value) => `${value.toFixed(2).replace('.', ',')}%`;

export { formatMoney, formatPercentage };