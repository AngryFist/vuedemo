<template lang="html">
    <div class="">
        <span>{{gdid}}</span>
        <ul>
            <li v-for="item in listData">
                {{item.rest}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name : 'restList',
    props : {
        gdid : ''
    },
    data (){
        return {
            listData : []
        }
    },
    methods : {
        ajaxList : function() {
            let that = this;
            let params = {
                url : 'restaurant',
                data : {
                    offset:0,
                    screen:4,
                    sort:0,
                    sortFlag:0,
                    customerId:1981703081219563,
                    gdId:that.gdid,
                    platform:4,
                },
                reslove : {
                    Init : function(){
                        let data = arguments[0].data;
                        that.listData = data.data.rests// 请求成功回调
                        console.log(that.listData);
                    }
                }
            }
            that.vajax(that, params)
        }
    },
    watch : {
        gdid : function(){
            this.ajaxList();
        }

    }
}
</script>

<style lang="css" scoped>
</style>
