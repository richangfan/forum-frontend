<template>
    <div class="list">
        <div class="row">
            <div class="label">邀请码</div>
            <div class="column"><input type="text" v-model="code"></div>
        </div>
        <div class="row">
            <div class="label">用户名</div>
            <div class="column"><input type="text" v-model="name"></div>
        </div>
        <div class="row">
            <div class="label">密码</div>
            <div class="column"><input type="password" v-model="password" autocomplete="new-password"></div>
        </div>
        <div class="row">
            <div class="label">再次输入密码</div>
            <div class="column"><input type="password" v-model="password2" autocomplete="new-password"></div>
        </div>
        <div class="row">
            <div class="label"></div>
            <div class="column">
                <div class="button" @click="register">注册</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { get, post } from '../request.js'
    export default {
        data() {
            return {
                name: '',
                password: '',
                password2: '',
                code: '',
            }
        },
        methods: {
            register() {
                if (!this.name || !this.password || !this.password2 || !this.code) {
                    alert('有未填写的项目')
                    return
                }
                if (this.password != this.password2) {
                    alert('两次输入密码不一致')
                    return
                }
                post('/user/register', {
                    name: this.name,
                    password: this.password,
                    code: this.code,
                }).then(data => {
                    this.$store.commit('setUser', { user: data.user })
                    this.$router.replace({
                        path: '/'
                    })
                }).catch(error => {
                    alert(error.message)
                })
            },
        },
    }
</script>

<style>
    .list {
        font-size: 16px;
        font-weight: 500;
        margin: 20px auto;
    }

    .row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 16px;
    }

    .label {
        text-align: right;
        width: 128px;
        padding-right: 4px;
        line-height: 32px;
    }

    .column {
        width: 128px;
        padding-right: 4px;
        line-height: 32px;
    }

    .column>input {
        height: 28px;
        text-indent: 4px;
    }

    .button {
        background-color: #e2e2e2;
        color: #000;
        width: 64px;
        border-radius: 3px;
        border: 1px solid;
        cursor: pointer;
    }
</style>