module.exports = {
    entry: "./app/main.jsx",
    output: {
        filename: "bundle.js",
        path: 'app'
    },

    devServer: {
        address: 'localhost',
        port: 3000
    },

    module: {

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