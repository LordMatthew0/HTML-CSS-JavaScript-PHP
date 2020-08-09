<?php
	include ("header.html");
	require ("conn.php");
	$stmt = $conn->query('select distinct City, PublisherName from Publisher order by City;');
	echo '<table border="1">';
    echo '<tr><td>';
    echo '<h3>City</h3>';
    echo '</td><td>';
    echo '<h3>Publisher</h3>';
	while($row = $stmt->fetch(PDO::FETCH_ASSOC))
	{
		echo '<tr><td>';
		echo $row['City'];
		echo '</td><td> ';
		echo $row['PublisherName'];
	}  
	echo '</table>';
	include("footer.html");
?>