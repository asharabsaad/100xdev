


// function getAnimalData(){
//     // const response = await fetch('https://fakestoreapi.com/users')
//     //  const data = await response.json();
//     //  const fake = document.getElementById("random")
//     //  fake.textContent = JSON.stringify(data);
//     //  console.log(data)

//     fetch('https://fakestoreapi.com/users')
//     .then(function (response){
//         response.json()
//         .then(function(finalData){
//             console.log(finalData)
//         })
//     } 
//     )

// } 

// asyny/await syntax

async function getAnimalData(){
    const response = await fetch('https://fakestoreapi.com/users')
    const finalData = await response.json();
    document.getElementById('random').innerHTML = JSON.stringify(finalData)
}