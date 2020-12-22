function enter(){
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let fatherName = document.getElementById("fatherName").value;
    let group = document.getElementById("group").value;
    if (firstname == "")
        alert("Введите имя");
    if (lastname == "")
        alert("Введите фамилию");
    if (fatherName == "")
        alert("Введите отчество");
    if (group == "")
        alert("Введите группу");
    if(firstname != "" && lastname != "" && fatherName != "" && group != "")
        document.location.href="Main.html";
}