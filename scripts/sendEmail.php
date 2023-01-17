<?php
$url = 'https://api.elasticemail.com/v2/email/send';

try{
        $post = array('from' => 'sabovmicha@gmail.com',
		'fromName' => 'michael',
		'apikey' => '77FF92C118F841E1A6DD42AFFFC604DC8AAC164708D8D0EAE2A501197F3D7D32E613674585F466C50603CFE1DFC327E8',
		'subject' => 'Your Subject',
		'to' => 'sabovmiha@gmail.com',
		'bodyHtml' => '<h1>Html Body</h1>',
		'bodyText' => 'Text Body',
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