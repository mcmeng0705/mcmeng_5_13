import Vuex from 'vuex'
import Vue from "vue";


Vue.use(Vuex)

const store = new Vuex.Store({
  state:{   //存储数据
    count:1,
    app:'123456',
  },
  getters:{  //计算属性

  },
  mutations:{   //更改state 同步函数
    addOne:state => {
      return state.count+10
    }
  },
  actions:{   //更改state  异步操作。

  },
  modules:{   //模块化
    mypage1:{
      state:{   //存储数据
      },
      getters:{  //计算属性
      },
      mutations:{   //更改state 同步函数
      },
      actions:{   //更改state  异步操作。
      }
    },
    mypage2:{
      state:{   //存储数据
      },
      getters:{  //计算属性
      },
      mutations:{   //更改state 同步函数
      },
      actions:{   //更改state  异步操作。
      }
    }
  }

})
export default store;
