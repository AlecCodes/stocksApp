export const priceLoader = async ({params}) => {
    const apiKey = "e03efc5dcd6a841a19444850dff28974"

    const applcall = 'https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=e03efc5dcd6a841a19444850dff28974'

    const symbol = params.symbol
    const call = `https://financialmodelingprep.com/api/v3/quote-short/${symbol}?apikey=${apiKey}`
    return (await fetch(call)).json()
}
