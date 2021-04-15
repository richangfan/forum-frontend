<template>
    <div>
        <template v-if="!post.id">
            <h1>找不到帖子</h1>
        </template>
        <template v-else>
            <div style="text-align: left;">
                <div style="border-bottom: 1px solid #e2e2e2;">
                    <div style="font-size: 24px; font-weight: 500;">{{post.title}}</div>
                    <div style="font-size: 14px;">作者：{{post.userName}} 发布时间：{{post.created}}</div>
                </div>
                <div style="font-size: 16px; margin-top: 10px; white-space: pre-line;">
                    {{post.content}}
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    import { get, post } from '../request.js'
    export default {
        name: 'detail',
        data() {
            return {
                post: {
                    id: 0,
                }
            }
        },
        created: function () {
            this.post = this.$router.currentRoute.params.post
        },
        methods: {
        }
    }
</script>