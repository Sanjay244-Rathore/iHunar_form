// main div
var main = document.getElementById("contain");

// section -1

var sec_1 = document.createElement("div");
sec_1.setAttribute("id","sec-1")
main.appendChild(sec_1);

var h3 = document.createElement("h3");
h3.setAttribute("id","student");
h3.innerHTML = "Student Sign Up"
sec_1.appendChild(h3);

// section -2

var sec_2 = document.createElement("div");
sec_2.setAttribute("id","sec-2");
main.appendChild(sec_2);

var img = document.createElement("img");
img.setAttribute("src","./img-logo/colorlogo-01-64282ecd19dfa05a688d9c8629a14fc6.png");
img.setAttribute("id","ihunar");
sec_2.appendChild(img);

var username = document.createElement("input");
username.setAttribute("type","text");
username.setAttribute("placeholder","Name")
sec_2.appendChild(username);

var fathername = document.createElement("input");
fathername.setAttribute("type","text");
fathername.setAttribute("placeholder","Father's Name")
sec_2.appendChild(fathername);

var email = document.createElement("input");
email.setAttribute("type","email");
email.setAttribute("placeholder","Email")
sec_2.appendChild(email);

var password = document.createElement("input");
password.setAttribute("type","password");
password.setAttribute("placeholder","Password")
sec_2.appendChild(password);

var cnic_num = document.createElement("input");
cnic_num.setAttribute("type","number");
cnic_num.setAttribute("placeholder","CNIC Number")
sec_2.appendChild(cnic_num);

var mob_num = document.createElement("input");
mob_num.setAttribute("type","number");
mob_num.setAttribute("placeholder","Mobile Number")
sec_2.appendChild(mob_num);


var courses = document.createElement("input");
courses.setAttribute("type","text");
courses.setAttribute("placeholder","Select Courses")
sec_2.appendChild(courses);


var qualification = document.createElement("input");
qualification.setAttribute("type","text");
qualification.setAttribute("placeholder","Select Qualification")
sec_2.appendChild(qualification);


var gender = document.createElement("input");
gender.setAttribute("type","text");
gender.setAttribute("placeholder","Select Gender")
sec_2.appendChild(gender);

// var photo = document.createElement("input");
// photo.setAttribute("type","text");
// photo.setAttribute("placeholder","Upload Photo")
// sec_2.appendChild(photo);

var add_btn = document.createElement("button");
add_btn.setAttribute("id","add-btn");
add_btn.setAttribute("onclick","AddData()");
add_btn.innerHTML = "AddData";
sec_2.appendChild(add_btn);

// function for adding data

function AddData(){
    var Obj = [
        {
            Name : username.value,
            F_name : fathername.value,
            Email : email.value,
            Password : password.value,
            CNIC_Number : cnic_num.value,
            Mobile : mob_num.value,
            Course : courses.value,
            Qualification : qualification.value,
            Gender : gender.value
        }
    ]
    console.log(Obj);

    
    show.addEventListener("click",function(){
    document.write(Obj)
    })
}



var br = document.createElement("br");
sec_2.appendChild(br)

var span = document.createElement("span");
span.setAttribute("id","show");
span.innerHTML = "Show results";
sec_2.appendChild(span);

var show_btn = document.createElement("button");
show_btn.setAttribute("id","show-btn");
show_btn.setAttribute("onclick","show()");
show_btn.innerHTML = "Show";
sec_2.appendChild(show_btn);

// function for showing data

// function show(){
//     document.write(Obj)
// }