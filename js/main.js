/**
 * Created by KienNguyen on 4/2/2015.
 */

//Smart Resize
(function($, sr) {
    var debounce = function(func, threshold, execAsap) {
        var timeout;
        return function debounced() {
            var obj = this,
                args = arguments;

            function delayed() {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            };
            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);
            timeout = setTimeout(delayed, threshold || 200);
        };
    };
    // smartresize
    jQuery.fn[sr] = function(fn) {
        return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
    };
})(jQuery, 'smartresize');
//=================================================================

function clearText(field) {
    if (field.defaultValue == field.value) field.value = '';
    else if (field.value == '') field.value = field.defaultValue;
    //<input type="text" onblur="clearText(this)" onfocus="clearText(this)" value="value"/>
}

//=================================================================

function equalheight(container) {
    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    $(container).each(function() {
        $el = $(this);
        $($el).height('auto');
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}
//=====================================================================
var tablet = 768;

var _mcgc = {
    init: function() {
        'use strict';
        _mcgc.activeSearch.init();
        if ($(".popup-media").length) _mcgc.videoPopup.init();
        //if ($(".selectpicker").length) _mcgc.selectBox.init();

        _mcgc.mobileMenu.init();
        _mcgc.dropdowMenuKeep.init();
    },
    heroBanner: {
        init: function(ele) {
            'use strict';

        }
    },
    videoPopup: {
        init: function(ele) {
            'use strict';

            $('.popup-media').fancybox({
                fitToView: true,
                autoCenter: true,
                autoHeight: true,
                autoWidth: true,
                width: 700,
                helpers: {
                    media: {}
                }
            });
        }
    },
    activeSearch: {
        init: function(ele) {
            'use strict';

            $('.search-icon').on('click', function() {
                $(this).parent().toggleClass('active');
                $(this).next().focus();
            })
        }
    },
    selectBox: {
        init: function(ele) {
            'use strict';

            $('.selectpicker').selectpicker({
                mobile: true,
                liveSearch: true,
                size: 4
            });
        }
    },

    mobileMenu: {
        init: function(ele) {
            'use strict';
            $('body').on(' show.bs.collapse', function() {
                $(this).addClass('no-scroll-y')
            })
            $('body').on('hidden.bs.collapse', function() {
                $(this).removeClass('no-scroll-y')
            })

            $('.icon-cross').on('click', function() {

                $('.navbar-toggle').trigger('click');
            });

        }
    },
    dropdowMenuKeep: {
        init: function(ele) {
            'use strict';
            $("ul.dropdown-menu").on("click", "[data-keepOpenOnClick]", function(e) {
                e.stopPropagation();
            });
        }

    }
};

$(document).ready(function() {
    'use strict';
    _mcgc.init();
    $('#tabcordion').tabCollapse();
    $.validate({
        validateOnBlur: true,
        form: '#login',

    });

});

$(window).resize(function() {
    'use strict';
});

$(window).load(function() {
    'use strict';
    // HERO BANNER - INIT
});
