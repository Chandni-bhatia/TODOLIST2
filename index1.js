function getandupdate() {
  console.log("updating list");
  tit = document.getElementById("title").value;
  dec = document.getElementById("description").value;
  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray = [];
    itemJsonArray.push([tit, dec]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    itemjsonArraystr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemjsonArraystr);
    itemJsonArray.push([tit, dec]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  }

  update();
}
function update() {
  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray = [];

    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    itemjsonArraystr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemjsonArraystr);
  }
  //populate the table
  let tablebody = document.getElementById("Listbody");
  let str = "";
  itemJsonArray.forEach((element, index) => {
    str += `<tr>
          <th scope="row">${index + 1}</th>
          <td>${element[0]}</td>
          <td>${element[1]}</td>
          <td>
            <button class="btn btn-dark" onclick=deleted(${index})>yes</button> <button class="btn btn-dark" id="no" onclick=No(${index})>No</button>
          </td>
        </tr>`;
  });
  tablebody.innerHTML = str;
}

add = document.getElementById("Add");

add.addEventListener("click", getandupdate);
update();
function deleted(itemindex) {
  console.log("deleting", itemindex);
  itemjsonArraystr = localStorage.getItem("itemsJson");
  itemJsonArray = JSON.parse(itemjsonArraystr);
  itemJsonArray.splice(itemindex, 1);
  localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  update();
  console.log("deleted", itemindex);
}
function No(itemindex) {
  console.log("Why", itemindex);
  alert("Chandni do it now!");

  //  ch=document.getElementById("no").style.backgroundColor="red";
  //  ch.classList.add("btn btn-danger");
  // itemjsonArraystr = localStorage.getItem("itemsJson");
  //   itemJsonArray = JSON.parse(itemjsonArraystr);
  //   itemJsonArray.splice(itemindex,1);
  //   localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  // update();
  // console.log("deleted",itemindex);
}

function clearr() {
  if (confirm("Do you really wanna delete the whole list?")) {
    console.log("clearing the list");
    localStorage.clear();
    update();
  } else {
  }
}
