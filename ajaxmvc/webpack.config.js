module.exports = {
    entry: './src/main/main.js',
    output: {
    filename: './githubsearch.js'
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
    