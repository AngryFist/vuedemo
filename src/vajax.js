export default function(__this, params){
    let paramsData = params.data;
    paramsData.language = __this.CONFIG.lang

    __this.$http({
      url : __this.CONFIG.baseUrl + params.url,
      method : params.method || 'GET',
      params : paramsData
    }).then(function (response) {
          console.log(response.data);
          let reslove = params.reslove;
          if(reslove){
              if({}.toString.call(reslove.Init) == "[object Function]"){
                  let params = reslove.params || '';
                  reslove.Init(response,params)
              }
          }

          //this.listData = response.data.data.rests// 请求成功回调
    }, function (){
        let reject = params.reject;
        if(reject){
            if({}.toString.call(reject.Init) == "[object Function]"){
                let params = reject.params || '';
                reject.Init(response,params)
            }
        }
    })
}
