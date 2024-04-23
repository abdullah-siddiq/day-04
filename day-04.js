// create your own resume data in JSON format
   
let  Resume={
    "basics": {
      "name": "ms abdullah",
      "email": "msabdullah414@gmail.com",
      "phone": +94726463103,
      "degree": "Bsc in Applied Science",
      "location": {
        "address": "159,hindhagolla,horambawa",
        "postalCode": 60000,
        "district": "kurunegala",
        "province": "north western",
        "country": "Sri Lanka"
      },
      "profiles": [
        {
          
          "github":"https://github.com/abdullah-siddiq/abdullah-siddiq"
        }
      ]
    },
    
    "education": [
      {
        "University": "Wayamba University",
        "department": "Computer Science",
        "studyType": "fulltime",
        "batch start year": 2022,
        "batch end year": 2026,
        
      }
    ],
    "skills": [
      {
        "name": "c,java,javascript",
        "level": "beginer",
        
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish,Sinhala",
      }
    ],
   
  }
  console.log(Resume);


  //For the above JSON,iterate over all  for loops(for,for in,for of,forEach)

  var js = [{
    "id" : "abd01", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "mail": "msabdullah414@gmail.com"
},
{
    "id" : "abd02", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
     "mail": "msabdullah414@gmail.com"
}];
//for loop
for(var i = 0; i < js.length; i++) {
    var obj = js[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.mail);

}
//for Each
js.forEach(function(obj) { console.log(obj.msg); });

//for In
for (var key in json) {
if (js.hasOwnProperty(key)) {
  console.log(js[key].id);
  
 
}
}
//for Of
let text = "";
for (let x of js[key].id) {
 text += x; 
}
 console.log(text);

