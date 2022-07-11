const requestBody = {
    "id": 1001,
    "name": "Jeffrey",
    "category": {
        "id": 0,
        "name": "Dogs"
    },
    "photoUrls": [
        "img.jpeg"
    ],
    "tags": [
        {
            "id": 0,
            "name": "Dogs"
        }
    ],
    "status": "pending"
}

export class Pet {

    savePet(methodType) {
        cy.request({
            url: 'api/v3/pet',
            method: methodType,
            body: requestBody,
            failOnStatusCode: false
        }).then(response => {
            console.log(response)
            expect(response.status).to.equal(200)
        })
    }

    findPetBy(argument, value) {
        cy.request({
            url: '/api/v3/pet/findBy'+argument.charAt(0).toUpperCase() + argument.slice(1),
            method: 'GET',
            qs: { [argument] : value },
            failOnStatusCode: false
        }).then(response => {
            expect(response.status).to.equal(200)
        })
    }

    savePetById(id, name, status) {
        cy.request({
            url: 'api/v3/pet/'+id,
            method: 'POST',
            qs: { 'name': name, 'status': status},
            failOnStatusCode: false
        }).then(response => {
            console.log(response.body)
            expect(response.status).to.equal(200)
        })
    }

    removeOrGetPetById(methodType, id) {
        cy.request({
            url: 'api/v3/pet/'+id,
            method: methodType,
            failOnStatusCode: false
        }).then(response => {
            console.log(response.body)
            expect(response.status).to.equal(200)
        })
    }

}


export const onPetRequest = new Pet()