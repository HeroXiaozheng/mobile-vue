module.exports = {

	//部署时的路径
	// publicPath: {},

	//多页面应用入口
	//运行打包时，只打包配置了的页面应用
	pages: {
		index: {
			entry: 'src/main.js'
		},
		download: {
			entry: 'src/mod_download/index.vue',
			filename: 'download.html'
		}
	},
	devServer: {
		proxy: {
			'/api': {
				target: 'https://10.240.19.28',
				changeOrigin: true,
				ws: true
			}
		}
	},

	//在组件中使用template
	runtimeCompiler: true,

	//生成的静态资源的文件名是否带有特定hash值，用于控制缓存
	filenameHashing: false,
	css: {
		loaderOptions: {
			stylus: {
				'resolve url': true,
				'import': [
				'./src/theme'
				]
			}
		}
	},
	pluginOptions: {
		'cube-ui': {
			postCompile: true,
			theme: true
		}
	}
}
