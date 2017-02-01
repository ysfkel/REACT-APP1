module.exports = {
    entry: "./app/main.jsx",
    output: {
        filename: "bundle.js",
        path: 'app'
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