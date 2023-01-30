let lista = document.getElementById("lista");
let bnt = document.getElementById("bnt");
let input = document.getElementById("write");


var array = [];

function Addlist(){
  let valor = input.value;
  
  array.push([[valor]]);

  show_list();
}

function deleteIten(arr, index){

  arr.splice(index, i);

  show_list();
}

function show_list(){
  lista.innerHTML = ''

  for(i = 0; i<array.length; i++){
      lista.innerHTML 
      += `<input type= checkbox>${array[i]}

      <img src="./assets/img/trash.png" height="18px" onclick="deleteIten(array, ${i});">
    
      <br>`
      localStorage.setItem("tarefas", JSON.stringify(array))

      console.log(array)
  }

}

 let check = document.getElementsByTagName("button")
 
 

onload = function(){

  let nome = JSON.parse(localStorage.getItem("tarefas"))

  lista.innerHTML += `
                      ${nome}
                       <br>`;  
}



// onload = function (){

//   let nome = JSON.parse(localStorage.getItem("tarefas" ) || [] );


//   lista.innerHTML += ` <li>
//                       ${nome}
//                     </li>
//                     <br>`;

// console.log(nome)
// }

// bnt.addEventListener("click", function () {
//   var array = [];
//   var valor = input.value;
 
//   array.push([valor]);

//  localStorage.setItem("tarefas", JSON.stringify(array))     


//  lista.innerHTML += `<input type="checkbox"> <li>
//                      ${array}
//                    </li>
//                    <br>`;


                   
//      remove.addEventListener('click', function teste(arr, index){
        
//       arr.splice(index, 1)



//         array.splice(array.indexOf(), 1)
//         array.innerHTML += array

//         del()
//       })


//       function del(){
//         teste(array,)
//       }


//  console.log(array)
//       });


