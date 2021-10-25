import axios from "axios";

const options: any = {
    method: 'GET',
    url: 'https://api.coingecko.com/api/v3/coins/markets',
    params: {
        'vs_currency': 'usd',
        'order': 'market_cap_desc',
        'per_page': 20,
        'page': 1,
        'sparkline': false
    }
}

export const getCryptoValue = async ()=>{
    return await axios.request(options)
}

