import service from "..";

let getrecommendMusic = function (url, params) {
  return new Promise((resolve, reject) => {
    service.get(url, { params })
      .then(res =>
        resolve(res))
      .catch(err => {
        reject(err)
      })
  })
}

let gethotMusicList = function (url, params) {
  return new Promise((resolve, reject) => {
    //通过axios 发送请求get
    service.get(url, {
      params
    }).then(res => {
      resolve(res)
    })
      .catch(err => {
        reject(err)
      })
  })
}

let getpeakMusicList = function (url, params) {
  return new Promise((resolve, reject) => {
    //通过axios 发送请求get
    service.get(url, {
      params
    }).then(res => {
      resolve(res)
    })
      .catch(err => {
        reject(err)
      })
  })
}

let getMusicDetail = function (url, params) {
  return new Promise((resolve, reject) => {
    //通过axios 发送请求get
    service.get(url, {
      params
    }).then(res => {
      resolve(res)
    })
      .catch(err => {
        reject(err)
      })
  })
}

let getMusicUrl = function (url, params) {
  return new Promise((resolve, reject) => {
    //通过axios 发送请求get
    service.get(url, {
      params
    }).then(res => {
      resolve(res)
    })
      .catch(err => {
        reject(err)
      })
  })
}

let getMusiclyric = function (url, params) {
  return new Promise((resolve, reject) => {
    //通过axios 发送请求get
    service.get(url, {
      params
    }).then(res => {
      resolve(res)
    })
      .catch(err => {
        reject(err)
      })
  })
}

export {
  getrecommendMusic,
  gethotMusicList,
  getpeakMusicList,
  getMusicDetail,
  getMusicUrl,
  getMusiclyric,

}