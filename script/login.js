let btns = document.getElementsByClassName("loginBtn");
let input = document.querySelectorAll("input");
let regist = document.getElementById("hideRegistBtn");

console.log(btns);

btns[0].addEventListener("click", () => {
  btns[0].style.backgroundColor = "#ff88C2";
  btns[1].style.backgroundColor = "rgb(214 208 188)";
  input[0].name = "useremail";
  input[1].name = "useraccount";
  input[2].name = "userpassword";
  console.log(input);
});

btns[1].addEventListener("click", () => {
  btns[0].style.backgroundColor = "rgb(214 208 188)";
  btns[1].style.backgroundColor = "#ff88C2";
  input[0].name = "selleremail";
  input[1].name = "selleraccount";
  input[2].name = "sellerpassword";
  console.log(input);
});

regist.addEventListener("click", () => {
  document.getElementById("test").innerHTML = "註冊";
  document.getElementById("submit").innerHTML = "建立帳戶";
  document.getElementById("hideForgotBtn").style.display = "none";
  document.getElementById("hideRegistBtn").innerHTML = "已有帳戶？點此登入";
});

