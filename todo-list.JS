
let listArray1 = []
let listArray2 = []
let listArray3 = []


function consoleList(){
  
  message = document.querySelector('.inputList1').value
  listArray1.push(message);

  console.log(listArray1);

  document.querySelector('.inputList1').value = "";
}

function add(){

  message = document.querySelector('.inputList2').value
  listArray2.push(message);

  document.querySelector('.inputList2').value = "";
  renderList();
}

function renderList(){

  html = "";
  
  for (let i = 0; i < listArray2.length; i++){
    html += `<p>${listArray2[i]}</p>`
  }

  document.querySelector('.showList').innerHTML = html
}

function addFull(){

  message = document.querySelector('.inputList').value;
  date = document.querySelector('.dateList').value;

  list = {
    message,
    date
  };

  listArray3.push(list);

  renderFull();
}

function renderFull(){

  html2 = "";
  
  for (let i = 0; i < listArray3.length; i++){
    html2 += 
    `<div class = "gridInput">
        <p>${listArray3[i].message}</p>
        <p>${listArray3[i].date}</p>
        <button class='delButton' onClick='del(${i})'>Delete</button>
      </div>
    `
  }

  document.querySelector('.show-text-date').innerHTML = html2

}

function del(Number){

  listArray3.splice(Number,1);
  renderFull();

}


