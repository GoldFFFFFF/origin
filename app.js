// const axios = require('axios')
// axios.get('https://baidu.com')
// .then(function(res){
//     console.log(res.data);
// })

//const { addOne, subOne} = require("./lib");

//console.log(addOne(3));

const user = {
    name: 'Me',
    tel: "12345"


};

const oldUser = Object.assign({},user,{address:"xjtlu"})
const updatedUser = {
    ...user,
    address: 'XJTLU'
};
//console.log(user,updatedUser);

const url = "https://xx.com"+user.name+" ?";
const newUrl = `http://xx.com${user.name}?${user.tel}`
console.log(newUrl);