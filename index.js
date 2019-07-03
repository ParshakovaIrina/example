(function($) {

    $(document).ready(function(){
        var content = $('.menu-content');
       $('#menu-icon').click(function(){
           if(content.hasClass("visible")){
               content.removeClass("visible");

               return;
           }
        content.addClass('visible');
        });
    });

   
})(jQuery);

