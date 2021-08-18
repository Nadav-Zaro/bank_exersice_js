const client =[
    {id: 1 ,
    name: "dfdf",
    email: "dsfsd@fsd.com",
    phone: "3423423",
    balance: 200
    },
    {
    id: 2,
    name: "nvbn",
    email: "ojgi@sdf.com",
    phone: "0i95756",
    balance: 500
    },
    {
    id: 3,
    name: "cxxc",
    email: "fsf@gmaofd.com",
    phone: "54648447",
    balance: 23434,
    }
]
const blockList = [
    {
        id: 5,
        name: "noi",
        email: "asdfa@gmail.com",
        phone: "9-895798",
        balance: 10,
    },
    {
        id: 6,
        name: "poffs",
        email: "asdfa@gmail.com",
        phone: "053-57453",
        balance: 57000,
    }
]
function addClient(newClient) {
    client.push(newClient);
}
const newClient = {
    id: 4,
    name: "nadav",
    email: "asdfa@gmail.com",
    phone: "54648447",
    balance: 1000000,
}
addClient(newClient);
console.log(client);

// function getClient(clientId) {
//     for (let j = 0; j < blockList.length; j++) {
//         if(clientId == blockList[j].id){
//             alert("block list")
//         }
//     }
//     for (let i = 0; i < client.length; i++) {
//         if(clientId == client[i].id ){
//             return client[i];
//         }
//     }
// }
// console.log(getClient(3));


// function deleteClient(clientId) {
//     for (let j = 0; j < blockList.length; j++) {
//         if(clientId == blockList[j].id){
//             alert("block list")
//         }
//     }
//     for (let i = 0; i < client.length; i++) {
//         if(clientId == client[i].id ){
//             client.splice(i, 1)
//         }
//     }
//     return client
// }
// console.log(deleteClient(2));

// function withDrawMoney (clientId, amount) {
//     for (let j = 0; j < blockList.length; j++) {
//         if(clientId == blockList[j].id){
//             alert("block list")
//         }
//     }
//     for (let i = 0; i < client.length; i++) {
//         if(clientId == client[i].id){
//             client[i].balance -= amount;
//             break;
//         }
//     }
// }
// withDrawMoney(2, 700);
// console.log(client);

// function withDrawMoney2(clientId, amount) {
//     for (let j = 0; j < blockList.length; j++) {
//         if(clientId == blockList[j].id){
//             alert("block list")
//         }
//     }
//     for (let i = 0; i < client.length; i++) {
//         if(clientId == client[i].id){
//             client[i].balance += amount;
//             break;
//         }
//     }
// }
// withDrawMoney2(3, 800);
// console.log(client);

// function drawClient( amount) {
//     let drawClients = [];
//     for (let j = 0; j < blockList.length; j++) {
//         if(blockList[j].balance > 0){
//             break
//         }
//     }
//     for (let i = 0; i < client.length; i++) {
//         if(client[i].balance >= amount){
//             client[i].balance -= amount;
//         }
//         else{
//             alert("not enough money")
//         }
//     }
//     return client
// }
// console.log(drawClient(201));

// function avgClients( amount) {
//     let avgClients = [];
//     for (let j = 0; j < blockList.length; j++) {
//         if(blockList[j].balance > 400){
//             alert("block list")
//         }
//     }
//     for (let i = 0; i < client.length; i++) {
//         if(client[i].balance > 400){
//             avgClients.push(client[i]);
//         }
//     }
//     return avgClients
// }
// console.log(avgClients());

// function poorClients( amount) {
//     let poorClients = [];
//     for (let j = 0; j < blockList.length; j++) {
//         if(blockList[j].balance < 200){
//             // break
//         }
//     }
//     for (let i = 0; i < client.length; i++) {
//         if(client[i].balance <= 200){
//             poorClients.push(client[i]);
//         }
//     }
//     return poorClients
// }
// console.log(poorClients());

// function richClients( amount) {
//     let richClients = [];
//     for (let j = 0; j < blockList.length; j++) {
//         if(blockList[j].balance > 1000000){
//             // break
//         }
//     }
//     for (let i = 0; i < client.length; i++) {
//         if(client[i].balance >= 1000000){
//             richClients.push(client[i]);
//         }
//     }
//     return richClients
// }
// console.log(richClients());
