module.exports = {
    entry: "./app/App.jsx",
    output: {
        filename: "./bundle.js"
    },
    modules: {

        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules /,
            loader: 'babel-loader',
            query: {
                presets: ['react']
            }
        }]
    }
}