const path = require('path')

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'./dist') //path of static folder of django
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude:/(node_modules)/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/preset-env", "@babel/react" ]
                    }
                }
            },
            {
                test:/\.css$/,
                use:[
                    {loader:"style-loader"},
                    {loader:"css-loader"}
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    {loader:"style-loader"},
                    {loader:"css-loader"},
                    {loader:"sass-loader"}
                ]
            },{
                test:/\.jpg$/,
                use:[
 
                    {loader:"url-loader"},
 
                ]
            }
        ]
    }
 }