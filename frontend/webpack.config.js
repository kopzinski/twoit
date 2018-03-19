var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const root = `${__dirname}/src`;
const dist = `${__dirname}/dist`;

const paths = {
    app: `${root}/app/2it.module.js`,
    styles: `${root}/styles`,
    static: {
        index: `${root}/index.html`,
        images: `${root}/img/**/*`
    }
};

const scripts = {
    test: /\.js$/,
    exclude: /node_modules/,
    loaders: ['ng-annotate-loader','babel-loader']
};

const markup = {
  test: /\.html$/,
  loader: 'ngtemplate-loader!html-loader',
};

const pre = {
    clean : new CleanWebpackPlugin([ dist ]),
    copy : new CopyWebpackPlugin([{
        from: paths.static.index
    }])
}

const config = {
    // entry: './src/2it.module.js',
    entry: {
        bundle: paths.app
    },
    //  output: {      filename:  './bin/' + 'app.bundle.js'  },
    output: {
        path: `${dist}/`,
        publicPath: '/',
        filename: 'js/2it.[name].js'
    },
    module: {
        loaders: [scripts, markup]
    },
    plugins : [
      pre.clean,
      pre.copy
    ],
    devServer: {
        port: 8080,
        historyApiFallback: true
    }
}

module.exports = config;