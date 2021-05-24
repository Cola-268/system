module.exports = {
    // webpack中针对开发服务器设置
    // 与gulp相似都是前端项目打包工具
    devServer: {
        // 设置项目启动后是否自动打开浏览器
        open: true,
        // 设置 npm run serve 启动后的端口号（默认是8080）
        // 不要超过端口号允许设置的范围：0-65535
        // 并且需要避开常见的端口号：20，21，22，23，25，80，443，3306，3389，11211，
        port: 3000,
        // 如果你开始了eslint,不要让eslint在页面中遮罩，它错误会在console.log控制台打印
        overlay: false,
    },
    chainWebpack: config => {
        // 发布模式
        config.when(process.env.NODE_ENV === 'production', config => {
            config
                .entry('app')
                .clear()
                .add('./src/main-pro.js')

            config.set('externals', {
                vue: 'Vue',
                'vue-router': 'VueRouter',
                axios: 'axios',
                lodash: '_',
                echarts: 'echarts',
                nprogress: 'NProgress',
                'vue-quill-editor': 'VueQuillEditor'
            })
            config.plugin('html').tap(args => {
                args[0].isProd = true
                return args
            })
        })

        // 开发模式
        config.when(process.env.NODE_ENV === 'development', config => {
            config
                .entry('app')
                .clear()
                .add('./src/main-dev.js')
            config.plugin('html').tap(args => {
                args[0].isProd = false
                return args
            })
        })

    }

};