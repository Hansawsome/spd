<?php
header('Content-Type:application/json');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:Content-Type');

if($_SERVER['REQUEST_METHOD']!=='POST'){
    http_response_code(405);
    exit(json_encode(['error'=>'Method not allowed']));
}

$input=json_decode(file_get_contents('php://input'),true);
if(!$input){
    http_response_code(400);
    exit(json_encode(['error'=>'Invalid JSON']));
}

// Validate required fields
$required=['name','email','company','phone'];
foreach($required as $field){
    if(empty($input[$field])){
        http_response_code(400);
        exit(json_encode(['error'=>"Missing: $field"]));
    }
}

// Validate email
if(!filter_var($input['email'],FILTER_VALIDATE_EMAIL)){
    http_response_code(400);
    exit(json_encode(['error'=>'Invalid email']));
}

// Save registration
$data=[
    'timestamp'=>date('Y-m-d H:i:s'),
    'name'=>$input['name'],
    'email'=>$input['email'],
    'company'=>$input['company'],
    'phone'=>$input['phone'],
    'position'=>$input['position']??'',
    'interests'=>$input['interests']??[]
];

$file='registrations.json';
$registrations=file_exists($file)?json_decode(file_get_contents($file),true)??[]:[];
$registrations[]=$data;

if(file_put_contents($file,json_encode($registrations,JSON_PRETTY_PRINT))){
    echo json_encode(['success'=>true,'message'=>'Registration successful']);
}else{
    http_response_code(500);
    echo json_encode(['error'=>'Save failed']);
}
?>
