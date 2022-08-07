<template>
    <div class="el-layout">
        <el-container>
            <el-header>
                <el-menu
                        :default-active="activeIndex"
                        mode="horizontal"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        :ellipsis="false"
                        @select="handleSelect"
                >
                    <div class="el-image">
                        <router-link to="/goHome" style="text-decoration: none;">
                            <el-image :src="require('@/assets/logo.jpg')" style="height: 40px" :fit="'contain'" />
                        </router-link>
                    </div>
                    <div class="flex-grow" />
                    <el-menu-item index="1">
                        <router-link to="/main" style="text-decoration: none;">首页</router-link>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <router-link to="/news" style="text-decoration: none;">冬奥新闻</router-link>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>项目简介</el-menu-item>
                    <el-menu-item index="4" disabled>知识问答</el-menu-item>
                    <el-menu-item index="5" disabled>意见反馈</el-menu-item>
                    <el-sub-menu index="6" disabled>
                        <template #title>登录/注册</template>
                        <el-menu-item index="6-1">登录</el-menu-item>
                        <el-menu-item index="6-2">注册</el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-header>
            <el-main>
                <router-view />
            </el-main>
            <el-footer>
                <div class="footer">
                        <p>
                            孟敬宇 技术支持 后台管理
                        </p>
                        <p>
                            计算机182班 1804030107 17812006610
                        </p>
                </div>
            </el-footer>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    const activeIndex = ref('1')
    const handleSelect = (key: string, keyPath: string[]) => {
        console.log(key, keyPath)
    }
</script>

<style scoped>
    .el-layout {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;

    }
    .el-container {
        width: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content:space-between;
    }
    .el-header {
        --el-header-padding: 0px;
    }
    .el-header .el-image{
        margin: 5px 0px 0px 30px;
    }
    .el-header .flex-grow {
        flex-grow: 1;
    }
    .el-footer {
        display: flex;
        height: 95px;
        background: #3bccde;
        width: 100%;
        text-align: center;
    }
    .footer{
        margin: auto;
    }

</style>