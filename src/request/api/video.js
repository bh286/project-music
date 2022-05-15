import service from "..";

let getrecommendMV =  function(url,params){
    return new Promise((resolve,reject)=>{
         //通过axios 发送请求get
         service.get(url,{
           params
         }).then(res=>{
           resolve(res)
         })
         .catch(err=>{
           reject(err)
         })
    })
  }

  let getMV =  function(url,params){
    return new Promise((resolve,reject)=>{
         //通过axios 发送请求get
         service.get(url,{
           params
         }).then(res=>{
           resolve(res)
         })
         .catch(err=>{
           reject(err)
         })
    })
  }

  let getVideoUrl =  function(url,params){
    return new Promise((resolve,reject)=>{
         //通过axios 发送请求get
         service.get(url,{params}).then(res=>{
           resolve(res)
         })
         .catch(err=>{
           reject(err)
         })
    })
  }

  let getVideoDetail =  function(url,params){
    return new Promise((resolve,reject)=>{
         //通过axios 发送请求get
         service.get(url,{params}).then(res=>{
           resolve(res)
         })
         .catch(err=>{
           reject(err)
         })
    })
  }

let getRVideo = function(url,params){
    return new Promise((resolve,reject)=>{
         //通过axios 发送请求get
         service.get(url,{
           params
         }).then(res=>{
           resolve(res)
         })
         .catch(err=>{
           reject(err)
         })
    })
}


export {
    getrecommendMV,
    getMV,
    getVideoUrl,
    getRVideo,
    getVideoDetail
}