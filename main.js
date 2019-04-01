const arr = [1, 8, 3, 29, 4, 72, 0, 4, 44];

const maior = arr.reduce((total, next) => (total>next?total:next));

//console.log(maior);

const showMsg = _ => 'Teste!!!';

//console.log(showMsg());

const usuario = {
  nome: 'Paulo',
  idade: 27,
  endereco: {
    cidade: 'Dourados',
    estado: 'MS'
  }
};

//console.log(usuario);

const { nome, idade, endereco: { cidade } } = usuario;

//console.log(nome, idade, cidade);

function mostraDados({ nome, idade }) {
  console.log(nome, idade)
}

//mostraDados(usuario);

const arr1 = [1, 2, 7, 23, 22];

const newArr = [77, 22, ...arr1];

//console.log(newArr);

const name = 'Paul';
const age = 27;

const user = {
  name,
  age,
  company: 'RocketSeat'
};

//console.log(user);

// import { soma } from './funcoes';
// import soma from './soma';
import * as funcoes from './funcoes';

console.log(funcoes);
console.log(funcoes.soma(1, 2));