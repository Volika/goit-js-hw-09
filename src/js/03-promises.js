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
  form.reset();
}

function createPromiseToCircle(delay, step, amount) {
  
  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {

        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
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
