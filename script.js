// script.js

let students = JSON.parse(localStorage.getItem("students")) || [];

displayStudents();

function addStudent(){

  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;
  const department = document.getElementById("department").value;
  const marks = document.getElementById("marks").value;

  if(name === "" || roll === "" || department === "" || marks === ""){
    alert("Please fill all fields");
    return;
  }

  const student = {
    name,
    roll,
    department,
    marks
  };

  students.push(student);

  localStorage.setItem("students", JSON.stringify(students));

  displayStudents();

  document.getElementById("name").value = "";
  document.getElementById("roll").value = "";
  document.getElementById("department").value = "";
  document.getElementById("marks").value = "";
}

function displayStudents(){

  const studentList = document.getElementById("studentList");

  studentList.innerHTML = "";

  students.forEach((student, index) => {

    studentList.innerHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.roll}</td>
        <td>${student.department}</td>
        <td>${student.marks}</td>
        <td>
          <button class="delete-btn" onclick="deleteStudent(${index})">
            Delete
          </button>
        </td>
      </tr>
    `;

  });

}

function deleteStudent(index){

  students.splice(index,1);

  localStorage.setItem("students", JSON.stringify(students));

  displayStudents();

}

function searchStudent(){

  const search = document.getElementById("search").value.toLowerCase();

  const rows = document.querySelectorAll("#studentList tr");

  rows.forEach(row => {

    const name = row.cells[0].innerText.toLowerCase();

    if(name.includes(search)){
      row.style.display = "";
    }
    else{
      row.style.display = "none";
    }

  });

}