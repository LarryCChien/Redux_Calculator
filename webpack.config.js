const path = require('path');
const webpack = require('webpack');
const node_modules = path.resolve(__dirname, 'node_modules');
const pathToReact = path.resolve(node_modules, 'react/cjs/react.production.min.js');
const pathToReactDOM = path.resolve(node_modules, 'react-dom/cjs/react-dom.production.min.js');
const pathToRedux = path.resolve(node_modules, 'redux/dist/redux.min.js');
const pathToReactRedux = path.resolve(node_modules, 'react-redux/dist/react-redux.min.js');
const pathToPropTypes = path.resolve(node_modules, 'prop-types/prop-types.min.js');

const PRODUCTION = (process.env.NODE_ENV === 'production');
const mode = PRODUCTION ? 'production' : 'development';
const entry = PRODUCTION ? [ path.resolve(__dirname, 'app/main.js') ] :
    [
        path.resolve(__dirname, 'app/main.js'),
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:5566'
    ];
const plugins = PRODUCTION ? [] : [ new webpack.HotModuleReplacementPlugin()];

const config = {
    mode: mode,
    entry: entry,
	resolve: {
        alias: {
			'react': pathToReact,
			'react-dom': pathToReactDOM,
			'redux': pathToRedux,
			'react-redux': pathToReactRedux,
			'prop-types': pathToPropTypes
        }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['env', 'react']
            }
		}, {
			test: /\.scss$/,
			loader: 'style-loader?sourceMap!css-loader?sourceMap!sass-loader?sourceMap'
        }]
    },
    plugins: plugins,
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, ''),
        publicPath: '/build',
        stats: { colors: true }
    }
};

module.exports = config;