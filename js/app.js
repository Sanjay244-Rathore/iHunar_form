
// main div
var parent = document.getElementById("parent");

var main = document.createElement("div");
main.setAttribute("id", "contain");
parent.appendChild(main)

// section -1

var sec_1 = document.createElement("div");
sec_1.setAttribute("id", "sec-1")
main.appendChild(sec_1);

var h3 = document.createElement("h3");
h3.setAttribute("id", "student");
h3.innerHTML = "Student Sign Up"
sec_1.appendChild(h3);

// section -2

var sec_2 = document.createElement("div");
sec_2.setAttribute("id", "sec-2");
main.appendChild(sec_2);

var img = document.createElement("img");
img.setAttribute("src", "./img-logo/colorlogo-01-64282ecd19dfa05a688d9c8629a14fc6.png");
img.setAttribute("id", "ihunar");
sec_2.appendChild(img);

var username = document.createElement("input");
username.setAttribute("value", "dddddddd")
username.setAttribute("type", "text");
username.setAttribute("placeholder", "Name")
sec_2.appendChild(username);

var fathername = document.createElement("input");
fathername.setAttribute("value", "dddddddd")
fathername.setAttribute("type", "text");
fathername.setAttribute("placeholder", "Father's Name")
sec_2.appendChild(fathername);

var email = document.createElement("input");
email.setAttribute("value", "dddddddd")
email.setAttribute("type", "email");
email.setAttribute("placeholder", "Email")
sec_2.appendChild(email);

var password = document.createElement("input");
password.setAttribute("value", "dddddddd")
password.setAttribute("type", "password");
password.setAttribute("placeholder", "Password")
sec_2.appendChild(password);

var cnic_num = document.createElement("input");
cnic_num.setAttribute("value", "1222222")
cnic_num.setAttribute("type", "number");
cnic_num.setAttribute("placeholder", "CNIC Number")
sec_2.appendChild(cnic_num);

var mob_num = document.createElement("input");
mob_num.setAttribute("value", "122222")
mob_num.setAttribute("type", "number");
mob_num.setAttribute("placeholder", "Mobile Number")
sec_2.appendChild(mob_num);


var courses = document.createElement("input");
courses.setAttribute("value", "dddddddd")
courses.setAttribute("type", "text");
courses.setAttribute("placeholder", "Select Courses")
sec_2.appendChild(courses);


var qualification = document.createElement("input");
qualification.setAttribute("value", "dddddddd")
qualification.setAttribute("type", "text");
qualification.setAttribute("placeholder", "Enter your Qualification")
sec_2.appendChild(qualification);


var gender = document.createElement("input");
gender.setAttribute("value", "dddddddd")
gender.setAttribute("type", "text");
gender.setAttribute("placeholder", "Select Gender")
sec_2.appendChild(gender);

var message = document.createElement("p");
message.setAttribute("id", "message")
sec_2.appendChild(message);
// message.innerHTML = "no data";

var add_btn = document.createElement("button");
add_btn.setAttribute("id", "add-btn");
add_btn.setAttribute("onclick", "AddData()");
add_btn.innerHTML = "AddData";
sec_2.appendChild(add_btn);

var br = document.createElement("br");
sec_2.appendChild(br)

var span = document.createElement("span");
span.setAttribute("id", "show");
span.innerHTML = "Show results";
sec_2.appendChild(span);

var show_btn = document.createElement("button");
show_btn.setAttribute("id", "show-btn");
show_btn.setAttribute("onclick", "showData()");
show_btn.innerHTML = "Show";
sec_2.appendChild(show_btn);



// function for adding data

var allUsers = [];

function AddData() {
    if (username.value === "") {
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "Please enter username";
        username.focus()
        setTimeout(() => {
            message.style.display = "none";
        }, 1500);
    } else if (fathername.value === "") {
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "Please enter Father's Name";
        fathername.focus()
        setTimeout(() => {
            message.style.display = "none";
        }, 1500);
    } else if (email.value === "") {
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "Please enter your Email";
        email.focus()
        setTimeout(() => {
            message.style.display = "none";
        }, 1500);
    } else if (password.value === "") {
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "Please enter your password";
        password.focus()
        setTimeout(() => {
            message.style.display = "none";
        }, 1500);
    } else if (cnic_num.value === "") {
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "Please enter CNIC number";
        cnic_num.focus()
        setTimeout(() => {
            message.style.display = "none";
        }, 1500);
    } else if (mob_num.value === "") {
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "Please enter Mobile Number";
        mob_num.focus()
        setTimeout(() => {
            message.style.display = "none";
        }, 1500);
    } else if (courses.value === "") {
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "Please enter your course";
        courses.focus()
        setTimeout(() => {
            message.style.display = "none";
        }, 1500);
    } else if (qualification.value === "") {
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "Please enter your Qualification";
        qualification.focus()
        setTimeout(() => {
            message.style.display = "none";
        }, 1500);
    } else if (gender.value === "") {
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "Please enter your Gender";
        gender.focus()
        setTimeout(() => {
            message.style.display = "none";
        }, 1500);
    } else {
        message.style.display = "block";
        message.style.color = "green";
        message.innerHTML = "your data added successfully!";
        setTimeout(() => {
            message.style.display = "none";
        }, 1500);


        var obj = {
            Name: username.value,
            F_Name: fathername.value,
            Email: email.value,
            password: password.value,
            CNIC_Number: cnic_num.value,
            Mobile: mob_num.value,
            Course: courses.value,
            Qualification: qualification.value,
            Gender: gender.value
        }
        allUsers.push(obj);
        console.log(obj);
        console.log(allUsers)

        username.value = "";
        fathername.value = "";
        email.value = "";
        password.value = "";
        cnic_num.value = "";
        mob_num.value = "";
        courses.value = "";
        qualification.value = "";
        gender.value = "";
    }


}


function showData() {
    if (allUsers.length === 0) {
        alert("sorry you don't have data to show")
    } else {
        for (var i = 0; i < allUsers.length; i++) {
            var card = document.createElement("div");
            card.setAttribute("class", "card");
            parent.appendChild(card);

            var hhead = document.createElement("div");
            hhead.setAttribute("class", "hhead");
            card.appendChild(hhead);

            var h1 = document.createElement("h1");
            h1.innerHTML = "Student Card";
            h1.setAttribute("class", "student_heading")
            hhead.appendChild(h1);

            // var txt = document.createElement("div");
            // card

            var card_name = document.createElement("span");
            card_name.innerHTML = "Name : " + allUsers[i].Name;
            card.appendChild(card_name);

            var card_fname = document.createElement("span");
            card_fname.innerHTML = "Father's Name : " + allUsers[i].F_Name;
            card.appendChild(card_fname);

            var card_email = document.createElement("span");
            card_email.innerHTML = "Email : " + allUsers[i].Email;
            card.appendChild(card_email);


            var card_password = document.createElement("span");
            card_password.innerHTML = "Password : " + allUsers[i].password;
            card.appendChild(card_password);

            var card_cnic = document.createElement("span");
            card_cnic.innerHTML = "CNIC Number : " + allUsers[i].CNIC_Number;
            card.appendChild(card_cnic);

            var card_mob = document.createElement("span");
            card_mob.innerHTML = "Mobile : " + allUsers[i].Mobile;
            card.appendChild(card_mob);

            var card_course = document.createElement("span");
            card_course.innerHTML = "Course : " + allUsers[i].Course;
            card.appendChild(card_course);

            var card_qualification = document.createElement("span");
            card_qualification.innerHTML = "Qulaification : " + allUsers[i].Qualification;
            card.appendChild(card_qualification);

            var card_gender = document.createElement("span");
            card_gender.innerHTML = "Gender : " + allUsers[i].Gender;
            card.appendChild(card_gender);

            var buttons = document.createElement("div");
            card.appendChild(buttons);

            var edit_btn = document.createElement("button");
            edit_btn.setAttribute("class", "edit_btn");
            edit_btn.innerHTML = "Edit";
            buttons.appendChild(edit_btn);

            var dlt_btn = document.createElement("button");
            dlt_btn.setAttribute("class", "dlt_btn");
            dlt_btn.innerHTML = "Delete";
            buttons.appendChild(dlt_btn)

        }
    }
}









// function for showing data

// function show(){
//     document.write(Obj)
// }