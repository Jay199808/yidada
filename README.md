# yidada
## 智能业务支持系统项目总结
### 1.本项目是一个后台管理系统
### 2.技术选型: webpack脚手架(vue-cli),Vue框架,Es6语法编程,Vuex数据存储,Less样式,Element-ui样式库,nodejs本地服务器
        (1).Vue和React有很多的相似处如：Virtual DOM,组件化,但是选用Vue是因为Vue的数据都是data函数里存储而React是在state里改变的时候则需要setState()来改变状态,而且Vue的props的数据传递相对于便捷一些
        (2).Es6主要选用是里面的模块化处理,块级作用域(es5里没有,会导致全局变量的污染),新型的语法结构
        (3).Vuex更能很好的维护请求数据的存储
        (4).less结构清晰,便于扩展,对于模块的应用特别是单页app,经常需要用selector来划分不同的模块的css的scope
            可以方便地屏蔽浏览器私有语法差异,封装对浏览器语法差异的重复处理,减少无意义的机械劳动
            可以轻松实现多重继承
            完全兼容css代码,可以方便地应用到老项目中,less只是在css语法上做了扩展,所以老的css代码也可以与less代码一同编译
### 3.路由的搭建
        在src目录里router文件下index.js进行,引入router的配置并用Vue.use()去挂载,引入每一个页面的模块(@代表src),实例新的Router在里面配置每一个页面的路由信息,在路由上挂载一个beforeEach的路由生命周期,在里面进行等登录页权限逻辑的判断
### 4.项目主要分为: 
        新建广告: 1).建立广告计划: (1).新建计划: 出现对应的创建需求: 1).广告单元
                                                                  2).广告创意: 点击添加创意会出现弹框选择是单图或多图
                                                                    单图只出现一个上传框而多图可出现多个
                                                ,跳转到广告管理下的广告创意
                                  (2).已有计划: 出现弹框,选择需求的计划,跳转到广告管理下的广告计划
        首页概括:对登录的用户进行权限的判断: 1)超级管理: 新建用户页面
                                           2)普通用户: 正常出现首页概括页面
        广告管理: 1).广告计划
                  2).广告单元
                   3).广告创意
        数据管理
        工具箱: 1).账号管理
                2).客户管理
### 5.数据的请求是用axiso,根据axios的api,axios有请求和响应的拦截器,并在Vue的原型挂载这个方法利用Object.defineProperty()
    首先创建一个新实例
```js
    let instance = axios.create({
    headers: {
        'plantform': 'PC'
    },
    baseURL: 'http://localhost:9000'
    })
```
    请求拦截
```js
    instance.interceptors.request.use((config) => {
        console.log(config)
        return config
    }, (err) => {
        return Promise.reject(err)
    })
```
    响应拦截
```js
    instance.interceptors.response.use((response) => {
        if (response.status === 200) {
            return response.data
        } else {
            return Promise.reject({status: response.status})
        }
    }, (err) => {
        return Promise.reject(err)
    })
```
### 6.项目核心技术
        广告创意的tab的切换,因为Element-ui的tab切换上对于我的的项目上纯在着一些bug,所有决定封装一样效果的组件
        首页概括的echarts,选择echarts因为它是国内出的,语言上就占有优势,同时比较实用我们的思维,但是它的数据都是一个死的数据,             所有我们根据请求的数据去改变我们echarts上的数据
### 7.数据管理使用的Vuex 
        创建store文件,里面创建4个文件,分别是:actions.js,mutations.js,state.js,store.js
        mutations会改变state,而actions是唯一能改变mutaitons状态的,通过dipatch去向后台传递数据
### 8.遇到的困难，以及解决方式 （自定义组件）
        广告创意的tab的切换,因为Element-ui的tab切换上对于我的的项目上纯在着一些bug,所有决定封装一样效果的组件
![流程图](https://github.com/Jay199808/yidada/blob/master/%E9%A1%B9%E7%9B%AE%E6%B5%81%E7%A8%8B.png?raw=true)
