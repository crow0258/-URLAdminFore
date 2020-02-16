<template>
    <div class="container">
        <text class="title">URL Admin</text>
        <div>
            <image style="width:100px;height:100px" :src="urlAdmin.img"/>
        </div>
        <div class="categroies">
            <list>
                <cell v-for="categroy in urlAdmin.categroies">
                    <text class="categroy">{{categroy.title}}</text>
                    <div class="urls">
                        <list>
                            <cell v-for="url in categroy.urls" class="float-left">
                                <a :href="url.url" target="_blank">
                                    <text class="url">{{url.text}}</text>
                                </a>
                                <text class="desc">{{url.desc}}</text>
                            </cell>
                        </list>
                    </div>
                </cell>
            </list>
        </div>
    </div>
</template>

<script>
    const modal = weex.requireModule('modal') || {};
    const stream = weex.requireModule('stream') || {};
    const API = 'http://192.168.1.7:9090/categroies';
    export default {
        name: 'URL Admin',
        created: function() {
            const self = this;
            stream.fetch({
                method: 'GET',
                url: API,
                type: 'json'
            }, function (ret) {
                if (!ret.ok) {
                    modal.toast({
                        message: 'Network Error!',
                        duration: 3
                    });
                } else {
                    self.urlAdmin = ret.data.data;
                }
            });
        },
        data() {
            return {
                urlAdmin: {
                    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoAQAAAABSnlx4AAABcklEQVR42u3aTdKDIAyAYbryGB5Vj+oxXEkL+YG2TNtvR755XThSH9wwCTE15b8cCY1Go9FoNBodRV9JjyXnfbXhdtjPGzqQlvGxlJPAmw7bXXQQLWYpi76UYZ3nQ3RA/YjiVBf9eTI6pLZQvv208ugJtWfkx+5ajvO3/I2eT1uldEns6ulbXYWeT7dDwzbVtPz1fQc9n25GC959PfWFxkIZHUZvLRkfsuhW+o7fYNCz6gJtO61T5NTqX3QkXSO4xO5WiqQ9eRFcayZ0IG1p2a48nnd5AjqOrlEsjVu9fXXNXHQcXca1NKobqy21ZulhJx49q85a5urG6kXwYlPQYbSvvPQTvNmX9AnoOLrfYkXnlpY/donQs+mXjp8GtbT98omOpa0T35p9l678OObRE+u3vzc9gEcrjw6gvcfw1ArM6IDaUrBfpfXj10HoCbVn5C6Aa1CP32DQ8+q+Umr997NvNKBDaL7/RqPRaDQajf43+g4L0h6kc+3nTwAAAABJRU5ErkJggg==",
                    url: "",
                    categroies: [{
                        title: "公司常用",
                        urls: [{
                            text: "首页",
                            url: "https://www.google.com/",
                            desc: "公司地址:"
                        }, {
                            text: "财务",
                            url: "https://www.google.com/",
                            desc: "ip:192.168.1.1,port:1120"
                        }, {
                            text: "考勤",
                            url: "https://www.google.com/",
                            desc: "考勤地址"
                        }]
                    },
                        {
                            title: "研发专用",
                            urls: [{
                                text: "帮助文档",
                                url: "https://www.google.com/",
                                desc: "研发手册文档"
                            }, {
                                text: "测试地址",
                                url: "https://www.google.com/",
                                desc: "测试 account:admin,password:admin"
                            }, {
                                text: "gitlab地址",
                                url: "https://www.google.com/",
                                desc: "外网ip:gitlab.com..."
                            }, {
                                text: "Jenkins部署地址",
                                url: "https://www.google.com/",
                                desc: "账户名:test,密码:test"
                            }, {
                                text: "Docker 内容库",
                                url: "https://www.google.com/",
                                desc: "请使用自己账户登录，并上传"
                            }, {
                                text: "Maven 内容库",
                                url: "https://www.google.com/",
                                desc: "maven.zero.com  maven地址库"
                            }, {
                                text: "Npm 内容库",
                                url: "https://www.google.com/",
                                desc: "npm.zero.com  npm地址库"
                            }]
                        }, {
                            title: "常用工具",
                            urls: [{
                                text: "www.google.com",
                                url: "https://www.google.com/",
                                desc: "google 搜索"
                            }, {
                                text: "www.github.com",
                                url: "https://www.google.com/",
                                desc: "大型在线交友平台"
                            }, {
                                text: "www.naught.com",
                                url: "https://www.naught.com/",
                                desc: "naught从0开始,491529736@qq.com"
                            }]
                        }]
                }
            }
        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
        flex: 1;
    }

    .title {
        background-color: #00b4ff;
        font-weight: bold;
        font-size: 40px;
    }

    .categroies {
        padding-left: 30px;
    }

    .categroy {
        font-weight: bold;
        font-size: 30px;
    }

    .urls {
        padding-left: 20px;
    }

    .url {
        height: 30px;
        color: blue;
        line-height: 30px;
        font-size: 20px;
        text-decoration: underline;
    }

    .desc {
        height: 30px;
        margin-left: 20px;
        font-size: 20px;
    }

    .float-left {
        flex-direction: row
    }
</style>
