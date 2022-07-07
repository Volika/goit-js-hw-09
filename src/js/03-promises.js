import { Notify } from 'notiflix/build/notiflix-notify-aio';


const form = document.querySelector('form')
form.addEventListener('submit', onClickSubmitBtn)

function onClickSubmitBtn(evt) {
  evt.preventDefault();
  const formElements = evt.currentTarget.elements;
  let delay = parseInt(formElements.delay.value);
  const step = parseInt(formElements.step.value);
  const amount = parseInt(formElements.amount.value);

  createPromiseToCircle(delay, step, amount);

}

function createPromiseToCircle(delay, step, amount) {
  
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ i, delay }) => {
        Notify.success(`✅ Fulfilled promise ${i} in ${delay}ms`)
      })
      .catch(({ i, delay }) => {
        Notify.failure(`❌ Rejected promise ${i} in ${delay}ms`)
      })

    delay += step
  }
}
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const data = { position, delay };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(data);
      } else {
        // Reject
        reject(data);
      }
    }, delay)
  })
}
