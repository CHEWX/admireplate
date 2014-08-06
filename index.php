<!DOCTYPE html>
<!--[if lt IE 7]> <html class="lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html class="lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html class="lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<title></title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" href="css/main.css">
	<!--[if lt IE 9]> <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script> <![endif]-->
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
	<script>window.jQuery || document.write('<script src="assets/js/jquery-1.10.1.min.js"><\/script>')</script>

	<?php if(strstr($_SERVER['HTTP_HOST'], "8888")!=false) { ?>
	    <script src="assets/js/src/global.js"></script>
	<?php } else { ?>
		<script src="assets/js/main.min.js"></script>
	<?php } ?>

</body>
</html>