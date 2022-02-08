////////// 내가 만드는 제이쿼리 플러그인! //////////////////

/* 
    플러그인이란?

    - 특정 기능을 구현하여 함수를 호출하면 쉽게 그 기능을
    사용할 수 있도록 만들어진 외부구현 소스코드

    - 플러그인 함수 명명법:
    개발언어이름.플러그인이름-버전번호.js
    예) jquery.myplugin-1.2.js
    -> jquery로 개발되었음
    -> 플러그인 이름은 myplugin 임
    -> 버전은 1.2임
    (버전은 소수점위 큰 숫자는 큰변화시, 작은변화는 소수점아래 표현)

    - 플러그인 형식:

    jQuery.fn.함수명 = function(전달변수){
        구현코드...
        return 결과; -> 필요에 따라 사용함
    };

*/
///////////////////////////////////////////////////////////
//// 플러그인 함수명: myAction /////////////////////////////
//// 기능: 배경색과 왼쪽마진, 시간값을 받아서 애니메이션함 ////
///////////////////////////////////////////////////////////
jQuery.fn.myAction = function(color,ml,tm){
    // 전달변수: color-배경색, ml-왼쪽마진, tm-시간
    console.log("전달값:"+color+"/"+ml+"/"+tm);

    // 기능구현하기 ///////////////
    $(this).animate({
        backgroundColor:color,
        marginLeft: ml+"px"
    },tm); /////// animate ///////


}; ///////////////// myAction 함수 /////////////////////////
///////////////////////////////////////////////////////////