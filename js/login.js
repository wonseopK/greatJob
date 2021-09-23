//FadeIn Ordery 
const fadeEls = document.querySelectorAll(".fade-In img");
fadeEls.forEach(function (fadeEl, index) { 
  
  // gsap.to(요소, 지속시간, 옵션);
 gsap.to(fadeEl, 1, {
   delay: (index + 1)*.7, // 0.7, 1.4, 2.1, 2.7
   opacity: 1,
 });
});
const action = document.querySelector('#actionLogin')
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
    action.setAttribute('action', './index.html');
    
  
});


