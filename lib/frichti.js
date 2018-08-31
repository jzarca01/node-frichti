const request = require('request-promise');
const httpsAgent = require('https-agent');

class Frichti {
    constructor() {
        this.userId = null;
        this.accessToken = null
      }

    setAccessToken(accessToken) {
        this.accessToken = Buffer.from(accessToken).toString('base64')
    }

    setUserId(userId) {
        this.userId = userId;
    }

    async login(email, password) {
        try {
            const login = await request({
                method: 'POST',
                url: 'https://ios-api-gateway.frichti.co/auth/token',
                body: {
                    grant_type: "password",
                    password: password,
                    email: email
                },
                headers: {
                    'User-Agent': 'Frichti/3.1.1 (com.frichti.frichti; build:1; iOS 11.4.1) Alamofire/4.2.0',
                    'Accept': 'application/json; version=2.1.0',
                    'Content-Type': 'application/json'
                },
                json: true
            })
            this.setAccessToken(login.token)
            this.setUserId(login.id)
            return login
        }
        catch(err) {
            console.log('error with login', err)
        }
    }

    async getProfile() {
        try {
            const profile = await request({
                method: 'GET',
                url: `https://ios-api-gateway.frichti.co/customers/${this.userId}`,
                headers: {
                    'User-Agent': 'Frichti/3.1.1 (com.frichti.frichti; build:1; iOS 11.4.1) Alamofire/4.2.0',
                    'Accept': 'application/json; version=2.1.0',
                    'Content-Type': 'application/json'
                },
                auth: {
                    bearer: this.accessToken,
                    sendImmediately: true
                },
                json: true
            })
            return profile
        }
        catch(err) {
            console.log('error with getProfile', err)
        }
    }

    async getOrders() {
        try {
            const orders = await request({
                method: 'GET',
                url: `https://ios-api-gateway.frichti.co/orders`,
                headers: {
                    'User-Agent': 'Frichti/3.1.1 (com.frichti.frichti; build:1; iOS 11.4.1) Alamofire/4.2.0',
                    'Accept': 'application/json; version=2.1.0',
                    'Content-Type': 'application/json'
                },
                qs: {
                    customerId: this.userId,
                    items: true,
                    images: true,
                    limit: 50,
                    offset: 0,
                    order: '-created_at'
                },
                auth: {
                    bearer: this.accessToken,
                    sendImmediately: true
                },
                json: true
            })
            return orders
        }
        catch(err) {
            console.log('error with getOrders', err)
        }
    }

    async getCustomerAnalytics() {
        try {
            const analytics = await request({
                method: 'GET',
                url: `https://ios-api-gateway.frichti.co/customers/analytics`,
                headers: {
                    'User-Agent': 'Frichti/3.1.1 (com.frichti.frichti; build:1; iOS 11.4.1) Alamofire/4.2.0',
                    'Accept': 'application/json; version=2.1.0',
                    'Content-Type': 'application/json'
                },
                auth: {
                    bearer: this.accessToken,
                    sendImmediately: true
                },
                json: true
            })
            return analytics
        }
        catch(err) {
            console.log('error with getCustomerAnalytics', err)
        }
    }

    async getAddresses() {
        try {
            const addresses = await request({
                method: 'GET',
                url: `https://ios-api-gateway.frichti.co/address_books`,
                headers: {
                    'User-Agent': 'Frichti/3.1.1 (com.frichti.frichti; build:1; iOS 11.4.1) Alamofire/4.2.0',
                    'Accept': 'application/json; version=2.1.0',
                    'Content-Type': 'application/json'
                },
                auth: {
                    bearer: this.accessToken,
                    sendImmediately: true
                },
                json: true
            })
            return addresses
        }
        catch(err) {
            console.log('error with getAddresses', err)
        }
    }

    async getSlots() {
        try {
            const timeslots = await await request({
                method: 'GET',
                url: `https://ios-api-gateway.frichti.co/slots`,
                headers: {
                    'User-Agent': 'Frichti/3.1.1 (com.frichti.frichti; build:1; iOS 11.4.1) Alamofire/4.2.0',
                    'Accept': 'application/json; version=2.1.0',
                    'Content-Type': 'application/json'
                },
                auth: {
                    bearer: this.accessToken,
                    sendImmediately: true
                },
                json: true
            })
            return timeslots
        }
        catch(err) {
            console.log('error with getSlots', err)
        }
    }

    async getMenu() {
        try {
            const menu = await await request({
                method: 'GET',
                url: `https://ios-api-gateway.frichti.co/menu`,
                headers: {
                    'User-Agent': 'Frichti/3.1.1 (com.frichti.frichti; build:1; iOS 11.4.1) Alamofire/4.2.0',
                    'Accept': 'application/json; version=2.1.0',
                    'Content-Type': 'application/json'
                },
                auth: {
                    bearer: this.accessToken,
                    sendImmediately: true
                },
                json: true
            })
            return menu
        }
        catch(err) {
            console.log('error with getMenu', err)
        }
    }
}

module.exports = Frichti;