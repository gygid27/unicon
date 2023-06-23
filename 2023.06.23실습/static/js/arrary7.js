/*
    현재 태그(엘리먼트)의 다음 태그를 가져오는 방법
    - .nextSibling (형제태그를 의미한다.)
    
    태그(엘리먼트) 객체에 클래스를 추가하는 방법
        -element.classList.add('클래스이름');
    
        클래스 여러개 추가
        - element.classList.replace('변경전이름' , ''변경후이름);
        
        클래스 이름 변경
        - element.classList.toggle('삭제할 클래스 이름');

        조건에 따라 클래스 삭제
        -element.classList.toggle('삭제클래스 이름' , '조건식');

        태그(element)객체에 클래스가 있는지 확인방법
            -element.classList.contains('클래스이름');
            -해당 클래스이름이 있다면 true 없다면 false

            */



window.onload=function(){
    // 화면이 전부 로딩 되면 시작하는 함수
    var icon = document.getElementsByClassName("strapIcon");
    icon[0].addEventListener("click",function(){
        var list = this.nextSibling;
        var isActive = list.classList.contains("list_active");
        if(isActive)
            list.classList.toggle("list_active");
            else
                list.classList.add("list_active");
        
        // ul태그에서 list_active 있다면 삭제해라
        // list.style.display="block";
        //단어의 의마가 형제라는 의미이다 next.sibling
        // var list = document.getElementsByClassName("menu_list");
        // list[0].style.display="block";
    }); 
    //메뉴아이콘을 눌렀을 때 메뉴리스트가 나오는 작업
}