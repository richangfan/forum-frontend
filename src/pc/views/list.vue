<template>
    <div>
        <template v-for="(item) in list.data">
            <div class="post" @click="detail(item)">
                <div style="font-size: 16px;">{{item.title}}</div>
                <div style="font-size: 14px;">作者：{{item.userName}} 发布时间：{{item.created}}</div>
            </div>
        </template>
        <div style="display: flex; flex-direction: row-reverse;">
            <Page :total="list.total" :current.sync="list.page" :page-size="list.pageSize" @on-change="getData" />
        </div>
    </div>
</template>

<script>
    import { get, post } from '../request.js'
    export default {
        name: 'list',
        data() {
            return {
                list: {
                    pageSize: 10,
                    page: 1,
                    total: 100,
                    data: []
                },
            }
        },
        methods: {
            getData() {
                get('/post/list', { page: this.list.page, pageSize: this.list.pageSize }).then(data => {
                    this.list = data.list
                }).catch(error => {
                    alert(error.message)
                })
            },
            detail: function (post) {
                this.$router.push({
                    name: 'detail',
                    params: { post }
                })
            }
        },
        created: function () {
            this.getData()
        }
    }
</script>

<style>
    .post {
        margin-bottom: 15px;
        text-align: left;
        border-bottom: 1px solid #e2e2e2;
        cursor: pointer;
    }
</style>