class StocksAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000'
    }

    getStocks() {
        return fetch(this.baseUrl)
        .then(res => res.json()
        )
    }
}