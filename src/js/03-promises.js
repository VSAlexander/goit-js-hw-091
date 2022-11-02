const form = document.querySelector('.form');

// const promises = [];

// в таку функцію треба закидувати номер позиції проміса та час його затримки
// як створити масив промісів? треба створити пустий масив, потім туди закидувати проміси у вигляді об'єктів
// for (i = 0; i >= amount.value; i ++) { }

// function createPromise(position, delay) {}
// const shouldResolve = Math.random() > 0.3;
// if (shouldResolve) {
// } else {
// }
// let a;

// function createPromiseArray(delay, step, amount) {
//   for (let position = 1; position <= amount; position++) {
//     if (position === 1) {
//       promises.push(
//         new Promise((resolve, reject) => {
//           const shouldResolve = Math.random() > 0.3;
//           setTimeout(() => {
//             if (shouldResolve) {
//               resolve({ position, delay });
//             } else {
//               reject({ position, delay });
//             }
//           }, delay);
//         })
//       );
//     } else {
//       promises.push(
//         new Promise((resolve, reject) => {
//           const shouldResolve = Math.random() > 0.3;
//           delay = delay + step * position;
//           setTimeout(() => {
//             if (shouldResolve) {
//               resolve({ position, delay });
//             } else {
//               reject({ position, delay });
//             }
//           }, delay);
//         })
//       );
//     }
//   }
// }

// createPromiseArray(2000, 1000, 3);
// console.log(promises);

// for (let i = 1; i <= 3; i++) {
//   promises.push(i);
// }

// console.log(promises);
// const newPromises = promises.map(promise => {

// })

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  let delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);

  for (let i = 1; i <= amountValue; i++) {
    createPromise(i, delayValue)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delayValue += stepValue;
  }
});

// const newPromises = promises.map(promise => {

//   createPromise;
// });

// // console.log(newPromises);

//  for (let position = 1; position <= amountValue; position += 1) {
//    setTimeout(() => {
//      console.log(position, delayValue, stepValue, amountValue);
//      setTimeout(() => {
//        createPromise(position, delayValue + stepValue * position)
//          .then(res => onSuccess(res.position, res.delay))
//          .catch(error => onReject(error.position, error.delay));
//      }, delayValue);
//    }, stepValue);
//  }
