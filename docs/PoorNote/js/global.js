$(function() {
    $('#search__btn').click(function() {
        console.log($('#search__text').val());
    });
});

$(function() {
    let userId = window.userId = $.session.get("userId");
    if(userId) {
        $('#user').css('display', 'inline-block');

        // 获取用户信息
        $.ajax({
            type: 'get',
            url: "http://food.amazing-w.top/public/index/user/getUserInfo",
            data: {id: userId},
            success: (res) => {
                window.userInfo = {
                    id: userId,
                    name: res.name,
                    sex: res.sex,
                    head: res.head
                };
                $('#user__head').attr('src', window.userInfo.head);
                if($('.head__name').length) {
                    $('.head__name').text(window.userInfo.name);
                }
                if($('.head__img').length) {
                    $('.head__img').attr('src', window.userInfo.head);
                }
            }
        })
    } else {
        window.isLogin = false;
        $('#login__tip').css('display', 'block');
        $('.login__btn').css('display', 'inline-block');
    }
})

$(function() {
    $('#logOut').click(() => {
        $.session.remove("userId");
        location.reload();
    });
})
