/* common */

    function dec(elem) {
        var elem = $(elem);
        var c = parseInt( elem.text() );
        var Form = (elem && elem.attr('rel')) ? elem.attr('rel').split(';') : ['', '', ''];
        var mod100 = c % 100;
        var F = function() {
            switch (c % 10) {
                case 1:
                    if (mod100 == 11) {
                        return Form[2];
                    }
                    else {
                        return Form[0];
                    }
                case 2:
                case 3:
                case 4:
                    if ((mod100 > 10) && (mod100 < 20)) {
                        return Form[2];
                    }
                    else {
                        return Form[1];
                    }
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 0:
                    return Form[2];
            }
        };
        elem.html(c + ' ' + F());
    }

$(document).ready(function() {
	if($('.mask').length>0) {
		$(".mask").mask("8 (999) 999-99-99");
	}
	$('select').styler();
	var ff;
	$('input[type=text]:not(.ds1)').focus(function() {
		if($(this).attr('data-place')==$(this).val()) {
			$(this).val('');
		}
		$(this).addClass('ac');
	});
	$('input[type=text]:not(.ds1)').blur(function() {
		if($(this).val()=='') {
			$(this).val($(this).attr('data-place'));
		}
		$(this).removeClass('ac');
	});
	$('textarea').focus(function() {
		if($(this).attr('data-place')==$(this).val()) {
			$(this).val('');
		}
		$(this).addClass('ac');
	});
	$('textarea').blur(function() {
		ff=$(this).attr('data-place');
		if($(this).val().length==0) {
			$(this).val(ff);
		}
		$(this).removeClass('ac');
	});
	function ress() {
		$('.sl1 .item-poss').height($('.sz1').height());
		$('.head-left1').attr('style','').css({'min-height':$('#page').height()});
	}
	ress();
	$(window).resize(function() {
		ress();
	});
	$(window).load(function() {
		ress();
	});
	$(window).load(function() {
		$('input[type=text]').each(function() {
			$(this).attr('data-place',$(this).val());
		});
		$('textarea').each(function() {
			$(this).attr('data-place',$(this).val());
		});
	});
	$('.dt1 b').text($('.sl1 .item-poss').length);
	$('.sl1').slick({
		prevArrow:'<div class="prev"></div>',
		nextArrow:'<div class="next"></div>'
	});
	$('.sl1').on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('.dt1 span').text(currentSlide+1);
	});
	$('.lb1 input:checked').parent().addClass('ac').siblings().removeClass('ac')
	$('.lb1 input').change(function() {
		$('.lb1 input:checked').parent().addClass('ac').siblings().removeClass('ac')
	});
	$('.op-ch1 input:checked').parent().addClass('ac').siblings().removeClass('ac')
	$('.op-ch1 input').change(function() {
		$('.op-ch1 input:checked').parent().addClass('ac').siblings().removeClass('ac')
	});
	$('.ov-color1').find("label:first-child").addClass('all-colors');

/*	$('.ov-color1 input').change(function(){

			var clickedColor = $(this).parent('label');
			if(clickedColor.hasClass('selected-color')) {
				clickedColor.removeClass('selected-color');
			}
			$('.ov-color1 label').removeClass('selected-color');
			clickedColor.find(':checkbox').prop('checked', true);

			if(clickedColor.hasClass('all-colors')) {
				$('.ov-color1 label').removeClass('selected-color');
				$('.ov-color1 label').find(':checkbox').prop('checked', false);
				$('.all-colors').addClass('selected-color');
			}

			clickedColor.addClass('selected-color');

	});*/
	/*$('.ov-color1 input:checked').parent().addClass('ac').siblings().removeClass('ac')*/
	$('.ov-color1 input').change(function() {
		if($(this).parent().hasClass("all-colors")) {
			if($(this).parent().hasClass("ac")) {
				$('.ov-color1 input:checked').each(function(){
					$(this).prop("checked", false);
				});
			} else {
				$('.ov-color1 input:checked').each(function(){
					$(this).parent().removeClass('ac');
					$(this).prop("checked", false);
				});
				$('.all-colors').prop("checked", true).addClass("ac");
			}
			
		} else {
			$('.all-colors').removeClass("ac").find('input:checked').prop("checked", false);
			$('.ov-color1 label').each(function() {
				if($(this).find('input:checked').length>0) {
					$(this).addClass('ac');
					//$('.ov-color1 .ds').removeClass('ac').find("input").prop('checked', false);
				}
				else {
					$(this).removeClass('ac');
				}
			});
		}

		if(!$('.ov-color1 label input').is(':checked')) {
			$('.all-colors').prop("checked", true).addClass("ac");
		}
		
	});
	/*$('.ov-color1 .ds input').change(function() {
		if($(this).parent().find('input').prop('checked')==true) {
			$(this).parent().addClass('ac').siblings().removeClass('ac').find("input").prop('checked', false);
		}
		else {
			$(this).parent().removeClass('ac');
		}
	});*/
	$('.mbt1').click(function() {
		$('.head-left1').addClass('ac');
		$('.fade1').fadeIn(400);
	});
	$('.mbt2').click(function() {
		$('.head-left1').addClass('ac2');
		$('body,html').animate({scrollTop:'0px'}, 400);
		$('.fade1').fadeIn(400);
	});
	/*var set1;
	$('.head-left1').mouseleave(function() {
		set1=setTimeout(function() {
			$('.head-left1').removeClass('ac2');
		}, 700);
	});
	$('.head-left1').mouseenter(function() {
		clearTimeout(set1);
	});*/
	$('.fade1,.close1').click(function() {
		$('.head-left1').removeClass('ac ac2');
		$('.fade1').fadeOut(400);
	});
	$('.open1').click(function() {
		$(this).parent().toggleClass('ac');
		$('body,html').scrollTop($('.open1').offset().top+1);
	});
	function scrl1() {
		if($(window).scrollTop()>$(window).height()/2) {
			$('.up1').fadeIn(200);
		}
		else {
			$('.up1').fadeOut(200);
		}
		if($(window).scrollTop()>0) {
			$('.head-top1').addClass('ac');
		}
		else {
			$('.up1').fadeOut(200);
			$('.head-top1').removeClass('ac');
		}
	}
	scrl1();
	$(window).scroll(function() {
		scrl1();
	});
	$('.up1').click(function() {
		$('body,html').animate({scrollTop:'0px'}, 400);
	});
	$('.tabs-nav1 div').click(function() {
		$(this).addClass('ac').siblings().removeClass('ac');
		$('.con-tb1 .item1').eq($(this).index()).addClass('ac').siblings().removeClass('ac');
		ress();
	});

	var minRangeValue = parseFloat($('input[name="pminIN"]').val());
	var maxRangeValue = parseFloat($('input[name="pmaxIN"]').val());
	
	var minRangeValueIN = parseFloat($('input[name="pmin"]').val());
	var maxRangeValueIN = parseFloat($('input[name="pmax"]').val());

	$( ".sld1" ).slider({
		range: true,
		min: minRangeValue, // Начало диапазона
		max: maxRangeValue, // конец диапазона
		values: [minRangeValueIN,maxRangeValueIN], // указанный юзером интервал

		//values: [minRangeValue,maxRangeValue],
		slide: function( event, ui ) {
			$('.lp1 input').val(ui.values[0]);
			$('.lp2 input').val(ui.values[1]);
			$('.lp1 span').text(ui.values[0]);
			$('.lp2 span').text(ui.values[1]);
		}
	});

	$('.lp1 input').val($(".sld1").slider("values",0));
	$('.lp2 input').val($(".sld1").slider("values",1));
	$('.lp1 span').text($(".sld1").slider("values",0));
	$('.lp2 span').text($(".sld1").slider("values",1));
	$('.ep-flt1').click(function() {
		$('.modal-flt').fadeIn(300);
		$('body').addClass('ac');
	});
	$('.close2').click(function() {
		$('.modal-flt').fadeOut(300);
		$('body').removeClass('ac');
	});
	$('.lp1 input').keydown(function() {
		setTimeout(function() {
			$(".sld1").slider("values",0,$('.lp1 input').val());
			$('.lp1 span').text($(".sld1").slider("values",0));
		}, 50);
	});
	$('.lp2 input').keydown(function() {
		setTimeout(function() {
			$(".sld1").slider("values",1,$('.lp2 input').val());
			$('.lp2 span').text($(".sld1").slider("values",1));
		}, 50);
	});
    $('body').on('click', '[data-type="show_form"]', function(event){
		var id = $(this).attr('data-id');
        $('[data-id="form_'+id+'"]').addClass('show');
        $('[data-id="form_'+id+'"] .popupbody').removeClass('fadeOutUp');
        $('[data-id="form_'+id+'"] .popupbody').addClass('fadeInDown');
        // $("body").animate({"scrollTop":0},"slow");
    	event.stopPropagation();
    	event.preventDefault();
    	return false;
    });
    $('body').on('click', 'button[name="close"]', function(event){
		var th = $(this);
        var form_id = th.attr('data-form-id');
        $('[data-id="form_'+form_id+'"] .popupbody').removeClass('fadeInDown');
        $('[data-id="form_'+form_id+'"] .popupbody').addClass('fadeOutUp');
        setTimeout(function(){
            $('[data-id="form_'+form_id+'"]').removeClass('show');
		},600);
        event.stopPropagation();
        event.preventDefault();
        return false;
    });
    $('body').on('click', '.btn_submit', function(event){

        var th = $(this);
        var form_id = th.attr('data-form-id');
        var st = true;

        $('[data-id="form_'+form_id+'"] *').each(function(){
        	var th = $(this);
        	if(th.attr('required')=='required'){
                th.removeClass('red');
        		// console.log(th.val().length);
        		if(Number( th.val().length ) < 1){
                    th.addClass('red');
                    st = false;
				}
			}
		});

    	if(st){
            /*$('[data-id="form_'+form_id+'"] .popupbody').removeClass('fadeInDown');
            $('[data-id="form_'+form_id+'"] .popupbody').addClass('fadeOutUp');
            setTimeout(function(){
                $('[data-id="form_'+form_id+'"]').removeClass('show');
            },600);*/
            return true;
        }

        event.stopPropagation();
        event.preventDefault();
        return false;
    });


    $(this).keydown(function(event){
        if (event.which == 27){
            $('.popup.show .popupbody').addClass('fadeOutUp');
            $('.popup.show .popupbody').removeClass('fadeInDown');
            setTimeout(function(){
                $('.popup.show').removeClass('show');
            },600);
        }
    });
    $('body').on('click', '.popup.show .body_bg', function(event){ 
        $('.popup.show .popupbody').addClass('fadeOutUp');
        $('.popup.show .popupbody').removeClass('fadeInDown');
        setTimeout(function(){
            $('.popup.show').removeClass('show');
        },600);
    });

    $('body').on('click', '.popup.show .popupbody', function(event){
        console.log('.popup.show .popupbody', event);
        if (event.target.tagName == 'BUTTON') {
            return true;
        }
        event.stopPropagation();
	event.preventDefault();
        return false;
    });
	
	$('body').on('click', '.popup.show .popupbody li a', function(event){
        var href = $(this).attr("href");
		console.log(href);
        event.stopPropagation();
		event.preventDefault();
		
		window.location.search = href;
        return false;
    });

     $('[name="tel"]').mask("8 (999) 999-99-99");

    var onlineConf = {
        prob: 90,
        time: [2, 10],
        count: [2, 8]
    };
    var online = $('#online-view');
    if (online.length > 0) {
        var rand = function(min, max)
	{
	  return parseInt(Math.random() * (max - min) + min);
	};
        online.hide();
        if (rand(0, 100) < onlineConf.prob) {
            setTimeout(function(){
                var count = rand(onlineConf.count[0], onlineConf.count[1]);
                dec(online.find('.count').text(count));
                online.fadeIn();
            }, rand(onlineConf.time[0], onlineConf.time[1])*1000);
        }
    }
});