const request = require('supertest');

const server = require('../index.js');

describe('API server', () => {
    let api;
    let user = {
      Name: 'Camille'
    }

    let comment = {
        id: 5,
        comment: "meesageasjdaksdk",
        postId: 0
    }



    beforeAll(() => {
        api=server.listen(5000, () => 
        console.log('Test server running on port 5000')
        );
    });

    afterAll((done) => {
        // close the server, then run done
        console.log('Gracefully stopping test server');
        api.close(done);
    });


    //posts test

    it('responds to get / with status 200', (done) => {
        request(api).get('/').expect(200, done);
    });

    it('responds to get /users with status 200', (done) => {
        request(api).get('/users').expect(200, done);
    });

    it('responds to post /users with status 201', (done) => {
        request(api)
            .post('/users')
            .send(user)
            .set('Accept', /application\/json/)
            .expect({message: `added data`}, done);
    });

    it('responds to get /posts/200 with status 404', (done) => {
        request(api).get('/posts/200').expect(404, done);
    });

    it('retrieves a user by id', (done) => {
        request(api)
            .get('/users/6203c700ed7c388fd50ba3c7')
            .expect(200)
            .expect({
                _id: '6203c700ed7c388fd50ba3c7',
                Name: 'janes',
                Points: 0,
                Wins: 0,
                __v: 0
              }, done);
    });

    it('responds to non existing paths with 404', (done) => {
        request(api).get('/no').expect(404, done);
    });




    // //comments test

    // it('responds to get /comments with status 200', (done) => {
    //     request(api).get('/comments').expect(200, done);
    // });

    // it('responds to post /comments with status 201', (done) => {
    //     request(api)
    //         .post('/comments')
    //         .send(comment)
    //         .set('Accept', /application\/json/)
    //         .expect({message: `Comment list number ${comment.id} created successfully`}, done);
    // });

    // it('responds to get /comments/200 with status 500', (done) => {
    //     request(api).get('/comments/200').expect(500, done);
    // });

    // it('responds to get /posts/:id/comments with status 200', (done) => {
    //     request(api).get('/posts/0/comments').expect(200, done);
    // });

    // it('retrieves a comment by id', (done) => {
    //     request(api)
    //         .get('/comments/0')
    //         .expect(200)
    //         .expect({ id: 0,
    //             comment: "meesageasjdaksdk",
    //             postId: 0 }, done);
    // });

});
