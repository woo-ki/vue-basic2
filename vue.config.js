module.exports = {
    publicPath: '/vue_study/',
    devServer: {
        port: process.env.VUE_APP_PORT || 8080
    },
    pwa: {
        name: '뷰공부',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        workboxOptions: {
            exclude: [/\.map$/, /manifest\.json$/, 'index.html']
        }
    }
}
