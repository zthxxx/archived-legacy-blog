/**
* Hexo new posts hook to open editor
* @description Open editor of markdown when hexo new a post.
* @example
*     none
*/
var exec = require('child_process').exec;
 
/**
Hexo 3 & Win 10 & typora folder path in $PATH
This script well listen hexo creat a new post with 'new' command, 
it will run the Win DOS command whitch in the function exec by nodejs.child_process.exec method.
I use Typora to edit markdown, and I have add typora folder path in global SYSTEM PATH,
so I can use 'typora *.md' to run this editor.
In Win 10 the DOS command need the 'start' command head.
**/
hexo.on('new', function(data){
  exec('start "typora" ' + data.path);
});



