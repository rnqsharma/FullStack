module.exports = {
    entry: './src/main/main.js',
    output: {
    filename: './dist/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
     }
};
    