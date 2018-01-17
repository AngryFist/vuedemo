<template lang="html">
    <div class="topNav">
        <div class="apartment">{{location[i]}}<s></s></div>
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

<style lang="less" scoped>
.topNav {
    display: flex;
}
.apartment {
    width:60%;
    background: url(https://xxx/images/top-position.png) .6rem center no-reepat;
    background-size: 1rem 1.2rem;
    background-color: rgba(0,0,0,.5);
    color: #fff;
}
.searchNav {
    width: 40%;
}
</style>
