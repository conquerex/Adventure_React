var webpack = require('webpack'); //webpack을 불러온다.

module.exports = { //이 객체를 모듈로 내보내겠다. 즉, 다른 코드에서 이 객체를 require해서 불러올 수 있다는 뜻과 같다. 나중에 webpack을 실행할 때 webpack에서 이 모듈을 불러와서 설정으로 사용한다.
    entry: './src/index.js', //현재는 entry가 하나이지만 배열로 여러 파일 전달 가능. 이 파일부터 읽기 시작하는 것. 즉, 시작되는 파일 명시

    output: {//합친 파일들을 public폴더에 bundle.js로 저장한다는 의미.
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {//개발 서버 설정
        hot: true,//파일이 수정될 때마다 reload할지를 정하는 옵션
        inline: true,//hot reload에서 필요한 webpack-dev-server의 client를 bundle에 같이 넣어주는 것.
        host: '0.0.0.0',//서버를 listen할 주소. 기본 값은 localhost. localhost는 외부에서 접속이 안 된다. 0.0.0.0으로 바꾸면 접속 가능.
        port: 4000,//개발 서버의 포트
        contentBase: __dirname + '/public/',//index파일의 위치
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',//loader를 통해 es6, jsx형식을 일반 자바스크립트 문법으로 변환을 해준다. css loader를 사용하면 css를 require해서 사용할 수 있고, less,scss loader를 사용하면 less, scss 문법을 css로 변환해준다. html-minifile loader를 사용하면 html 압축도 가능
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin() //자동으로 reload하는 hot reload를 이용하기 위한 플러그 인. grunt, gulp 배치 가능.
    ]
}