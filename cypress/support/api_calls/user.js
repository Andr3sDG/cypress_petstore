const createUserList = [
    {
        "id": 1001,
        "username": "UserAd1",
        "firstName": "Andres",
        "lastName": "Daniel",
        "email": "user1@email.com",
        "password": "user123",
        "phone": "1234567891",
        "userStatus": 1
    },
    {
        "id": 1002,
        "username": "UserAd2",
        "firstName": "Andres2",
        "lastName": "Daniel2",
        "email": "user2@email.com",
        "password": "user123",
        "phone": "1234567891",
        "userStatus": 1
    }
]

const user = {
    "id": 1001,
    "username": "UserAd3",
    "firstName": "Andres3",
    "lastName": "Daniel3",
    "email": "user3@email.com",
    "password": "user123",
    "phone": "1234567891",
    "userStatus": 1
}

export class User {

    createListOfUsers() {
        cy.request({
            url: 'api/v3/user/createWithList',
            method: 'POST',
            body: createUserList,
            failOnStatusCode: false
        }).then(response => {
            expect(response.status).to.equal(200)
        })
    }

    createUserLogged() {
        cy.request({
            url: 'api/v3/user',
            method: 'POST',
            body: user,
            failOnStatusCode: false
        }).then(response => {
            expect(response.status).to.equal(200)
        })
    }

    userLogin(username, password) {
        cy.request({
            url: 'api/v3/user/login',
            method: 'GET',
            qs: {'username': username, 'password': password},
            failOnStatusCode: false
        }).then(response => {
            console.log(response)
            expect(response.status).to.equal(200)
        })
    }

    userLogout() {
        cy.request({
            url: 'api/v3/user/logout',
            method: 'GET',
            failOnStatusCode: false
        }).then(response => {
            expect(response.status).to.equal(200)
        })
    }

    getOrDeleteUserByUsername(methodType, username) {
        cy.request({
            url: 'api/v3/user/'+username,
            method: methodType,
            failOnStatusCode: false
        }).then(response => {
            expect(response.status).to.equal(200)
            if(methodType == 'DELETE') {
                cy.request({
                    url: 'api/v3/user/'+username,
                    method: 'GET',
                    failOnStatusCode: false
                }).then(response => {
                    console.log(response)
                    expect(response.body).to.equal('User not found')
                })
            }
        })
    }

    updateUserByUsername(username) {
        cy.request({
            url: 'api/v3/user/'+username,
            method: 'PUT',
            body: user,
            failOnStatusCode: false
        }).then(response => {
            console.log(response.body)
            expect(response.status).to.equal(200)
        })
    }



}

export const onUserRequest = new User()