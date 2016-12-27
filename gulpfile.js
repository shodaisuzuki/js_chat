var gulp = require('gulp');
var coffee = require('gulp-coffee');
var webserver = require('gulp-webserver');

// コンソール表示
gulp.task('hello', function() {
  console.log('hello');
});

// コンパイル
gulp.task('js', function() {
  gulp.src('coffeescripts/*.coffee')
  .pipe(coffee())
  .pipe(gulp.dest('public/js'));
});

// 監視
gulp.task('watch', function() {
  gulp.watch('coffeescripts/*.coffee',['js'])
});


// リロード
gulp.task('webserver', function() {
  gulp.src('public')
    .pipe(
      webserver({
        host: '192.168.33.11',
        livereload: true
    })
  );
});


// gulpコマンド
// hello出して、コンパイルしてpublicに変更があったらリロード
gulp.task('default',['hello','js','watch','webserver']);

