const promise1 = new Promise((resolve) => setTimeout(() => resolve('promise1'), 1000))
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject('promise2'), 2000))
const promise3 = new Promise((resolve) => setTimeout(() => resolve('promise3'), 3000))

promise1
    .then((data) => console.log('promise1', data))
    .catch((error) => console.log('promise1 rejected', error))
promise2
    .then((data) => console.log('promise2', data))
    .catch((error) => console.log('promise2 rejected', error))
promise3
    .then((data) => console.log('promise3', data))
    .catch((error) => console.log('promise3 rejected', error))

const promise = Promise.allSettled([
    promise1,
    promise2,
    promise3
])

promise
    .then((data) => console.log('promise allSettled', data))
    .catch((error) => console.log('promise allSettled rejected', error))