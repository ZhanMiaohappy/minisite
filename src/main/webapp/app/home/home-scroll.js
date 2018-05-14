$(document).ready(function(){
    $(window).scroll(function(){
        var top = $(document).scrollTop();
        var menu = $("#menu");
        var items = $("#content").find(".item");
        // console.log(items)
        var curId = "";

        items.each(function(){
            var m = $(this);
            var itemsTop = m.offset().top;
            if(top > itemsTop-100){
                curId = "#" + m.attr("id");
            }else{
                return false;
            }
        });


        var curLink = menu.find(".cur");

        // console.log(curId)
        if( curId && curLink.attr("href") != curId ){

            if(curId === '#item8'){
                curId = '#item3';
                history.pushState(null,'',window.location.href.slice(0,-6));
            }
            curLink.removeClass("cur");
            menu.find( "[href='" + curId + "']" ).addClass("cur");
        }

    });
});
