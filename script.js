//Question 1

let obj1 ={name:"person 1",age:5};
let obj2 ={age:5,name:"person 1",}

let json1=JSON.stringify(obj1);
let json2=JSON.stringify(obj2);
if(json1===json2){
  console.log("both are equal");
}
else
{
  console.log("both are different");
}

//question 2 

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data1 = request.response;
  // console.log(data);
  var result1 = JSON.parse(data1);
  console.log(result1);
  // console.log(result1[0].area);
  for (i = 0; i < result1.length; i++) {
    console.log(result1[i].flags.png);
  }
};

//  Question 3

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  // console.log(data);
  var result = JSON.parse(data);
  console.log(result);
  // console.log(result[0].area);
  for (i = 0; i < result.length; i++) {
    console.log(result[i].name.common, result[i].region, result[i].subregion);
  }
};