$.fn.showHint = function(options;){
    options = options || {};
    var hintAttr = options.hintAttr || 'hintText';
    $(this).each(function(index, element){

        var $element = $(element),
            hintText = $element.attr(hintAttr);

        $element.focus(function(){
            if ($element.val() === hintText){
                $element
                    .val('')
                    .removeClass('hint')
            }
        });
        $element.blur(function(){
            if ($element.val() === ''){
                $element
                    .val(hintText)
                    .addClass('hint')
            }
        });
        $element.blur();
    });
}
