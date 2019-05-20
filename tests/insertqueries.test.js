const runDbBuild = require('../src/model/db_build');
const postData = require('../src/model/queries/postData');
const getData = require('../src/model/queries/getData');

const firstUser = {
    "age": 21, 
    "experience": "experience",
    "gender": "gender",
    "location": "location",
    "photo": "photo",
    "users_id": 5,
    "users_name": "users_name"
}

const secondUser = {
    "age": 22, 
    "experience": "beginner", 
    "gender": "woman", 
    "location": "london", 
    "photo": "photo", 
    "users_id": 6, 
    "users_name": "jo"
}


// beforeAll(() => {
//     console.log('running: beforeAll');
//     runDbBuild();
// });

beforeEach(() => {
    console.log('running: before');
    runDbBuild();
});

// const sum = (a, b) => {
//     return a + b;
// }

// test('adds 1 + 2 to equal 3', ()=> {
//     expect(sum(1,2)).toBe(3);
// });

// test('testing the post data function adds a user to the users table', async()=> {
//     await expect(postData('users_name', 21, 'gender', 'location', 'experience', 'photo'))
//     .resolves.toBe('hello');
// })

// test('testing the post data function adds a user to the users table', async ()=> {
//     // expect(getData.getUser('users_name')).resolves.toStrictEqual(undefined)
//     // expect(getData.getAllUsers()).resolves.toStrictEqual(undefined)
//     await postData.postUserData('users_name', 21, 'gender', 'location', 'experience', 'photo');
//     expect(getData.getUser('users_name')).resolves.toStrictEqual(firstUser);
// })

// test('testing the post data function add a second user to the users table', async ()=> {
//     await postData.postUserData('jo', 22, 'woman', 'london', 'beginner', 'photo');
//     expect(getData.getAllUsers()).resolves.toStrictEqual([
//         {"age": 25, "experience": "Beginner", "gender": "Male", "location": "London", "photo": "", "users_id": 1, "users_name": "Henry Stockdale"}, 
//         {"age": 28, "experience": "Beginner", "gender": "Male", "location": "London", "photo": "", "users_id": 2, "users_name": "Ryan McAvoy"}, 
//         {"age": 29, "experience": "Beginner", "gender": "Female", "location": "London", "photo": "", "users_id": 3, "users_name": "Banna Teklebrhan"}, 
//         {"age": 27, "experience": "Beginner", "gender": "Male", "location": "London", "photo": "", "users_id": 4, "users_name": "Dylan Almano"},
//         firstUser,
//         secondUser
//     ])
// })

// test('testing the post data function adds a users goal to the users goals table for second user', async ()=> {
//     // expect(getData.getUser('users_name')).resolves.toStrictEqual(undefined)
//     // expect(getData.getAllUsers()).resolves.toStrictEqual(undefined)
//     const goals = [1, 2, 3];
//     await postData.postUserData('jo', 22, 'woman', 'london', 'beginner', 'photo', goals);
//     expect(getData.getUserGoals(5)).resolves.toStrictEqual('');
// })

// test('testing the post data function adds a user to the users table', ()=> {
//     // expect(getData.getUser('users_name')).resolves.toStrictEqual(undefined)
//     // expect(getData.getAllUsers()).resolves.toStrictEqual(undefined)
//     postData.postUserData('users_name', 21, 'gender', 'location', 'experience', 'photo');
//    getData.getUser('users_name')
//    .then(result => expect(result).toStrictEqual(firstUser));
// })

// test('testing the post data function returns user id', ()=> {
//     // expect(getData.getUser('users_name')).resolves.toStrictEqual(undefined)
//     // expect(getData.getAllUsers()).resolves.toStrictEqual(undefined)
//     postData.postUserData('users_name', 21, 'gender', 'location', 'experience', 'photo');
//    getData.getUser('users_name')
//     .then(value => expect(value).toBe(firstUser))
//     .catch(err => console.log(err))
// })

// test('testing the post data function returns user id', ()=> {
//     // expect(getData.getUser('users_name')).resolves.toStrictEqual(undefined)
//     // expect(getData.getAllUsers()).resolves.toStrictEqual(undefined)
//     // postData.postUserData('users_name', 21, 'gender', 'location', 'experience', 'photo')
//     // .then(response => postData.postUserGoals(response, 1))
//     // .catch(err => console.log(err))

//     postData.postUserData('users_name', 21, 'gender', 'location', 'experience', 'photo')
//     .then(response => {
//         console.log('the postData response is', response)
//         const goals = [2, 3, 4]
//         goals.forEach(goal => {
//             postData.postUserGoals(response, goal)
//         })
//     })
//     .catch(err => console.log(err))
    
//     // getData.getUserGoals(5)
//     // .then(response => expect(response).toBe('hello'))
//     // .catch(err => console.log(err))
// })