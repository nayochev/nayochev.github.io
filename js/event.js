$('.eventbutton').click(function(){
    const $img = $(this).next();
    if($img.css('display') == 'none'){
        $img.css("display","block");
    }else{
        $img.css("display","none");
    }
});