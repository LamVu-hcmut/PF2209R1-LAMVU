class student {
    constructor(name, phone, mark, gender) {
        this.name = name;
        this.phone = phone;
        this.mark = mark;
        this.gender = gender;
    }
}
let ar = [];
function addStudent() {
    let a = new student(document.getElementById("Name").value, document.getElementById("Phone").value, document.getElementById("Mark").value, document.getElementById("Gender").value);
    console.log(a);
    ar.push(a);
    console.log(ar);
    let string = `<tr><td>${a.name}</td><td>${a.phone}</td><td>${a.mark}</td><td>${a.gemder}</td></tr>`;
    document.getElementById('resutl').innerHTML = `<tr><td>${a.name}</td><td>${a.phone}</td><td>${a.mark}</td><td>${a.gender}</td></tr>`;
}