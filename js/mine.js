/* 切换窗口改变窗口标题 */
var title; // 用于临时存放原来的title内容
window.onblur = function () {
  title = document.title;
  document.title = "人呢？人呢？😧";
};
window.onfocus = function () {
  // onfocus时原来的title不为空才替换回去
  // 防止页面还没加载完成且onblur时title=undefined的情况
  if (title) {
    document.title = title;
  }
}
/* 切换窗口改变窗口标题 */

/*设置 checkbox 为只读*/
/* $(function() {
    $("input[type='checkbox']").click(function() {
        this.checked = !this.checked;
    });
}); */

window.onload = function(){
  var inputs =  document.getElementsByTagName("input");
  for(var i = 0;i < inputs.length; i++){
      if(inputs[i].type == "checkbox"){
        inputs[i].onclick = function() {
          this.checked = !this.checked;
        }
      }
  }
}
