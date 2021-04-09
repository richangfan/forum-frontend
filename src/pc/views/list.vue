<template>
    <div>
        <template v-for="(item) in list.data">
            <div class="post" @click="detail(item.id)">
                <div>{{item.title}}</div>
                <div style="font-size: 14px;">{{item.nickname}} {{item.createdtime}}</div>
            </div>
        </template>
        <div style="display: flex; flex-direction: row-reverse;">
            <Page :total="list.total" :current.sync="list.page" :page-size="list.pageSize" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'list',
        data() {
            return {
                list: {
                    pageSize: 10,
                    page: 1,
                    total: 100,
                    data: [
                        {
                            id: 1,
                            title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
                            nickname: '作者',
                            createdtime: '2021-03-04 12:12:33',
                        },
                        {
                            id: 1,
                            title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
                            nickname: '作者',
                            createdtime: '2021-03-04 12:12:33',
                        },
                        {
                            id: 1,
                            title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
                            nickname: '作者',
                            createdtime: '2021-03-04 12:12:33',
                        },
                        {
                            id: 0,
                            title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
                            nickname: '作者',
                            createdtime: '2021-03-04 12:12:33',
                        },
                    ]
                },
            }
        },
        methods: {
            detail: function (id) {
                this.$router.push({
                    name: 'detail',
                    params: { id }
                })
            }
        },
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