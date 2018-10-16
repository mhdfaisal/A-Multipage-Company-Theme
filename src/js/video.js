
    $(document).ready(function(){
        $("#videobtn").click(function(){
        $("#video").attr("src","https://www.youtube.com/embed/d0Wk_XpVJgM?autoplay=1");
        $("#mdclose").click(function(){
            $("#video").attr("src","");
        });
        });
    });
