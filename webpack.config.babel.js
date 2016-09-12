import path from 'path'
import autoprefixer from 'autoprefixer'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.handlebars$/,
                loader: 'handlebars-loader',
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
            template: path.join(__dirname, 'src', 'html', 'index.handlebars')
        }),
        new FaviconsWebpackPlugin(path.join(__dirname, 'src', 'images', 'lion-icon.svg'))
    ]
};
