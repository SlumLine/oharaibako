$(function(){

  /* 左上 運行情報の時間表示 */
  set_left_height("right_top");
  setInterval(showtime, 1000);

  function showtime() {
    var today = new Date();
    $('#now_time').html(today.getHours() + ":" + ('0' + today.getMinutes()).slice(-2) );
  }
  /* 左上 運行情報の時間表示 ここまで */

  /* 文字を左右移動するアニメーション */
  $(document).ready(function(){
    $('.moving_text .wrap').on('animationend', function () {
        if ($(this).attr('data-order') === 'left') {
            $(this).attr('data-order', 'right');
        } else {
            $(this).attr('data-order', 'left');
        }
    });
  });
  /* 文字を左右移動するアニメーション ここまで */

  /* 右画面切り替え */
  $("ul#left_nav li").on("click",function(){
    let show_right_id = $(this).data("link");

    $("ul#left_nav li").each(function(){
      let right_id = $(this).data("link");
      if(right_id === show_right_id){
        $('#'+show_right_id).removeClass("d-none");
      } else {
        $('#'+right_id).addClass("d-none");
      }
    })
    set_left_height();
  })
  
  function set_left_height(show_right_id){
  	//左側高さの再設定
    let right_height = $("#"+show_right_id).height() + 32;
    let browser_height = $(window). height();
    let height = right_height > browser_height ? right_height : browser_height;
     $("main .left .left-inner").css("height",  height+"px");
  }
  /* お問い合わせ>よくある質問はこちら */
  $("#right_contact a.link").on("click",function(){
    $('#right_qa').removeClass("d-none");
    $('#right_contact').addClass("d-none");
    return false;
  })
})