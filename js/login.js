const loginAuth = document.getElementById("login-btn");

loginAuth.addEventListener("click", ()=> {
  const email = document.getElementById("username");
  const pw = document.getElementById("password");

  const xhr = new XMLHttpRequest(); 
   
  xhr.open('GET', '../config/dbConfig.json', true);
  xhr.send(); 
  xhr.onload = () => { 
    if (xhr.status == 200) { 
      result = xhr.response;
      dbConfig = JSON.parse(result)
      if (email.value == dbConfig.my_id && pw.value == dbConfig.my_pw) {
        window.location.href ="friends.html"
        console.log("로그인")
      } else {
        alert("없는 계정입니다.")
        window.location.href = "index.html"
        console("로그인 실패")
      } 
    } else { 
      //통신 실패 
      console.log("통신 실패"); 
    } 
  } 
})

