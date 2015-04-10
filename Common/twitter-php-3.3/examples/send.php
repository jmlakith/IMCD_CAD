<?php

require_once '../src/twitter.class.php';

// ENTER HERE YOUR CREDENTIALS (see readme.txt)
$consumerKey="ErNBKYHj7XMsxVTICQpSs0k1n";
$consumerSecret="MSPYNwFmUu1kUoTdupgMibmx0CnyfpvEVkchy4ML18199aMCFL";
$accessToken="2807490866-oY0UhEVJ74ZZItOxBJn6ozvyign2Qff8RUVhNa9";
$accessTokenSecret="M6Oxl81OPWbfbdloP1ln27fNYDOC1cjKmJJEA8VGsGO4f";

$twitter = new Twitter($consumerKey, $consumerSecret, $accessToken, $accessTokenSecret);

try {
	$tweet = $twitter->send('Your Next Clinic Date is on tomorrow, please attend'); // you can add $imagePath as second argument

} catch (TwitterException $e) {
	echo 'Error: ' . $e->getMessage();
}
