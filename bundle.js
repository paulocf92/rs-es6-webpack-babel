"use strict";

var arr = [1, 8, 3, 29, 4, 72, 0, 4, 44];
var maior = arr.reduce(function (total, next) {
  return total > next ? total : next;
}); //console.log(maior);

var showMsg = function showMsg(_) {
  return 'Teste!!!';
}; //console.log(showMsg());


var usuario = {
  nome: 'Paulo',
  idade: 27,
  endereco: {
    cidade: 'Dourados',
    estado: 'MS'
  }
}; //console.log(usuario);

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade; //console.log(nome, idade, cidade);

function mostraDados(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraDados(usuario);
var arr1 = [1, 2, 7, 23, 22];
var newArr = [77, 22].concat(arr1); //console.log(newArr);

var name = 'Paul';
var age = 27;
var user = {
  name: name,
  age: age,
  company: 'RocketSeat'
}; //console.log(user);
