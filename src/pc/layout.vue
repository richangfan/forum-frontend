<template>
    <div>
        <div class="header">
            <div class="container">
                <div style="display: flex; flex-direction: row; justify-content:space-around;">
                    <div style="font-size: 28px;">论坛</div>
                    <div>
                        <a class="navbar-link" @click="to('list')">首页</a>
                        <a class="navbar-link" @click="to('login')">登入</a>
                        <a class="navbar-link" @click="to('register')">注册</a>
                        <a class="navbar-link" @click="to('post')">发帖</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="body">
            <div class="container" style="padding: 20px 0">
                <div style="background-color: #fff; padding: 10px;">
                    <router-view />
                </div>
            </div>
        </div>
        <div class="footer">
            Copyright © 2019 易手宝– 浙ICP备15033169号-3
            <br>
            增值电信业务经营许可证：浙B2-20160494
            <br>
            浙公网安备 33070202100305号
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            to: function (name) {
                this.$router.push({ name })
            }
        }
    }
</script>

<style>
    .header {
        height: 44px;
        line-height: 44px;
        padding: 0 20px;
        background-color: #fff;
        border-bottom: 1px solid rgba(0, 0, 0, .22);
    }

    .body {
        background-color: #e2e2e2;
        background-repeat: repeat-x;
        background-image: (../assets/shadow_light.png);
    }

    .footer {
        margin-top: 10px;
        background-color: #fff;
    }

    .container {
        min-width: 600px;
        max-width: 1060px;
        margin: 0 auto;
    }

    .navbar-link {
        color: #556;
        margin-right: 10px;
    }
</style>