const order = {
    "id": 1001,
    "petId": 1,
    "quantity": 1,
    "shipDate": "2022-07-11T03:23:31.397Z",
    "status": "placed",
    "complete": true
}

export class Store {

    getInventory() {
        cy.request({
            url: 'api/v3/store/inventory',
            method: 'GET',
            failOnStatusCode: false
        }).then(response => {
            console.log(response)
            expect(response.status).to.equal(200)
        })
    }

    placeNewOrder() {
        cy.request({
            url: 'api/v3/store/order',
            method: 'POST',
            body: order,
            failOnStatusCode: false
        }).then(response => {
            console.log(response)
            expect(response.status).to.equal(200)
        })
    }

    getOrDeleteOrder(methodType, orderId) {
        cy.request({
            url: 'api/v3/store/order/'+orderId,
            method: methodType,
            failOnStatusCode: false
        }).then(response => {
            console.log(response)
            expect(response.status).to.equal(200)
        })
    }

}

export const onStoreRequest = new Store()