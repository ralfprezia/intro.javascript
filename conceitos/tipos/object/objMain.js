//Object com o nome de (user)
let user = {
    name: 'Ralf'//propriedade name:
};
//console.log(user);


//Alterando a propriedade de um obejeto
user.name = 'Outro nome 1';//1° forma de acessar um objeto com valor
console.log(user);
user['name'] = 'Outro nome 2';//2° forma de acessar um objeto com valor
//console.log(user);


 
const prop = 'name';
user[prop] = 'Outro nome 3';

//Forma de acessar o prop

//const prop = 'name';
//user[prop] = 'Outro nome 3';
/*function getProp(prop){
    return user[prop]
}*/


console.log(user);


//Criando uma propriedade
//user.lastname = 'Franco Prezia Carneiro'
//console.log(user);

//Deletando uma propriedade
//delete user.name;