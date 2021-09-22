const btn = document.querySelector('#loginBtn')
const userId = document.querySelector('#userId')
const userPw = document.querySelector('#userPw')
let result = document.querySelector('#result')
btn.addEventListener('click', function () {
  if(userId.value.length == 0){
    result.innerHTML = "아이디를 입력해주세요";
    return;
  }else{
    result.innerHTML = "";
  }
  if(userPw.value.length == 0){
    result.innerHTML = "비밀번호를 입력해주세요";
    return;
  }else{
    result.innerHTML = "";
  }
});