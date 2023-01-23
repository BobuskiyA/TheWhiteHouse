<?php
$url = 'https://api.elasticemail.com/v2/email/send';
if(!$_POST) {echo 'list is empty';}
$name = $_POST["name"];
$phone = $_POST["phone"];
try{
        $post = array('from' => 'thewhitehouseemailsender@gmail.com',
		'fromName' => 'TheWhiteHouse',
		'apikey' => '6474B5D52FFB67CA0333BE356E5B4E153B96B36252139135D775A85B5E6A559EFBE7B3D379A66EA2700AD8066CAA2F46',
		'subject' => 'Новый клиент хочет связаться с вами',
		'to' => 'sabovmiha@gmail.com',
		'bodyHtml' => '<div>Привет, меня зовут ' . $name . '<br> Мой номер телефона ' .$phone . '<br> Пожалуста свяжитесь со мной</div>',
		'bodyText' => '',
		'isTransactional' => false);
		
		$ch = curl_init();
		curl_setopt_array($ch, array(
            CURLOPT_URL => $url,
			CURLOPT_POST => true,
			CURLOPT_POSTFIELDS => $post,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HEADER => false,
			CURLOPT_SSL_VERIFYPEER => false
        ));
		
        $result=curl_exec ($ch);
        curl_close ($ch);
		
        echo $result;	
}
catch(Exception $ex){
	echo $ex->getMessage();
}
?>