<template lang="html">
    <div class="">
        <ul>
            <li v-for="item in listData">
                <img src="" :src="relSrc(item.img)" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name : 'banner',
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
                url : 'restaurant/getShowcaseList',
                data : {
                    appType : that.CONFIG.appType,
                    gdId:that.gdid
                },
                reslove : {
                    Init : function(){
                        let data = arguments[0].data;
                        that.listData = data.data// 请求成功回调
                        console.log(that.listData);
                    }
                }
            }
            that.vajax(that, params)
        },
        relSrc : function(img){
            let n = this.listData.length;
            console.log(img)
            let imgs = img.split(',');
            if(n == 1){
                return imgs[0];
            }else if(n == 2){
                return imgs[1];
            }
        }
    },
    computed : {

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
