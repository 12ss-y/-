const getUserInfo = function() {
    $.ajax({
        type:'GET',
        url:"/my/userinfo",
        data:null,
        // headers: {
        //     Authorization:localStorage.getItem('token'),
        // },
        success: function(res) {
            // console.log(res);
            
        }
    })
}

const renderAvatar = function(data) {
    let name = data.nickname || data.username
    console.log(name);
    $('#welcome').html('欢迎' + name)
    if(data.user_pic !== null) {
        $('.layui-nav-img').attr('scr',data.user_pic)
        $('.text-avatar').hide()
    }else {
        // 渲染文本头像
        $(".layui-nav-img").hide();
        let firstName = name[0].toUpperCase();
        $(".text-avatar").html(firstName);
    }
}

getUserInfo()

$('#exitBtn').click(function() {
    layui.layer.confirm(
        "确定退出登录？",
        { icon: 3, title: "" },
        function (index) {
            // 清空本地存储里面的 token
            localStorage.removeItem("token");
            // 重新跳转到登录页面
            location.href = "/login.html";
        }
    );
});