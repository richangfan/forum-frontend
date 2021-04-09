<template>
    <div class="list">
        <div class="row">
            <div class="label">用户名</div>
            <div class="column"><input type="text" v-model="name"></div>
        </div>
        <div class="row">
            <div class="label">密码</div>
            <div class="column"><input type="password" v-model="password" autocomplete="new-password"></div>
        </div>
        <div class="row">
            <div class="label"></div>
            <div class="column">
                <div class="button" @click="login">登录</div>
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
            }
        },
        methods: {
            login() {
                if (!this.name || !this.password) {
                    alert('有未填写的项目')
                    return
                }
                post('/user/login', {
                    name: this.name,
                    password: this.password,
                }).then(data => {
                    this.$store.commit('setToken', { token: data.token })
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
</style>