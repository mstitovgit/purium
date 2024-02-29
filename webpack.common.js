const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {

  //JS
  entry: {
    index: './src/index.js',
    S_AllArticles: './src/partials/S/S_AllArticles.js',
    S_ProductCards: './src/partials/S/S_ProductCards.js',
    S_Search: './src/search.jsx',
    database: './src/database.js',
    S_ArticleModules: './src/partials/S/S_ArticleModules.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
        {
            test: /\.(jpg|png|gif|woff|eot|ttf|svg)/,
            use: {
            loader: 'url-loader', // this need file-loader
            options: {
            limit: 50000
            }
            }
        },

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      
    
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),

    // Pages
     new HtmlWebpackPlugin({
       template: './src/articles.html',
       filename: './articles.html'
     }),
     new HtmlWebpackPlugin({
      template: './src/article.html',
      filename: './article.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/search.html',
      filename: './search.html'
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      },
      {
        path: path.join(__dirname, './src/partials/O/O_Header.html'),
        location: 'oheader',
        template_filename: '*',
        priority: 'replace'
      },
      {
        path: path.join(__dirname, './src/partials/O/O_Header_blue.html'),
        location: 'oheaderB',
        template_filename: '*',
        priority: 'replace'
      },
      {
        path: path.join(__dirname, './src/partials/S/S_MainScreen.html'),
        location: 'smainscreen',
        template_filename: '*',
        priority: 'replace'
      },

      {
        path: path.join(__dirname, './src/partials/S/S_Cards.html'),
        location: 'scards',
        template_filename: '*',
        priority: 'replace'
      },

      {
        path: path.join(__dirname, './src/partials/S/S_Onboarding.html'),
        location: 'sonboarding',
        template_filename: '*',
        priority: 'replace'
      },

      {
        path: path.join(__dirname, './src/partials/S/S_ArticleCards.html'),
        location: 'sarticlecards',
        template_filename: '*',
        priority: 'replace'
      },

      {
        path: path.join(__dirname, './src/partials/S/S_Feedback.html'),
        location: 'sfeedback',
        template_filename: '*',
        priority: 'replace'
      },

      {
        path: path.join(__dirname, './src/partials/S/S_Footer.html'),
        location: 'sfooter',
        template_filename: '*',
        priority: 'replace'
      },

      {
        path: path.join(__dirname, './src/partials/S/S_AllArticles.html'),
        location: 'sallarticles',
        template_filename: '*',
        priority: 'replace'
      },

      {
        path: path.join(__dirname, './src/partials/S/S_ProductCards.html'),
        location: 'sproductcards',
        template_filename: '*',
        priority: 'replace'
      },

      {
        path: path.join(__dirname, './src/partials/S/S_ProductCardsAlt.html'),
        location: 'sproductcardsalt',
        template_filename: '*',
        priority: 'replace'
      }

      ,

      {
        path: path.join(__dirname, './src/partials/S/S_ArticleModules.html'),
        location: 'sarticlemodules',
        template_filename: '*',
        priority: 'replace'
      }
      ,

      {
        path: path.join(__dirname, './src/partials/SearchComponents/S_Search/S_Search.html'),
        location: 'ssearch',
        template_filename: '*',
        priority: 'replace'
      }

    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}