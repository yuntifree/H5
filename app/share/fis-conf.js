//启用插件相对路径插件
fis.hook('relative');

//让所有文件，都使用相对路径。
fis.match('**', { relative: true });

//编译过滤
var ignores = fis.get('project.ignore');
ignores = ignores.concat([
    'design/**',
    'dist/**',
    'test/**'
]);

fis.set('project.ignore', ignores);

// 加 md5
fis.match('*.{js,css}', {
    useHash: true
});


fis.match('*.js', {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
});

//fis.match('*.png', {
//    // fis-optimizer-png-compressor 插件进行压缩，已内置
//    optimizer: fis.plugin('png-compressor')
//});


//合并
//fis.match('::package', {
//    postpackager: fis.plugin('loader')
//});

//js合并
// fis.match('*.js', {
//    packTo: '/js/app.js'
// });

//css合并
//fis.match('*.{less,css}', {
//    packTo: '/static/aio.css'
//});
