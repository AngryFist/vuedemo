<template lang="html">
    <div class="">
        <topNav :apartment="apartment" />
        <banner :gdid="gdid" />
        <showCase :gdid="gdid" />
        <restList :gdid="gdid" />
    </div>
</template>

<script>
import AMap from 'AMap'
import topNav from '@/components/order/topNav'
import banner from '@/components/order/banner'
import showCase from '@/components/order/showCase'
import restList from '@/components/order/restList'

export default {
    components : {topNav,restList,banner,showCase},
    name : 'autoGeo',
    data (){
        return {
            gdid : '',
            apartment : ''
        }
    },
    methods : {
        autoGeoInfo : function(pos){
            let that = this;
            AMap.service('AMap.Geocoder',function(){//回调函数
                //实例化Geocoder
                let geocoder = new AMap.Geocoder({
                    radius: 1000,
                    extensions: "all",
                    //lang : localStorage.getItem('lang')
                    language : 'zh_CN'
                });
                that.getAddr(geocoder,pos)
            })
        },
        autoGeoInit : function(){
            let geolocation, that = this;
            AMap.plugin('AMap.Geolocation',function(){//回调函数
                geolocation = new AMap.Geolocation({
                    lang : localStorage.getItem('lang')
                });
                geolocation.getCurrentPosition();
                AMap.event.addListener(geolocation, 'complete', function(GeolocationResult){
                    that.autoGeoInfo(GeolocationResult.position);
                });
                AMap.event.addListener(geolocation, 'error', function(GeolocationError){
                    console.log(GeolocationError);
                });
            })
        },
        getAddr : function(geocoder,pos){
            let that = this;
            geocoder.getAddress([pos.lng,pos.lat], function(status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    //showPoiList(result);
                    var poi = result.regeocode.pois[0];
                    that.$http({
                        url : '//restapi.amap.com/v3/place/detail',
                        methods : 'GET',
                        params : {
                            s : 'test',
                            key:'fe0349830f43cbe8e469b0e8dcaa8172',
                            language : 'zh_CN',
                            id : poi.id
                        }
                    }).then(function(result){
                        var pois = result.data.pois[0];
                        var addr = {
                            cityId : pois.citycode,
                            city : pois.cityname,
                            gdId : pois.id,
                            nickName : '',
                            addrRoad : pois.address,
                            apartment : pois.name,
                            detailAddress : ''
                        }
                        console.log(addr);
                        that.gdid = pois.id;
                        that.apartment = pois.name;
                        localStorage.Addr = JSON.stringify(addr);

                    },function(){
                        console.log(msg);
                        alert('获取地址失败');
                    })
                }else{
                   console.log('failed');
                }
            });
        }

    },
    created (){
        this.autoGeoInit()
    }

}
</script>
<style lang="css">
</style>
