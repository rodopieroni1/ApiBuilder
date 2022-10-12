
const formaters = {
  singleParams : ({data, symbol}) => `${symbol} '${data}'`,
  dualParams : ({field, data, symbol}) => `${field} ${symbol} '${data}'`,
  tripleParams : ({field, data:[data1, data2], symbol}) => `${field} ${symbol} ${data1} AND ${data2}` 
}
const methods = {
  eq: {
      symbol:'=',
      formater:'dualParams',
      display_name: 'Igual que',
      name: 'eq',
      data_type: ['text', 'number']
  },
  ne: {
      symbol:'!=',
      formater:'dualParams',
      display_name: 'Distinto que',
      name: 'ne',
      data_type: ['text', 'number']
  },
  gt: {
      symbol:'>',
      formater:'dualParams',
      display_name: 'Mayor que',
      name: 'gt',
      data_type: ['number','date']
  },
  lt: {
      symbol:'<',
      formater:'dualParams',
      display_name: 'Menor que',
      name: 'lt',
      data_type: ['number','date']
  },
  gte: {
      symbol:'>=',
      formater:'dualParams',
      display_name: 'Mayor o igual que',
      name: 'gte',
      data_type: ['number','date']
      
  },
  lte: {
      symbol:'<=',
      formater:'dualParams',
      display_name: 'Menor o igual que',
      name:'lte',
      data_type: ['number','date']
  },
}

const filterHandler = (filters) => {
  if(!filters.length) return ''
  const translatedFilters = filters.map(({operator, field, data}) => {
    const method = {...methods[operator],field,data}
    const formater = formaters[method.formater]
    return formater(method)
  }).join(' AND ')
  return ' WHERE ' + translatedFilters
}

module.exports = {filterHandler, methods, formaters}