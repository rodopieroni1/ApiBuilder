
const formaters = {
    singleParams : ({property, data, symbol}) => `${property} ${symbol} ${data}`,
    dualParams : ({data, symbol}) => `${symbol} ${data}`,
    tripleParams : ({property, data:[data1, data2], symbol}) => `${property} ${symbol} ${data1} AND ${data2}` 
}
const methods = {
    and: {
        symbol:'AND',
        formater:'dualParams',
        display_name: 'Y..'
    },
    eq: {
        symbol:'=',
        formater:'dualParams',
        display_name: 'Igual que'
    },
    ne: {
        symbol:'!=',
        formater:'dualParams',
        display_name: 'Distinto que'
    },
    btw: {
        symbol:'BETWEEN',
        formater:'tripleParams',
        display_name: 'Entre dos valores'
    },
    gt: {
        symbol:'>',
        formater:'dualParams',
        display_name: 'Mayor que'
    },
    lt: {
        symbol:'<',
        formater:'dualParams',
        display_name: 'Menor que'
    },
    gte: {
        symbol:'>=',
        formater:'dualParams',
        display_name: 'Mayor o igual que'
    },
    lte: {
        symbol:'<=',
        formater:'dualParams',
        display_name: 'Menor o igual que'
    },
    lmt: {
        symbol:'LIMIT',
        formater:'singleParams',
        display_name: 'Limitar'
    }
}