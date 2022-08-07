<template>
    <div class="demo-pagination-block">
        <el-pagination
                v-model:currentPage="currentPage"
                v-model:page-size="pageSize"
                :small="small"
                :disabled="disabled"
                :background="background"
                layout="total, prev, pager, next, jumper"
                :total="6"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
        />
    </div>
</template>
<script lang="ts" setup>
    import { ref } from 'vue'

    const currentPage = ref(1)
    const pageSize = ref(5)
    const small = ref(false)
    const background = ref(true)
    const disabled = ref(false)

    const handleSizeChange = (val: number) => {
        console.log(`${val} items per page`)
    }
    const handleCurrentChange = (val: number) => {
        console.log(`current page: ${val}`)
    }
</script>

<style scoped>
</style>