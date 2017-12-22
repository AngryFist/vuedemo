<template lang="html">
    <div class="topNav">
        <div class="apartment">{{location[i]}}</div>
        <div class="searchNav">
            {{search[i]}}
        </div>
    </div>
</template>

<script>
export default {
    name : 'topNav',
    props : {
        apartment : ''
    },
    data (){
        return {
            i : this.CONFIG.lang() == 'zh_CN' ? 1 : 0,
            search : [
                'restaurant, dish name',
                '餐厅，菜品'
            ],
            location : [
                'Locationg...',
                '正在定位'
            ]

        }

    },
    watch : {
        apartment : function(){
            this.location = [
                this.apartment,
                this.apartment
            ]
        }
    }
}
</script>

<style lang="css" scoped>
</style>
