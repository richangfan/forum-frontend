<template>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" autocomplete="on"
        @keyup.native.enter="handleSubmit('formInline')">
        <FormItem prop="name">
            <Input type="text" v-model="formInline.name" placeholder="请输入手机号" autocomplete="on">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="captcha">
            <Input type="text" v-model="formInline.captcha" placeholder="请输入验证码" autocomplete="on">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')"
                style="float:left; margin-right: 10px;">登入</Button>
            <Button type="primary" @click="getCaptcha">获取验证码</Button>
        </FormItem>
    </Form>
</template>

<script>
    import { get, post } from '../request.js'
    export default {
        data() {
            return {
                formInline: {
                    name: '',
                    captcha: '',
                },
                ruleInline: {
                    name: [
                        { required: true, message: '请输入手机号', trigger: 'blur' }
                    ],
                    captcha: [
                        { required: true, message: '请输入验证码', trigger: 'blur' }
                    ],
                },
                captcha: false
            }
        },
        methods: {
            getCaptcha() {
                if (this.formInline.name == '') {
                    this.$Message.error('请输入手机号')
                    return false
                }
            },
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (!valid) {
                        this.$Message.error('信息填写不完整')
                        return
                    }
                    post('/user/login', {
                        name: this.formInline.name,
                        captcha: this.formInline.captcha,
                    }).then(data => {
                        this.$store.commit('setToken', { token: data.token })
                        this.$store.commit('setUser', { user: data.user })
                        this.$router.replace({
                            path: '/'
                        })
                    }).catch(error => {
                        this.$Message.error(error.message)
                    })
                })
            },
        },
    }
</script>