const tape = require("tape");
const postData = require('../src/model/queries/insertData');
const getData = require('../src/model/queries/getData');
const runDbBuild = require("../src/model/db_build");



// const buildPost = () => {
//     return new Promise((resolve, reject) => {
//         postData.postUserData('users_name', 21, 'gender', 'location', 'experience', 'photo')
//     .then(response => {
//         console.log('the postData response is', response)

//         // const first = postData.postUserGoals(response, 1)
//         // const two = postData.postUserGoals(response, 2)

//         // Promise.all([first, two]).then(values => console.log('hi i posted data'))
        
//         // resolve(true)
//         // const goals = [1, 2, 3, 4]
//         // goals.forEach(x => {
//         //     console.log('posted goal', x)
//         //     postData.postUserGoals(response, x)
//         //     resolve(true)
//         // })
//     })
    // .catch(err => reject(err))
    // })
    // postData.postUserData('users_name', 21, 'gender', 'location', 'experience', 'photo')
    // .then(response => {
    //     console.log('the postData response is', response)
    //     const goals = [2, 3, 4]
    //     goals.forEach(goal => {
    //         postData.postUserGoals(response, goal)
    //     })
    // })
    // .catch(err => console.log(err))
// } 


// postData.postUserData('users_name', 21, 'gender', 'location', 'experience', 'photo')
//     .then(response => {
//         console.log('the postData response is', response)
//         const goals = [2, 3, 4]
//         goals.forEach(goal => {
//             postData.postUserGoals(response, goal)
//         })
//     })
//     .catch(err => console.log(err))

// const awaitGoals = buildPost();

// const awaitPost = async () => {
//     await Promise.all(buildPost())
// }

// const waitGoals = async () => {
//     await Promise.all(awaitPost())
// }

tape('post data', t => {
    runDbBuild()
    .then(() => {
        return postData.postUserData('jo', 22, 'woman', 'london', 'beginner', 'photo')
    })
    .then((value) => {
        t.equal(5, value, 'expect the user id to be 5')
        t.end()
    })
})

// tape('post data', t => {
//     .then(() => {
//         return postData.postUserData('jo', 22, 'woman', 'london', 'beginner', 'photo')
//     })
//     .then((value) => {
//         t.equal(5, value, 'expect the user id to be 5')
//         t.end()
//     })
// })
