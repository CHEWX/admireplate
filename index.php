<!DOCTYPE html>
<!--[if lt IE 7]> <html class="lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html class="lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html class="lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<title></title>
	<meta name="description" content="">

    <!--<link rel="dns-prefetch" href="//ajax.googleapis.com">
    <link rel="dns-prefetch" href="//www.google-analytics.com">
    <link rel="dns-prefetch" href="//fast.fonts.net">-->

    <link rel="icon" type="image/png" href="/favicon.ico">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">

	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" href="assets/css/main.css">
	<!--[if lt IE 9]> <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.js"></script> <![endif]-->
</head>
<body>

	<header class="l-header">

	</header>

	<main class="l-main">
		<!-- content -->
	</main>

	<footer class="l-footer">


	</footer>

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="assets/js/jquery/dist/jquery.min.js"><\/script>')</script>

	<?php if( strstr( $_SERVER['HTTP_HOST'], "dev" ) != false ) { ?>
	    <script src="assets/js/libs/modernizr/*.js"></script>
	    <script src="assets/js/src/global.js"></script>
	<?php } else { ?>
		<script src="assets/js/main.js"></script>
	<?php } ?>

	<!-- Google Analytics here -->

</body>
</html>