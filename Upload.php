<?php

$temp_file = $_FILES['image']['tmp_name'];//获取服务器里图片

$ext = explode(".", $_FILES['image']['name']);//拆分获取图片名
$path='./uploadfile/'.$ext[0].'.'.end($ext);//upload为目标文件夹
move_uploaded_file($temp_file,$path);//移动临时文件到目标路径

echo json_encode(['status'=>1,'info'=>$path,'$_FILES'=>$_FILES]); exit();
