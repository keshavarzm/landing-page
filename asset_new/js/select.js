$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
    console.info(this.getAttribute('id'));

    $this.addClass('select-hidden');

    $this.wrap('<div class="select"></div>');

    //$this.after('<div class="select-styled"></div>');

    $this.after('<div class="select-styled" id=sel_'+ this.getAttribute('id') +'></div>');

    var $styledSelect = $this.next('div.select-styled');
    //$styledSelect.setAttribute("id", 'sel_' + this.getAttribute('id'));
    if(this.getAttribute('id')=='duration'){
        $styledSelect.text($this.children('option').eq(1).text());
    } else {
        $styledSelect.text($this.children('option').eq(0).text());
    }


    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

      for (var i = 0; i < numberOfOptions; i++) {
          $('<li />', {
              text: $this.children('option').eq(i).text(),
              rel: $this.children('option').eq(i).val(),
              id: $this.children('option').eq(i).val(),
          }).appendTo($list);
      }



    if( $(window).width() < 769 ) {
        $this.removeClass('select-hidden');
        $('.select-options').addClass('is-hidden ');
        $('.select-styled').text(null);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
        if($('.select-options').is(':visible')) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));

        $list.hide();

        } else {
            e.stopPropagation();
            $('div.select-styled.active').each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        }//end if
    });


    $listItems.each(function(){
        var idx = $(this).index();
        if(idx===0) {
          //console.log($this.val($(this).attr('rel')));
          //console.log(idx + '   ' + JSON.stringify($(this).eq(idx).attr('rel')));
          $(this).eq(idx).attr('rel', $styledSelect.text()).addClass('selected');
        }
    });

    $listItems.click(function(e) {
        e.stopPropagation();

        //mehdi
        if($(this).text().indexOf('GMT') !=- 1) {

            // var timer = document.getElementById("time");
            // for(var i=0; i< timer.length ; i++) {
            //   //console.log(timer.options[i].value);
    				// 	var time_val= timer.options[i].value;
            //   //console.log(document.getElementById(time_val));
            //   if(document.getElementById(time_val).style.display=='none') {
            //     document.getElementById(time_val).style.display='block';
            //     document.getElementById(time_val).classList.remove("disabled");
            //   }
            // }

            var current_dt = new Date();
            var offset = $(this).text().substring(4,7);
            //console.log(moment(current_dt).utcOffset(offset).format('YYYY-MM-DD hh:mm'));
            var tz_year = moment(current_dt).utcOffset(offset).format('YYYY');
            var tz_month = moment(current_dt).utcOffset(offset).format('MM');
            var tz_day = moment(current_dt).utcOffset(offset).format('DD');


            var tz_hour = moment(current_dt).utcOffset(offset).format('HH');
            var tz_min = moment(current_dt).utcOffset(offset).format('mm');


            var timer = document.getElementById("time");
            //sessionStorage.setItem('aftertime', tz_hour + '' + tz_min);
            //sessionStorage.setItem('afterdate', tz_year + '-' + tz_month +'-' + tz_day);

            //sessionStorage.setItem('reset', 1);

            console.log('System tz:' + jstz.determine().name());
    				console.log('selected tz:' + $(this).text());

            var system_current_tz = jstz.determine().name();
            var selected_time_z = $(this).text();

            if(selected_time_z.indexOf(system_current_tz) !==-1) {
              sessionStorage.setItem('resettimezone', false);
            } else {
              sessionStorage.setItem('resettimezone', true);
            }


            for(var i=0; i< timer.length ; i++) {
              var time_val= timer.options[i].value;
              var timer_hour = time_val.substring(0,2);
              var timer_min = time_val.substring(3);

              document.getElementById(time_val).style.display='block';
              document.getElementById(time_val).classList.remove("disabled");


              // if(timer_hour < tz_hour) {
              //   document.getElementById(time_val).style.display='none';
              // } else {
              //   document.getElementById(time_val).style.display='block';
              // }
              //console.log(timer_hour + ' '  + timer_min );
            }

            //$('#datepicker').datepicker("setDate", new Date(tz_year,tz_month -1 ,tz_day));
        }

        $(this).addClass('selected').siblings('li').removeClass('selected');
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));

        $list.hide();

        // select 선택 시, 색 활성화
        if ( $(this).index() === 0 ) {
            $(this).closest('.select').removeClass('selected');
        } else {
            $(this).closest('.select').addClass('selected');
        }
    });

    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });
});


$(window).resize(function(){

    if( $(window).width() < 769 ) {
        $('select').each(function(){
            var $styledSelect = $(this).next('div.select-styled');

            $(this).removeClass('select-hidden');
            $('.select-options').addClass('is-hidden ');
            // $styledSelect.text(null);
        });

    } else {
        // $('select').each(function(){
        //     var $styledSelect = $(this).next('div.select-styled');
        //
        //
        //     $(this).addClass('select-hidden');
        //     $('.select-options').removeClass('is-hidden ');
        //     $styledSelect.text($(this).children('option').eq(0).text());
        // });
    }

});


/////////////////////////////////////////////////////////////////////////////////////////
// Datepicker
/////////////////////////////////////////////////////////////////////////////////////////
$('#datepicker').datepicker({
    firstDay: 1,
    showOtherMonths: true,
    minDate: 0,
}).datepicker('setDate', 'today');
