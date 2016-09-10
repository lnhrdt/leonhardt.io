import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import autoprefixer from 'autoprefixer';

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                loaders: ['react-hot', 'babel-loader'],
                test: /\.js$/,
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css', 'postcss'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.sass$|\.scss$/,
                loaders: ['style', 'css', 'postcss', 'sass'],
                include: path.join(__dirname, 'src')
            },
        ]
    },
    postcss: () => {
        return [autoprefixer];
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src', 'index.html')
        })
    ]
};
