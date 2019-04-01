// alert('Hi, buddy!');

const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('Ok')}, 2000);
});

/* minhaPromise().then(response => {
  console.log(response);
}); */

/* async function executaPromise() {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
} */

const executaPromise = async () => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
}

executaPromise();