<template>
    <div>
        <div style="margin-bottom: 12px;">
            <div style="font-size: 20px; text-align: left;">标题</div>
            <div>
                <input v-model="post.title" type="text"
                    style="display: block; width: 100%; font-size: 16px; text-indent: 4px;">
            </div>
        </div>
        <div>
            <div style="font-size: 20px; text-align: left;">内容</div>
            <div><textarea v-model="post.content" style="width: 100%; height: 200px; text-indent: 4px;"></textarea>
            </div>
        </div>
        <div @click="create" class="button" style="padding: 4px;">发布</div>
    </div>
</template>

<script>
    import { get, post } from '../request.js'
    export default {
        name: 'post',
        data() {
            return {
                post: {
                    title: '',
                    content: ''
                }
            }
        },
        methods: {
            create() {
                post('/post/create', { title: this.post.title, content: this.post.content }).then(data => {
                    this.$router.push({
                        name: 'list'
                    })
                }).catch(error => {
                    alert(error.message)
                })
            }
        }
    }
</script>