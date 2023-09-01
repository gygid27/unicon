module.exports = {
    login: function () {
        return `
    <script>
    function login() {
        if ($('#sdmId').val() == '') {
            alert('아이디를 입력하세요');
            $('#sdmId').focus();
        } else if ($('#sdmPw').val() == '') {
            alert('비밀번호를 입력하세요');
            $('#sdmPw').focus();
        } else {
            $('#loginf').submit();
            //로그인을 하기 아이디랑 비밀번호 짓어줘서 넣어주기
        }
    }
    </script>
    
    `;
    },
};
