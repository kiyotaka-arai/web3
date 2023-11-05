// https://v4.webpack.js.org/
// webpack公式
// webpack公式
// webpack公式
// webpack公式
// webpack公式
// webpack公式
// webpack公式
// webpack公式
// webpack公式
// webpack公式
// ここにextあった
// https://www.npmjs.com/
// npm公式
// npm公式
// npm公式
// npm公式
// npm公式
// npm公式
// npm公式
// npm公式
// npm公式

// 最終的にはnode.jsで完結する仕組みにするか〜（セルフ）
// 最終的にはnode.jsで完結する仕組みにするか〜（セルフ）
// 最終的にはnode.jsで完結する仕組みにするか〜（セルフ）
// https://github.com/dc7290/ejs-wepack-template
// テンプレートエンジンにejsを採用したwebpackのスターターキットです。
// ?webpいいね
// https://qiita.com/kn1cht/items/d3fcd3376ab3461bf05a
// webpackで静的サイトジェネレータ(EJS編)
// 静的サイトジェネレータってのがよくわからん
// ページの数だけHtmlWebpackPluginを増やさなくていいようにする
// https://zenn.dev/syamozipc/articles/webpack_note
// 【メモ】webpack設定ファイルの書き方
// これ結構参考にしたな
// https://kajindowsxp.com/webpack-ejs-to-html/
// 神降臨してる
// コマンド分けた方がいいのかな〜
// https://yumegori.com/webpack5-setting-method
// レベル高ぇ…＞＜
// scssのとこなにしてんのこれ
// このスプレッド演算子なんなん？？？？
// https://chocolateorange.github.io/2017/02/04/02/
// webpackでJavaScriptを生成せずにHTMLやCSSを生成する方法について。Extract Text Pluginを使ったことがなかったので、試してみたかった。
// https://homeworks.cloud/post-320/
// scssもエントリーポイントに含めてんのこれ？？？？？？
// scssもエントリーポイントになりえるの？？？？？？
// webpackを利用してみる（入門編）
// https://www.mitsue.co.jp/knowledge/blog/frontend/201912/05_0000.html#:~:text=%E3%82%A8%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%E3%81%A8%E3%81%AF%E3%80%81%E4%BE%9D%E5%AD%98,%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%83%BB%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%82%92%E8%AA%AD%E3%81%BF%E8%BE%BC%E3%81%BF%E3%81%BE%E3%81%99%E3%80%82
// 残念ながらJavaScriptモジュール（import・export）はレガシーなブラウザでは使用できません。
// webpackを使用してそういったブラウザでも解釈できる形に変換する必要があります。
// これを解決するのが後述するローダーです。
// https://zenn.dev/rik9228/articles/256d26cbfcaf1e
// node.jsで画像の圧縮とwebp生成を自動化する

// pathモジュールとは
// サーバーサイドでも使われるNode.jsというJavaScriptの実行環境があります。このNode.jsに標準で入っているモジュールの1つがpathモジュールです。
// pathモジュールは、ファイルパスからディレクトリ名を取得したり、ファイル名だけを取得したりするような文字列としての パスの操作ができます。
// Node.jsに標準で入っているので下記のようにrequireで読み込めます。
// require('path')
// 読み込んだ後は、pathを代入した変数からpathのメソッドを呼び出すことでパスの文字列を操作するいろいろな処理を実行できます。
// pathのメソッドは下記の公式サイトでご確認ください。

// そもそもpathってnpm installとかでインストールしていないんですけどって感じなんだけどなぜか使える。。
// ⇒これはNodeのモジュールぽくてデフォルトで入っているみたい。

// require
// Node.jsにおけるrequireは、npmで読み込んだモジュールに対してJavaScript側で利用できるようにするためのメソッドです。

const path = require('path');
// ⇒これはNodeのモジュールぽくてデフォルトで入っているみたい。
// 要はrequire(‘path’)を書くと、ファイルやディレクトリのパスに介入（操作）できるようになるらしい。例えば、path.resolveという関数だと、絶対パスに変換してくれるみたい。
// pathライブラリもインストールのときに取り込んでてくれるんだね
// 何言ってるのかわからん
// path ライブラリの基本
// こちらはおまけ。
// 「そもそも path ライブラリってなにをしてくれるもんなの？」という疑問があったので、他のメソッドも調べてみた。ざっと見るだけで「あ〜 path ライブラリってこんな感じのことをしてくれるやつなのね〜」と知ることができるかも。
// path.dirname()
// path.dirname()は名前から想像できるとおり、ディレクトリパスを取得する。
// ターミナルでREPLを起動して挙動を確かめてみる。
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 出力先のファイルを消す
const TerserPlugin = require('terser-webpack-plugin');
// これ使うと
// * jQuery JavaScript Library v3.5.1
// ↑こんな感じの内容のtxtファイルが出力されないようになる
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// const CopyPlugin = require('copy-webpack-plugin');
// const ImageminPlugin = require('imagemin-webpack-plugin').default;
// const imagemin = require("imagemin-keep-folder");
// const ImageminMozjpeg = require('imagemin-mozjpeg');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const imagemin = require('imagemin-keep-folder');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
// const imageminSvgo = require('imagemin-svgo');

// module.exports = {
//   mode: 'development',
//   //  bundle.jsの「* ATTENTION以降〜」の長大な記述はこれによって生じてるらしい
//   entry: './src/js/app.js',
//   output: {
//     path: path.resolve(__dirname, 'public'),
//     filename: 'js/bundle.js',
//   },
// };

// Loaders
// webpack自身はJavaScriptしか理解できませんが、Loaderを使うことによってJavaScript以外のものも処理できるようになります。どのような種類のファイルであってもwebpackが処理できるモジュールにLoaderが変換してくれることで、webpackがbundleファイルを作れるようになります。(モジュール化がwebpackの根本的な仕組みです)
// Loaderには以下のような2つの目的があります。

// testプロパティに拡張子を指定して、あるLoaderがどのような種類のファイルを処理するべきなのか特定する(正規表現で拡張子を指定)
// useプロパティにLoaderを指定して、testプロパティに指定したファイルがアプリケーションの依存関係や最終的なbundleファイルに加えられるように変換する

// この場合の指定だと、webpackに対してこう言っているのと同じです。

// "Hey webpack compiler, when you come across a path that resolves to a '.txt' file inside of a require()/import statement, use the raw-loader to transform it before you add it to the bundle."

// webpackさん、require()文の中で'.txt'で終わるようなパスに出会ったら、bundleファイルに追加する前にraw-loaderで変換してください。

// Plugins
// Loaderがある種のモジュールを変換するのに対して、Pluginはwebpackができることの幅を広げてくれます。Pluginがあるとbundleファイルの最適化や環境変数の設定などいろいろなことができるようになります。Pluginを使うには、require()をして、plugins配列に追加する必要があります。configファイルの中で同じPluginを別の用途に使うことができるので、new演算子でその都度インスタンスを生成する必要があります。

// マークアップエンジニアが考える最低限のwebpack構成
// 常時mode:productionとしてbuildされます。
// 近年はgrunt/gulp < webpackの風潮が強く、例にもれず自分もしょっちゅうwebpackで環境構築をしております。
// https://homeworks.cloud/post-320/

// webpackでモジュール解決しながらディレクトリ構成を保ったまま書き出す
// 僕みたいなまだまだレガシーエンジニアには１つのファイルにまとめてSPAライクにすることなんて出来ないわけです。
// ぶっちゃけ共通のApp.jsと各ページ1ファイル読み込むパターンで十分なんです。
// 初期ロードで数10MBのjsを読み込むのって我慢できないんです。
// https://qiita.com/fukamiiiiinmin/items/85b3b5cb6e65d9b4ebdd

// 実装のゴール
// resources配下のjs,scssファイルを、ファイル構成を保ったままpublic配下のjs,cssファイルに出力したい。
// https://zenn.dev/syamozipc/articles/webpack_note
// 複数entryを実装するのに便利なパッケージ
const glob = require('glob');
// globの読み込み
// globとは？
// グロブ（英: glob）とは主にUnix系環境において、ワイルドカードでファイル名のセットを指定するパターンのことである。
// glob 【名】 〔液体の〕滴、小滴◇可算 〔塗料などの半固体状のねばねばした〕塊
// npmのパッケージの一つで、指定したパターンにマッチしたファイル名を抽出する機能。
// https://qiita.com/shizen-shin/items/0224f0617fd5a208a049
// ありがとうな…

const srcDir = './src/js';
const entries = {};

// globを使用して任意のjsファイルを取得し、複数entry用のobjectを生成
// これが↓対象のjsなんでしょ？？？？？？
glob.sync('**/*.js', {
    // compileから除外するパターンを指定（importされる前提の共通ファイルなど）
    // 複数パターンを指定する場合は配列で記述

    // 3. globの使用
    // ・glob("パターン"[, options], function(er, files){ 処理 })
    // optionは任意
    // パターンは相対パスで記述
    // パターンの記述がない場合は"**/*.js"とみなす。
    // 指定したパターンにマッチしたファイル名を抽出し、処理を実行した結果を返す。

    // glob.sync
    // globのsync関数を使うと、パターンにマッチしたファイル名を戻り値として返す。
    // glob.sync(pattern, [options])
    // 例.js
    // glob.sync('resources/*.scss')
    // 例えば、上記であれば、resoucrces配下のscssファイルを配列として次の処理に渡す。

    ignore: '**/_*/*.js',

    // ルートとなるディレクトリを指定
    // 下記jsFileNameに入るのはこのディレクトリ以降のパスになる
    cwd: srcDir,
    // Current Working Directory
    // オプションにcwdを設定すると、そのディレクトリをルートとして検索が行われます。
    // もしも以下のようなファイル群があったとして
    // ./src/script1.js
    // ./src/script2.js
    // ./src/sub/script3.js
    // ./src/sub/script4.js
    // cwdを設定した結果は
    // [ "script1.js",
    //   "script2.js",
    //   "sub/script3.js",
    //   "sub/script4.js" ]
    // という配列で出力されます。

// cwdの指定により、./resources/js/post/index.jsの場合、 jsFileNameにはpost/index.jsとが入る
}).forEach(jsFileName => {
    // outputの[name]に対応するため、entriesのkeyからは.js拡張子を除く
    const fileNameExceptExt = jsFileName.replace(/\.js$/, '');
    // この時点でcommon、vendorになってるんでしょ？？？？

    // path.resolveにより、絶対パスが入る
    // { 'post/index': 'sample_app/resources/js/post/index.js', ... } のようになる
    entries[fileNameExceptExt] = path.resolve(srcDir, jsFileName);
    // path.resolve()
    // 結局’path.resolve’をいれると何がいいの？
    // 安心なの。
    // Windowsとかだとパス区切りが/じゃないこともあるみたい。バックスラッシュっていうやつ（\）。だから__dirname + ‘/src’だとパスがおかしくなってしまうことがあるからpath.resolveを使って安心安全で行こうぜ！ってことらしい。
    // ちなみにプロジェクトによってはpath.resolveじゃうまいこといかないこともあるかもしれないからその場合はpath.joinなども使ってみてもいいかもしれない。
    // 解決する
    // 絶対パスを返す。
    // 何言ってるのかわからん
    // 引数の後ろから順に評価、結合していく。
    // 途中で絶対パスが完成したら結合途中でも処理を抜ける。
    // 引数の右から順位処理をしていき、”/”に当たった時点で絶対パスが作成されるため、そこで処理が終了する。つまり引数の文字列の先頭に”/”がある場合、そこまでで処理が終わる。
    // 最後まで絶対パスができなかった場合は実行時のcurrent_pathを付けて返す。
    // えっ結局絶対パスを返さないってことなん？？？？
    // path.resolve(__dirname, 'a', 'b', 'c');
    // => current_path/a/b/c
    // この時点でcommon:'./src/js/common.js'って感じかな〜
});

// 画像をsrcのディレクトリ構成を保ったままdistに出力するための記述
// const imgSrcDir = './src/images';
// const patterns = [];
// let patternsObj = {};
// let directoryName = '';

// glob.sync('images/common', {
  // globのsync関数を使うと、パターンにマッチしたファイル名を戻り値として返す。
  // フォルダ名は返ってこないのか😭😭😭
//     cwd: imgSrcDir,
// }).forEach(imageFileName => {
//   console.log(imageFileName);
    // const fileNameExceptExt = jsFileName.replace(/\.js$/, '');
    // entries[fileNameExceptExt] = path.resolve(srcDir2, jsFileName);
    // if(imageFileName.match('/')){
      // console.log('びゃ〜');
      // directoryName = imageFileName.substr(0, imageFileName.indexOf('/'));
      // console.log(cut1);
      // top抽出まではいけたなぁ
      // てかimages以下の全部distに出力してるのが痛い
      // patternsObj.from = `${path.resolve(__dirname, 'src')}/images/${directoryName}`;
      // patternsObj.to = `${path.resolve(__dirname, 'dist')}/images/${directoryName}/[name][ext]`;
      // patterns.push(patternsObj);
      // console.log(patterns);
      // patternsObj = {};
      // 行けたなぁ…
      // めっちゃ基本的な何かがわかってなくてやばすぎ
    // }
// });
// {
//   from: `${path.resolve(__dirname, 'src')}/images`,
//   // to: `${path.resolve(__dirname, 'dist')}/images/[name]_min[ext]`
//   to: `${path.resolve(__dirname, 'dist')}/images/[name][ext]`
// }
// いやこれ処理重すぎでしょjpg一つずつとか
// imagesの中にフォルダがあったらそれを取得、みたいな感じででやんないとあかんわ
// 一旦解散で🙂

// 画像をsrcのディレクトリ構成を保ったままdistに出力するための記述２
// const patterns = [];
// const createCopyPluginPatterns = () => {
//   let patternsObj = {};
//   const imagesDirectoryList = ['common','top'];
//   // https://toyono-exp.co.jp/
//   // エムハンドが「img/common」だし別に「img/common」で行けばいっか…
//   imagesDirectoryList.forEach(directoryName => {
//       patternsObj.from = `${path.resolve(__dirname, 'src')}/images/${directoryName}`;
//       patternsObj.to = `${path.resolve(__dirname, 'dist')}/images/${directoryName}/[name][ext]`;
//       // ReferenceError: from is not defined
//       // えっ[]って既存じゃないとだめなんだ！！！？？？？
//       patterns.push(patternsObj);
//       // console.log(patterns);
//       patternsObj = {};
//   });
//   // 一旦これで手打ちか…
//   // てかimageMin?キャッシュできるようにしないん？？？？？
// }
// createCopyPluginPatterns();
// https://zenn.dev/rik9228/articles/256d26cbfcaf1e
// imagemin-keep-folderを利用することで、エントリーポイント配下（./src）のディレクトリ構造を維持した状態で、吐き出し先に最適化した画像群を送ることができます。
// キョエエエエエエエエエエエエエエエエエエエエエエエエエエエエエエ！！！！！！！

/* EJS読み込みの定義 */
// const ejsentries = WebpackWatchedGlobEntries.getEntries([path.resolve(__dirname, `${filePath.ejs}**/*.ejs`)], {
//   ignore: path.resolve(__dirname, `${filePath.ejs}**/_*.ejs`),
// })();
// const htmlGlobPlugins = (entries) => {
//   return Object.keys(entries).map(
//     (key) =>
//       new HtmlWebpackPlugin({
//         //出力ファイル名
//         filename: `${key}.html`,
//         //ejsファイルの読み込み
//         template: htmlWebpackPluginTemplateCustomizer({
//           htmlLoaderOption: {
//             //ファイル自動読み込みと圧縮を無効化
//             sources: false,
//             minimize: false,
//           },
//           templatePath: `${filePath.ejs}${key}.ejs`,
//         }),

//         //JS・CSS自動出力と圧縮を無効化
//         inject: false,
//         minify: false,
//       })
//   );
// };

module.exports = {
    // module.exportsとは
    // JavaScript(Node.js)において、
    // あるファイルに存在する変数や関数を、別のファイルで実行する機能です。
    // わかったこれapp.jsにすべてを集めてapp.jsですべて実行してるんやろ？？？
    // app.jsでとくに集約してなかったぽよ😭
    // module.exports の使い方
    // この exports プロパティは、あるモジュールを他のモジュールから参照させたいときに活躍します。
    // これは module オブジェクトの exports プロパティにセットされている空のオブジェクトに、 func1 というプロパティを作成して、それにファンクションオブジェクトを１つ設定し、 さらに、person というプロパティにオブジェクトをセットしています。
    mode: 'production',
    // mode: 'development',
    // developmentにしたら見覚えのある記述になったなぁ…
    // entry: './src/js/vendor.js',
    // entry: {
    //   common: './src/js/common.js',
    //   vendor: './src/js/vendor.js'
    // },
    // エントリーポイントはバンドルの構築を開始する場所を指します。
    // Webpackは指定されたファイルを基準に依存関係を解決していきます。
    // デフォルトではその値は./src/index.jsです。
    // https://next-blog.site/media/webpack/
    // webpackで複数エントリーポイントを指定する
    // 「vendor」とかは任意なの？？？
    entry: entries,
    // そうかこれで自動でsrcにあるファイルをentryに指定できたってことやな
    // まあ一旦ミツエー（ぺんてる）みたいになったしいいか jsは
    // top/?.jsとしても、ディレクトリ構造は複製されるようにはなってるぽよ
    // cssの方がわからん
    // 確認したけどそもそもできるのかっていう疑問が湧いてきてる
    // とはいえミツエーと同じになったしまあいいか
    // てか画像忘れてたわ
    watch: true,
    // srcディレクトリの監視
    // これがdistを監視しない仕組み？はよくわかってない
    // watchとdevサーバーの違いがわからないんだけど
    target: ['web', 'es5'],
    // ES5 へトランスパイル
    // まあES5まで落とせばいいでしょ全然
    watchOptions: {
      ignored: /node_modules/,
      //   なお、ファイルを更新する度にビルドされると、ファイルサイズが大きくなると時間がかかってしまうのではと心配になりますが、watchモードではキャッシュが有効になり、差分がビルドされますので、ビルドにかかる時間は短くなります。ただし、ファイルを多く監視していると、どうしてもCPUやメモリの使用量が大きくなる恐れがあります。その場合、watchOptionsプロパティのignoredプロパティを設定することで、指定するディレクトリやファイルを監視対象から外すことができます。ignoredプロパティは、文字列または正規表現で指定できます。
      // aggregateTimeout: 200,
      // poll: 100 //毎秒変更を確認します
      // この二つなくても早いなぁ
      // システムによっては、多くのファイルを監視することで、CPUやメモリの使用量が多くなる場合があります。 node_modulesのような巨大なフォルダーを正規表現で除外することは可能です:
    },
     cache: true,
     // cacheってなんやねんって思ったけど差分以外の変更は追わない？ってって感じでしょ
     //　これってキャッシュ有効になってないの？？
    // output: {
      // path: path.resolve(__dirname, 'dist'),
      // ビルド後の出力先とファイル名を指定する項目で、初期値は”./dist/main.js”です。
      // path.resolve() はnodeコマンドで実行されてるスクリプトから見たパスを返す
      // 要はrequire(‘path’)を書くと、ファイルやディレクトリのパスに介入（操作）できるようになるらしい。例えば、path.resolveという関数だと、絶対パスに変換してくれるみたい。
      // __dirname は、現在実行中のファイルを含むディレクトリの絶対パスを示す環境変数です。
      // 何言ってんのこいつ
      // path.resolve() が返すパスは、常に node コマンドで直接実行したスクリプトから見たパスらしい。ファイルから見たパスではない。
      // 何言ってんのこいつ
      // もし mod.js から見た ../ の絶対パスを知りたい場合は、↓のように __dirname と組み合わせて書く必要がある。
      // 「絶対パスを指定している」という点では、両方とも同じだ。
      // ではなぜ、path.resolveを使っているのか？
      // 結論からいうと、OSの違いによって思わぬ挙動が起こらないように、安全のためこういった書き方をしているようだ。
      // webpack の設定において、output の path には絶対パスを指定しないとエラーが出てしまう。
      //   output: {
      //     // 絶対パスを指定する
      //     path: path.resolve(__dirname, 'public/js')
      //   }
      // Macであれば、${__dirname}/distといった書き方でも問題はない。
      //   output: {
      //     path: `${__dirname}/dist`,
      //     filename: 'main.js'
      //   },
      // しかし、OSによってはパスの書き方が/じゃないことがあり、${__dirname}/distだと変になってしまって動かない可能性が出てくる。
      // だから、絶対パスを確実に設定するため、path.resolve()を使っているというわけ。
      // 何ってるのかわからん
    //   filename: 'js/bundle.js',
    // },
    output: {
      // 最上位のoutputキーには、バンドル、アセット、および Webpack でバンドルまたはロードするその他のものを出力する方法と場所について Webpack に指示する一連のオプションが含まれています。
      filename: 'js/[name].min.js',
      // なるほど[name]にキーが入ると
      // これルートからの指定っぽい
      // 単一entryポイントの場合、これは静的な名前にすることができます。
      // ただし、複数のエントリ ポイント、コード分割、またはさまざまなプラグインを介して複数のバンドルを作成する場合は、次のいずれかの置換を使用して各バンドルに一意の名前を付ける必要があります。
      path: path.join(__dirname, 'dist'),
      // パス結合を行いたいときはpath.joinが便利です。
      // / の存在をよしなに解釈して結合してくれます。
      // const path = require('path');
      // console.log(path.join('/a/b', 'c', 'd', 'e.txt')); // => /a/b/c/d/e.txt
      // ◆ join とりあえずくっつける
      // ◆ 途中の絶対パスは無意味
      // ◆ resolve 通常は常に絶対パスを返す
      // ◆ 後ろから順に見て絶対パスがあればそれより前の引数は無視される
      // ◆ 絶対パスがないならカレントディレクトリからの相対パスとして処理される
    },
    // devServer: {
      // コマンド実行と同時に、ブラウザが立ち上がり、ドキュメントルートに設定したページが表示されているはずです。
      // また、webpack-dev-serverは、バンドル対象ファイルの動的な更新に追従してwebpackによるバンドルがリアルタイムに実行してくれます。
      // open: true,
      // ブラウザが同時に開く
      // port: 9000,
      // コンテンツのルートディレクトリ
      // contentBase: path.resolve(__dirname, 'dist'),
      // 修正内容
      // 公式のマイグレーションドキュメントmigration-v4を参考に修正していきます。
      // 上記ドキュメントによるとv3のcontentBaseオプションは
      // v4ではstatic{}配下のdirectoryオプションに変更されたので
      // 以下のように書くことでコンテンツベースを指定することができます。
      // 知るかボケ
      // static: {
      //   directory: path.resolve(__dirname, "dist"),
      // },
      // devServer: {
      //   contentBase: outputPath
      // }
      // こういうのもあるっぽい
    // },
    // !!!本番時はコメントアウト!!!
    // devtool: "source-map",
    // mapファイルを出力
    module: {
        rules: [
          // ローダー
          // ローダ は、プログラムやデータなどを、外部からインタフェースなどを通して受け取り、プログラム間の参照関係を解決し位置依存に対するリロケーションを行った上で、主記憶装置やワークエリアに置き、実行開始させるプログラムである
          // 日本語喋れ
          {
            //拡張子 .scssを対象
            test: /\.scss$/,
            // 使用するローダーの指定（後ろから順番に適用される）
            // 適用というか処理されるみたいな（ナイスコメント）
            // use: ['style-loader', 'css-loader', 'sass-loader' ],
            // style-loader：headerのstyleタグにコンパイル後？の記述を組み込む→これだと問題が発生する
            // style-loader とは
            // style-loader は,
            // Inject CSS into the DOM.
            // とあり、JS の中にある CSS 文字列を DOM に挿入する役割を担います。 そのため、CSS をページに反映させるために必要になってくる loader です。
            // jsのファイルサイズが大きくなる、cssがキャッシュされない
            // そこで使うのが「mini-css-extract-plugin」
            // npm uninstall style-loaderでアンインストール
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'postcss-loader',
              // 'sass-loader'
              {
                // sassをコンパイルしてcssに変換する
                loader: 'sass-loader',
                options: {
                    // Dart Sassを使えるようにする
                    implementation: require('sass'),
                },
              },
              // https://blog.isystk.com/system_develop/frontend/webpack/1885/
            ]
            // 記述が圧縮されるのはproductionモードだとsass-loaderのオプションが自動で有効？になるかららしい
            // postcss-loaderでベンダープレフィックスをつける
            // PostCSSとは何か
            // PostCSSとは、ロシア人の Andrey Sitnik という人が開発している、Node.js製の「CSSツールを作るためのフレームワーク」です。PostCSS製のツールとして、ベンダープリフィックスを自動で付与する「Autoprefixer」、未来のCSSの構文の一部を今のブラウザで解釈できるようにする「cssnext」、カスタマイズ性に富んでいるCSSリンターである「stylelint」などが有名です。
            // css-loaderは,
            // The css-loader interprets @import and url() like import/require() and will resolve them.
            // とあり、JS の世界にある CSS のファイルを解決できる loader です。 JS ファイル内で読み込まれる CSS を文字列として JS の世界に持ち込めます。
          },
          {
            test: /\.js$/,
            use: {
             loader: 'babel-loader',
             options: {
              presets: [ '@babel/preset-env' ]
             }
            }
          },
          {
            test: /\.ejs$/,
            use: [
              /**
               * HtmlLoader -> TemplateEjsLoader
               */
              {
                loader: 'html-loader',
                // https://qiita.com/Sharkkii/items/9598c75707d2ffa600e1
                // html-loader は template-ejs-loader 等の出力結果をWebpackのビルドプロセスで取り扱えるようにするものです（この記事では詳細を割愛します）
                options: {
                  minimize: false
                },
              },
              // 'html-loader',
              'ejs-plain-loader'
              // https://zenn.dev/manappe/articles/b4e95135763213
              // {
              //   loader: 'ejs-plain-loader'
              // }
              // "template-ejs-loader",
            ],
          },
          // {
          //   test: /\.(jpe?g|gif|png|svg)$/,
          //   use: [
          //     {
          //       loader: 'file-loader',
          //       options: {
          //         name: '[name].[contenthash].[ext]',
          //         name: 'aaa.jpg',
          //         outputPath: 'images',
          //         publicPath: '/images',
          //       },
          //     },
          //     'image-webpack-loader',
          //   ],
          // },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
          // https://zenn.dev/syamozipc/articles/webpack_note
          // [name]にはentryで指定したkeyが入る
          // post/index.jsで読み込んでいるscssはpublic/css/post/index.cssに出力される
          // CSSを別ファイルとして出力するには、mini-css-extract-pluginを使用します。
          // https://corecolors.net/webpack-css/
          // 抽出する CSS のファイル名
          // filename: 'css/bundle.css',
          filename: 'css/[name].min.css',
          // publicのcssにこのcssが出力される
          // [name]にはエントリーポイント名が入る appがアップが入る（entry）
          // [contenthash]でキャッシュ対策追加
          // ただhtmlとの連携はhtmlなんちゃらインストールしないとだめっぽい
        }),
        // new CleanWebpackPlugin({
        //   cleanOnceBeforeBuildPatterns: ['**/*', '!**.html'],
        //   // htmlファイル以外をを全て削除
        // })
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "src", "src.ejs"),
          filename: "target.html",
          minify: false, // 追加
          // minify: {
          //   minify: false
          //   // collapseWhitespace: true,
          //   // preserveLineBreaks: true,
          // },
        }),
        // なんかめっちゃjsとcssが出力されてるけど…😭
        // https://webpack.js.org/plugins/html-webpack-plugin/
        // 複数の Webpack エントリ ポイントがある場合、<script>生成される HTML にはそれらがすべてタグとともに含まれます。
        // https://corecolors.net/webpack-html-webpack-plugin/
        // webpack-config.jsに従い、HTMLが生成されるます。
        // （HTMLに、画像やCSS・JSが自動的に読み込まれて出力される）
        // じゃあこれじゃだめなんじゃね？？？？？？？？
        // じゃあこれじゃだめなんじゃね？？？？？？？？
        // じゃあこれじゃだめなんじゃね？？？？？？？？
        // じゃあこれじゃだめなんじゃね？？？？？？？？
        // じゃあこれじゃだめなんじゃね？？？？？？？？
        // HTMLファイルを、dist/配下に生成するプラグインです。
        // 圧縮されちゃうのが解けないなぁ…
        // 圧縮されちゃうのが解けないなぁ…
        // 圧縮されちゃうのが解けないなぁ…
        // new ImageminPlugin({
        //   // 画像ファイルを縮小してくます。
        //   // 画像ファイルを追加する前にTinyPNGなどを使って画像縮小する手間が省けます。
        //   // https://zenn.dev/yuri/books/4391b9280f823061932c/viewer/e998d5654d541e002f42
        //   disable: process.env.NODE_ENV !== 'production',
        //   // Disable during development
        //   // 開発時のみ最適化しないっていうのあったんやな
        //   // これってdistに出力する機能内蔵してないの？？？？
        //   // https://www.npmjs.com/package/imagemin-webpack-plugin
        //   // これは、Imageminを使用してプロジェクト内のすべての画像を圧縮するシンプルなプラグインです。
        //   // これってCopyPluginの前に位置しているけど大丈夫なん？？？？？？
        //   // https://homeworks.cloud/post-320/
        //   // だめっぽいな
        //   test: /\.(jpe?g|png|gif|svg)$/i,
        //   pngquant: {
        //     quality: '65-80'
        //   },
        //   // これってImageminPngquantなしでも動いてんの？？？
        //   // https://homeworks.cloud/post-320/
        //   gifsicle: {
        //     interlaced: false,
        //     optimizationLevel: 1,
        //     colors: 256
        //   },
        //   svgo: {
        //   },
        //   plugins: [
        //     ImageminMozjpeg({
        //       quality: 80,
        //       progressive: true
        //     })
        //   ]
        // }),
        // new CopyPlugin({
          // 既存の個々のファイルまたはディレクトリ全体をビルド ディレクトリにコピーします。
          // patterns: [
          //   {
          //     from: `${path.resolve(__dirname, 'src')}/images/common`,
          //     // to: `${path.resolve(__dirname, 'dist')}/images/[name]_min[ext]`
          //     to: `${path.resolve(__dirname, 'dist')}/images/common/[name][ext]`
          //   }
            // {
            //   from: `${path.resolve(__dirname, 'src')}/images/top`,
            //   // to: `${path.resolve(__dirname, 'dist')}/images/[name]_min[ext]`
            //   to: `${path.resolve(__dirname, 'dist')}/images/top/[name][ext]`
            // }
          //   // 文字列に変数挿入してるからねぇ
          //   // ${} テンプレートリテラルとは
          //   // えれテンプレートリテラルってこんな感じだったんだっけ！！？？
          //   // えれテンプレートリテラルってこんな感じだったんだっけ！！？？
          //   // えれテンプレートリテラルってこんな感じだったんだっけ！！？？
          //   // from、toを文字列で指定？するんやね
          //   // {
          //   //   from: `${path.resolve(__dirname, 'src')}/images/**`,
          //   //   // to: `${path.resolve(__dirname, 'dist')}/images/[name]_min[ext]`
          //   //   to: `${path.resolve(__dirname, 'dist')}/images/[name][ext]`
          //   // }
          //   // https://webpack.js.org/configuration/output/
          //   // テンプレート文字列
          //   // テンプレート文字列？？？？
          //   // []これがテンプレート文字列ってこと？？？？？？？？
          //   // []これがテンプレート文字列ってこと？？？？？？？？
          //   // 次の置換は、テンプレート文字列で使用できます
          //   // ファイルレベルで利用可能な置換:
          //   // [name]
          //   // 拡張子やパスのないファイル名のみ
          //   // [ext]
          //   // タイプ:String デフォルト:file.extname
          //   // ターゲットファイル/リソースのファイル拡張子。
          //   // これなんかループすればいけそうだけど
          //   // entry: entries,これも結局ループだからなぁ
          //   // これentry: entries,の方と同じ感じで対処すればいけるでしょ
          //   // ただいったんベタ書きでやってくれい
          //   // patternsで配列にオブジェクト入れる感じで
          //   // とりあえずミツエー方式にできる見通しはたった
          // ]
        //   patterns: patterns,
        // }),
        new BrowserSyncPlugin({
          host: 'localhost',
          // port: 2000,
          // port指定しなくても動くなぁ…
          // なんか「http://localhost:3000/」とか「http://localhost:3002/」になるなぁ…
          server: { baseDir: 'dist' },
          // distを監視
          watch: true
          // ↑動作しないので
          // package.json側で指定
          // 何言ってんのこいつ
          // これないと監視されなかったぽよ
        })
    ],
    optimization: {
        minimizer: [
          new TerserPlugin({
            // なんでこれだけ「optimization」にいるん？？
            // プラグインの方に入ってもよくね？？？？
            // Terse
            // 短く切る
            extractComments: false,
            // extract
            // 抽出する
            // terserOptions: {
            //   compress: {
            //     drop_console: true,
            //     // console.log削除してくれる
            //     // いや削除されるとまずいから消すぽよ
            //   },
            // },
          }),
        ],
    }
};
console.log('にゃ〜');
// これ真っ先に実行？されるんやな〜

imagemin(['src/images/**/*.{jpg,png,gif,svg}'], {
  plugins: [
    imageminMozjpeg({ quality: 80 }),
    imageminPngquant({ quality: [.65, .8] }),
    // https://qiita.com/hibikikudo/items/2c82119ac5acf9cb3394
    // imagemin-pngquant@7.0.0からoptionの書き方が変わってるから注意
    // 知るかボケぶち殺すぞ
    imageminGifsicle(),
    // imageminSvgo()
    // エラーになるなぁ
  ],
  replaceOutputDir: output => {
    return output.replace(/images\//, '../dist/images/');
    // やったあああああああああああああああああああ😭😭😭😭😭😭😭
    // お前の言いたいことは完全にわかった
    // これsrcのimagesを起点にしたパスなんやね
  }
}).then(() => {
  console.log('Images optimized');
});
