<template>
    <!--图片-->
    <div class="second_banner">
        <el-image :src="require('@/assets/dongao_huoju_pic.jpg')"/>
    </div>
    <div class="news_table">
        <el-table :data="data.tableData" border
                  :header-cell-style="{'text-align':'center',background:'#2166a9',color:'#fff'}"
                  :cell-style="{'text-align':'center'}"
                  style="width: 50%">
            <el-table-column prop="newsTitle" label="新闻标题" show-overflow-tooltip/>
            <el-table-column prop="adminName" label="发布人" width="80" show-overflow-tooltip/>
            <el-table-column prop="newsTime" label="发布时间" width="150" show-overflow-tooltip/>
            <el-table-column prop="news_content_button" label="详情" width="80" show-overflow-tooltip/>
        </el-table>
    </div>
    <div class="news_page">
        <el-pagination
                v-model:current-page="page.pageNum"
                v-model:page-size="page.pageSize"
                :small="small"
                :disabled="disabled"
                :background="background"
                layout="total, prev, pager, next, jumper"
                :total="total"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
        />
    </div>
</template>

<script lang="ts" setup>
    import {reactive, ref} from "vue";
    import axios from "axios"
    const data = reactive({
        tableData: [
            {
                news_title: '冬奥会吉祥物冰墩墩在开幕式中出场',
                admin_name: 'admin',
                news_time: '2022-02-04 20:00'
            },
            {
                news_title: '冬残奥会吉祥物雪容融在开幕式中出场',
                admin_name: 'admin',
                news_time: '2022-03-04 20:00'
            }
        ]
    })
    const news_content_button = "详情"

    const total = ref(2)
    const page = reactive({//配置对应的查询参数
        pageNum: 1,
        pageSize: 5,
    });
    const small = ref(false)
    const background = ref(true)
    const disabled = ref(false)

    // 向后端获取表格数据(分页)
    const getNewsListFront = () => {
        axios.get('/api/news/getNewsListFront?pageNum='+page.pageNum+'&pageSize='+page.pageSize
        ).then(res => {
            console.log(res.data.data)
            data.tableData = res.data.data.records
            total.value = res.data.data.total
        })
    };
    getNewsListFront();
    const handleSizeChange = (val: number) => {
        page.pageSize = val
        console.log(`${val} items per page`)
        getNewsListFront();
    }
    const handleCurrentChange = (val: number) => {
        page.pageNum = val
        console.log(`current page: ${val}`)
        getNewsListFront();
    }
</script>

<style scoped>
    .el-main{
        text-align:center;
    }
    .el-main .second_banner{
        text-align:center;
    }
    .el-main .news_table{
        text-align:center;
    }
    .el-main .news_page{
        text-align:center;
    }
    .el-main .news_table .el-table{
        margin: 40px auto 20px auto;
    }
    .el-main .news_page .el-pagination{
        margin: 10px auto 0px auto;
        width: 350px;
    }
</style>