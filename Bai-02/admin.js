class Student {
    constructor(name, age, address, phone, email, classStudy) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.classStudy = classStudy;
    }
}
let students = [];

function addStudent(student) {
    students.push(student);
    refreshTable();
}

function removeStudent(index) {
    students.splice(index, 1);
    refreshTable();
}

function updateStudent(index, newStudent) {
    students[index] = newStudent;
    refreshTable();
}

function refreshTable() {
    let table = document.getElementById('student-table').getElementsByTagName('tbody')[0];
    table.innerHTML = '';
    students.forEach((student, index) => {
        let row = table.insertRow();
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let cell2 = row.insertCell(2);
        let cell3 = row.insertCell(3);
        let cell4 = row.insertCell(4);
        let cell5 = row.insertCell(5);
        let cell6 = row.insertCell(6);
        let cell7 = row.insertCell(7);
        cell0.innerHTML = index+1;
        cell1.innerHTML = student.name;
        cell2.innerHTML = student.age;
        cell3.innerHTML = student.address;
        cell4.innerHTML = student.phone;
        cell5.innerHTML = student.email;
        cell6.innerHTML = student.classStudy;
        cell7.innerHTML = `<a onclick="removeStudent(${index})">Xóa</a> | <a onclick="editStudent(${index})">Sửa</a>`;
    });
}

document.getElementById('student-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let address = document.getElementById('address').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let classStudy = document.getElementById('class').value;

    let student = new Student(name, age, address, phone, email, classStudy);
    addStudent(student);
});
