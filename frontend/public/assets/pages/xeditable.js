/*
 Template Name: Admiria - Bootstrap 4 Admin Dashboard
 Author: Themesbrand
 File: Xeditable Init
 */


$(function(){$.fn.editableform.buttons='<button type="submit" class="btn btn-success editable-submit btn-sm waves-effect waves-light"><i class="mdi mdi-check"></i></button><button type="button" class="btn btn-danger editable-cancel btn-sm waves-effect waves-light"><i class="mdi mdi-close"></i></button>',$("#inline-username").editable({type:"text",pk:1,name:"username",title:"Enter username",mode:"inline",inputclass:"form-control-sm"}),$("#inline-firstname").editable({validate:function(e){return""==$.trim(e)?"This field is required":void 0},mode:"inline",inputclass:"form-control-sm"}),$("#inline-sex").editable({prepend:"not selected",mode:"inline",inputclass:"form-control-sm",source:[{value:1,text:"Male"},{value:2,text:"Female"}],display:function(e,t){var n={"":"#98a6ad",1:"#5fbeaa",2:"#5d9cec"},i=$.grep(t,function(t){return t.value==e});i.length?$(this).text(i[0].text).css("color",n[e]):$(this).empty()}}),$("#inline-status").editable({mode:"inline",inputclass:"form-control-sm"}),$("#inline-group").editable({showbuttons:!1,mode:"inline",inputclass:"form-control-sm"}),$("#inline-dob").editable({mode:"inline",inputclass:"form-control-sm"}),$("#inline-comments").editable({showbuttons:"bottom",mode:"inline",inputclass:"form-control-sm"})});