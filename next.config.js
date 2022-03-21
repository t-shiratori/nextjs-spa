module.exports = {
	async rewrites() {
		// 全てのURLでNext.jsのルーターで読み込むファイルを常にルートページにするための設定
		// リダイレクトではなく、リクエストパスを異なるパスに書き換えて実行するURLのプロキシとして機能する
		return [
			{
				source: '/:any*',
				destination: '/',
			},
		]
	},
}
