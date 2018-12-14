$('#aboutbutton').click(function(){
    const $moreabout = $('#moreabouttext');
    if($moreabout.css('display') == 'none'){
        $moreabout.fadeIn();
    }else{
        $moreabout.fadeOut();
    }
});