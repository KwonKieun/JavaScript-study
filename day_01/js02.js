// 조건문 

/* let userId=prompt('아이디를 입력하세요');
if(userId==='whj001'){
    console.log(`${userId} 방문해 주셔서 감사합니다1.`);
}else if(userId==='whj002'){
    console.log(`${userId} 방문해 주셔서 감사합니다2.`);
}else if(userId==='whj003'){
    console.log(`${userId} 방문해 주셔서 감사합니다3.`);
}else{
    console.log(`잘못된 아이디 입니다`);
} */

// 아이디를 입력 받아서 user123 이면 관리자라고 콘솔에 출력 
// user456 이면 부관리자 
// 나머지 일반회원

/* let userName = prompt('아이디를 입력하세요');
if(userName==='user123'){
    console.log(userName+'관리자')
}else if(userName==='user456'){
    console.log(`${userName}부관리자`)
}else{
    console.log('일반회원')
} */


// 프롬프트 창으로 점수를 입력 받아서  학점을 콘솔에 출력 하세요
//   100-90 A 학점 
//   89-80 B 학점 
//   79-70 C 학점 
//   69-60 D 학점 
//   나머지는 F학점

/* let jumsu=prompt('당신의 점수를 입력하세요');
if(jumsu>=90 && jumsu<=100){
    console.log(`A학점`)
}else if(jumsu>=80 && jumsu<90){
    console.log(`B학점`)
}
else if(jumsu>=70 && jumsu<80){
    console.log(`C학점`)
}
else if(jumsu>=60 && jumsu<70){
    console.log(`D학점`)
}else if(jumsu>=0 && jumsu<60){
    console.log(`F학점`)
}else{
    console.log(`잘못된 입력`)
} */

// 아이디와 비밀번호를 입력 받고 아이디가 front 비밀번호가 001 경우에만 로그인 되었습니다 출력. 아닌경우 로그인 정보가 일치하지 않습니다 출력.

let userId=prompt('아이디를 입력하세요');
if(userId=='front'){
  let userPw=prompt('비밀번호를 입력하세요');
  if(userPw=='001'){
        console.log('로그인되었습니다.')
   }else{
        console.log('비밀번호가 잘못 입력되었습니다.')
   }
}else{
 console.log('잘못된 아이디 입니다');
}

