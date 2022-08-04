const baseUrl = "http://www.liulongbin.top:3007"

$.ajaxPrefilter((option) => {
    if (option.url.includes('/my/')) {
        option.headers = {
            Authorization: localStorage.getItem('token'),
        }
    }
    option.url = baseUrl + option.url

    option.complete = function (res) {
        if (res.responseJSON.status === 1 && res.responseJSON.message === "身份认证失败！") {
            // 强制跳转到登录页面
            location.href = "/login.html"
            //  强制清空 token
            localStorage.removeItem('token')
        }
    }
})