 //公共的方法

//处理时间格式

let getTimeType = function(data) {
    let times = data/1000
    let m = Math.floor(times/60)
   
    let mm 
    if(m<10){
         mm =`0${m}`
    }else{
       mm = m
    }
     let s = times-m*60
     let ss
     if(s<10){
        ss=`0${s}`
     }else{
        ss=s
     }
  return `${mm}:${ss}`;
}
 
 
 let getPlayCurrentType = function(data){
    if(data>=10000){
        return  (data / 10000).toFixed(1) + "万";
       }else{
           return data
       }
 }

 let splitText = function(data){
   // console.log(data);
   let arrs = data.split("\n");
   //正则匹配时间
   let esg = /\d{2}:\d{2}.\d{2,3}/; 
   let arr = []; 
   for (let i = 0; i < arrs.length - 1; i++) {
     arr.push({
       lrc: arrs[i].split("]")[1] ,
       time:timeType(arrs[i].match(esg)[0]), // 04：10.33=》 250
     });
   }
   return arr;
 }

 let timeType = function(time) {
   let m = time.split(":")[0];
   let s = time.split(":")[1];
   //处理分钟
   let mm = 0;
   let ss = 0;
   if (m == "00") {
   } else {
     mm = Math.floor(m) * 60;
   }
   //处理秒
   if (s == "00") {
   } else {
     ss = Math.floor(s);
   }
   return mm + ss; //返回时间
 }

 

 export {
     getPlayCurrentType,
     getTimeType,
     splitText,
 }