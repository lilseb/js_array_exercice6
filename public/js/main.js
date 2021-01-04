let monTab = ['pomme', 'fraise', 'melon', 'citron']
console.log(monTab);
monTab.shift()
console.log(monTab);
monTab.push('orange')
console.log(monTab);
monTab.unshift('banane')
console.log(monTab);
// console.log(monTab.toUppercase('fraise'));
monTab.reverse()
console.log(monTab);
// EXO 1
let chiffres = ['4', '5', '2', '1', '3']
chiffres.sort()
console.log(chiffres);
// chiffres.join()
console.log(chiffres.join('-'));
chiffres.flat()
console.log(chiffres);
// EXO 2
var valentin = ['pomme','orange','fraise','citron','cerise','bananes','mangue','pasteque','poire','kiwi']
console.log(valentin);
console.log(valentin.length);
// valentin.indexOf(fromIndex)
// console.log(valentin.indexOf('fraise'));
// let valentin = ['objet 1', 'objet 2', 'objet 3', 'objet 4', 'objet 5']
valentin.splice(0,2)
console.log(valentin);