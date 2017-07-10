<?php
// https://github.com/stephenyeargin/angularjs-brewery-db
require_once('config.php');
$ch = curl_init('http://api.brewerydb.com/v2/locations?key=' . BREWERY_DB_API_KEY . '&locality=cincinnati&isClosed=N');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$return = curl_exec($ch);
header('Content-type: application/json');
print $return;