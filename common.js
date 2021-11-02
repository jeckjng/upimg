
//重新刷新页面，使用location.reload()有可能导致重新提交
function reloadPage(win) {
    var location = win.location;
    location.href = location.pathname + location.search;
}

/**
 * 页面跳转
 * @param url
 */
function redirect(url) {
    location.href = url;
}

/*
* 把数据处理成对象，例如：{confirm:true,msg:保存,waittime:1000}
* */
function form_data_option(str){
    var dataarr = {};
    if(!str){
        return dataarr;
    }
    str = str.split('{')[1].split('}')[0];
    $.each(str.split(','),function (i,v){
        var arr = v.split(':');
        dataarr[$.trim(arr[0])] = $.trim(arr[1]);
    })
    return dataarr;
}

/*
* 新定义 展示消息
* */
function custshowmsg(msg,time){
    msg = msg ? msg : '';
    time = time>0 ? time : 3000;
    var html =	'<div id="cust-custshowmsg" style="top: 50px;z-index: 19891015;position:fixed;">' +
        '<div class="cust-custshowmsg-content" style="margin: 0;border-radius: 3px;font-weight: 400;position: relative;color: white;background: rgba(0, 0, 0, 0.5);padding: 15px 30px;font-size: 14px;word-break: break-all;">'+msg+'</div>' +
        '</div>';
    $("body").children('#cust-custshowmsg').remove();
    $("body").append(html);

    var left = (document.body.clientWidth-$(".cust-custshowmsg-content").width())/2;
    $(".cust-custshowmsg-content").css('left',left);

    setTimeout(function (){
        $("body").children('#cust-custshowmsg').remove();
    },time);
}

/*
* 新定义 alert弹框
* */
function custalert(msg,func){
    msg = msg ? msg : '';
    var html = '<style type="text/css" >' +
        '.cust-alert-dialog-btn span{height: 28px;line-height: 28px;margin: 5px 5px 0;padding: 6px 15px;border-radius: 2px;font-weight: 400;cursor: pointer;}' +
        '.cust-alert-dialog-btn .cust-alert-dialog-btn0{border: 1px solid #1E9FFF;background-color: #1E9FFF;color: #fff;}' +
        '.cust-alert-dialog-btn .cust-alert-dialog-btn0:hover{background-color: #4BAFFA;}' +
        '</style>'+
        '<div id="cust-alert">' +
        '<div class="cust-alert-shade" style="width:100%; height: 100%;left: 0;top: 0;position:fixed;z-index:19891014;background: rgba(0, 0, 0, 0.3);"></div>'+
        '<div class="cust-alert-dialog" style="min-width: 260px;top:50px;left: 50px;z-index: 19891015;position:fixed;background: #fff;font: 14px Helvetica Neue,Helvetica,PingFang SC,Tahoma,Arial,sans-serif;color: #23262e;border-radius: 2px;">' +
        '<div class="cust-alert-dialog-content" style="position: relative;padding: 20px;line-height: 24px;font-size: 14px;word-break: break-all;">'+msg+'</div>' +
        '<div class="cust-alert-dialog-btn" style="text-align: right;padding: 0 15px 12px;">' +
        '<span class="cust-alert-dialog-btn0">确定</span>' +
        '</div>' +
        '</div>' +
        '</div>';
    $("body").children('#cust-alert').remove();
    $("body").append(html);

    var left = (document.body.clientWidth-$(".cust-alert-dialog").width())/2;
    $(".cust-alert-dialog").css('left',left);

    $(".cust-alert-dialog-btn0").on('click',function(){
        $('#cust-alert').remove();
        if(func){
            func();
        }
    });
}

/*
* 新定义 confirm确认是否操作
* */
function custconfirm(msg,func,fullmsg){
    var title = msg ? (fullmsg== true ? msg : '您确定要'+msg+'吗？') : '您确定要执行此操作吗？';
    var html = '<style type="text/css" >' +
                    '.cust-confirm-dialog-btn span{height: 28px;line-height: 28px;margin: 5px 5px 0;padding: 6px 15px;border-radius: 2px;font-weight: 400;cursor: pointer;}' +
                    '.cust-confirm-dialog-btn .cust-confirm-dialog-btn0{border: 1px solid #1E9FFF;background-color: #1E9FFF;color: #fff;}' +
                    '.cust-confirm-dialog-btn .cust-confirm-dialog-btn1{border: 1px solid #dedede;background-color: #fff;color: #333;}' +
                    '.cust-confirm-dialog-btn .cust-confirm-dialog-btn0:hover{background-color: #4BAFFA;}' +
                    '.cust-confirm-dialog-btn .cust-confirm-dialog-btn1:hover{color: rgba(51, 51, 51, 0.85);}' +
                '</style>'+
                '<div id="cust-confirm">' +
                    '<div class="cust-confirm-shade" style="width:100%; height: 100%;left: 0;top: 0;position:fixed;z-index:19891014;background: rgba(0, 0, 0, 0.3);"></div>'+
                    '<div class="cust-confirm-dialog" style="min-width: 260px;top:50px;left: 50px;z-index: 19891015;position:fixed;background: #fff;font: 14px Helvetica Neue,Helvetica,PingFang SC,Tahoma,Arial,sans-serif;color: #23262e;border-radius: 2px;">' +
                        '<div class="cust-confirm-dialog-content" style="position: relative;padding: 20px;line-height: 24px;font-size: 14px;word-break: break-all;">'+title+'</div>' +
                        '<div class="cust-confirm-dialog-btn" style="text-align: right;padding: 0 15px 12px;">' +
                            '<span class="cust-confirm-dialog-btn0">确定</span>' +
                            '<span class="cust-confirm-dialog-btn1">取消</span>' +
                        '</div>' +
                    '</div>' +
                '</div>';
    $("body").children('#cust-confirm').remove();
    $("body").append(html);

    var left = (document.body.clientWidth-$(".cust-confirm-dialog").width())/2;
    $(".cust-confirm-dialog").css('left',left);

    $(".cust-confirm-dialog-btn0").on('click',function(){
        $('#cust-confirm').remove();
        if(func){
            func();
        }
    });
    $(".cust-confirm-dialog-btn1").on('click',function(){
        $('#cust-confirm').remove();
    });
}

/*
* 新定义 弹出iframe页面
* */
$(".cust-iframe-pop").on('click',function (event){
    event.preventDefault();
    var href = $(this).attr('href');
    var title = $(this).attr('title');
    var opt = form_data_option($(this).attr('data-iframe'));
    var width = opt.width ? opt.width : '400px';
    var height = opt.height ? opt.height : '350px';
    var top = opt.top ? opt.top : '50px';

    var html = '<div id="cust-js-iframe" style="display:none;">' +
        '<style type="text/css" >' +
        '.cust-iframe-shade{width:100%; height: 100%;left: 0;top: 0;position:fixed;z-index:19891014; background: rgba(0,0,0,0.6);}' +
        '.cust-iframe-page{width: '+width+';height: '+height+';top:'+top+';z-index:19891015;position:fixed;background: #fff;}' +
        '</style>' +
        '<div class="cust-iframe-shade" ></div>' +
        '<div class="cust-iframe-page">' +
        '<iframe width="100%" height="100%" src="'+href+'" name="x-cust-iframe" class="x-cust-iframe" id="x-cust-iframe"></iframe>' +
        '</div>' +
        '</div>';
    $("body").children('#cust-js-iframe').remove();
    $("body").append(html);
    var left = (document.body.clientWidth-$(".cust-iframe-page").width())/2;
    $(".cust-iframe-page").css('left',left);
    $('#cust-js-iframe').toggle();
})

/*
* 新定义 js ajax请求
* */
$(".cust-js-ajax").on('click',function (event){
    event.preventDefault();
    var href = $(this).attr('href');
    custconfirm($(this).attr('confirm'),function (){
        $.get(href, {}, function(res) {
            var time = 2000;
            if(res.status == 1){
                custshowmsg(res.info)
                setTimeout(function (){
                    if(res.referer){
                        location.href = res.referer;
                    }else{
                        location.reload();
                    }
                },time)
            }else{
                custalert(res.info)
            }
        });
    },true)
})

/*
* 新定义 图片上传
* */
$('.cust-upload-img').on('click', function(event) {
    event.preventDefault();
    var name = $(this).data('name') ? $(this).data('name') : '';
    var showimgclass = $(this).data('showimgclass') ? $(this).data('showimgclass') : '';
    var progress = $(this).data('progress') ? $(this).data('progress') : 0;
    if(name == ''){
        custalert('请加上data-name属性')
        return false;
    }
    var html = '<form method="post" class="cust-img-js-ajax-form" action="'+$(this).data('url')+'" style="display: none;">' +
        '<input type="file" id="file" name="image" data-name="'+name+'" data-showimgclass="'+showimgclass+'" data-progress="'+progress+'" accept="image/*" onChange="cust_change_img_file(this)">' +
        '<button type="submit" class="cust-img-js-ajax-submit" ></button>' +
        '</form>';
    $("body").children('form.cust-img-js-ajax-form').remove();
    $("body").append(html);
    $("form.cust-img-js-ajax-form").children("input[name='image']").trigger('click');
})
function cust_change_img_file(obj){
    $("input[name='"+$(obj).data('name')+"']").val($(obj).val());
    $("img."+$(obj).data('showimgclass')).attr('src',$(obj).val());
    var form = $(obj).parent();
    $("body").children('#cust-progress-content').remove();
    form.ajaxSubmit({
        url: form.attr('action'), //按钮上是否自定义提交地址(多按钮情况)
        dataType: 'json',
        beforeSubmit: function (arr, $form, options) {
        },
        success: function (data, statusText, xhr, $form) {
            if(data.status=='1'){
                var name = $(obj).data('name');
                $("input[name='"+name+"']").val(data.info);
                if($(obj).data('showimgclass')){
                    var showimgclass = $(obj).data('showimgclass');
                    $("img."+showimgclass).attr('src','');
                    $("img."+showimgclass).attr('src',data.info);
                }
                custshowmsg('上传成功')
            }
            $("form.cust-img-js-ajax-form").remove();
        },
        xhr: function(){
            if($(obj).data('progress')=='1'){
                var html = '<div id="cust-progress-content" style="top: 50px;z-index: 19891015;position:fixed;width:550px;height:14px;line-height:14px;padding:0;margin:0;">' +
                    '<div class="cust-progress-line" style="display:inline-block;width:402px;height:14px;line-height:14px;background-color:#fbfbfb;padding:0;margin:0;border:1px solid #777777;border-radius:7px;">' +
                    '<p class="cust-progress-rate" style="background-color:#73c944;height:12px;line-height:12px;width:0;padding:0;margin:1px;border-radius:5px;"></p>' +
                    '</div>' +
                    '<div style="display:inline-block;height:14px;line-height:14px;padding:0;margin:0;color: black;">' +
                    '&nbsp;<span class="cust-progress-percent" style="height:14px;line-height:14px;padding:0;margin:0;">0</span>' +
                    '<span class="cust-progress-symbol" style="height:14px;line-height:14px;padding:0;margin:0;">%</span>' +
                    '</div>' +
                    '</div>'
                $("body").children('#cust-progress-content').remove();
                $("body").append(html);
                var left = (document.body.clientWidth-$("#cust-progress-content").width())/2;
                $("#cust-progress-content").css('left',left);

                var xhr = $.ajaxSettings.xhr();
                if(onprogress && xhr.upload) {
                    xhr.upload.addEventListener("progress" , onprogress, false);
                    return xhr;
                }
            }else{
                var xhr = $.ajaxSettings.xhr();
                if(onprogress && xhr.upload) {
                    xhr.upload.addEventListener("progress" , onprogress, false);
                    return xhr;
                }
            }
        },
        complete: function () {},
        error: function (context, xhr, e){
            custalert('上传失败')
            $("body").children('#cust-progress-content').remove();
            $("form.cust-img-js-ajax-form").remove();
        }
    });
}
function onprogress(evt){
    //通过事件对象侦查
    //该匿名函数表达式大概0.05-0.1秒执行一次
    // evt.loaded;  //已经上传大小情况
    //evt.total; 附件总大小
    var loaded = evt.loaded;
    var tot = evt.total;
    var per = Math.floor(100*loaded/tot);  //已经上传的百分比
    $('#cust-progress-content').find('.cust-progress-rate').css('width',(per*400/100));
    $('#cust-progress-content').find('.cust-progress-percent').text(per);
    $('#cust-progress-content').find('.cust-progress-symbol').html('%&nbsp;&nbsp;上传完成');
    if(per>=100){
        setTimeout(function (){
            $("body").children('#cust-progress-content').remove();
        },3000);
    }
}

/*
* 判断是否为数字或带小数点的数
* */
function check_isnumber(obj,msg) {
    var value = obj.value;
    // var ex = /^\.\d+$/;
    var ex = /^(-)?\d+(\.\d+)?$/;
    if (!ex.test(value)) {
        var label = $(obj).parent().parent().children("label").text();
        msg = msg ? '【'+msg+'】请设置正确的值' : ( label ? '【'+label+'】请设置正确的值' : '请设置正确的值');
        custalert(msg,function (){
            if($(obj).attr('data-oval')){
                $(obj).val($(obj).attr('data-oval'));
            }else{
                $(obj).val('');
            }
        });
    }
    return false;
}