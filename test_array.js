var proposta = {}; 
var items = ['item1', 'item2', 'item3']; 
var amount = [2,3,4]; 
var length = [3,4,5];
var width = [10,20,30]; 

proposta.number = 101001; 
proposta.items = new Array();
proposta.shaders = new Array();

for(let item in items) {
    proposta.items.push({description: items[item]})
}

for(let key in amount) {
    proposta.shaders.push([
        { amount: amount[key] }, 
        { length: length[key] }, 
        { width: width[key] }                       
    ])
}

console.log(proposta); 