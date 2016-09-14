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
                loaders: ['style', 'css', 'postcss', 'resolve-url', 'sass?sourceMap'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                query: {
                    name: 'fonts/[name]-[hash].[ext]'
                }
            }
        ]
    },
    postcss: () => {
        return [autoprefixer];
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'html', 'index.handlebars')
        }),
        new FaviconsWebpackPlugin({
            logo: path.join(__dirname, 'src', 'images', 'lion-icon.svg'),
            prefix: 'favicons-[hash]/'
        })
    ]
};
