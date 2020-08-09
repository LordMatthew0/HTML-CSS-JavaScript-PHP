<?php 
	include ("header.html");
	require ("conn.php");
    $stmt = $conn->query('select * from visits;');
	echo '<table border="1">';
    echo '<tr><td>';
    echo '<h3>visitId</h3>';
    echo '</td><td>';
    echo '<h3>dog Id</h3>';
    echo '</td><td>';
    echo '<h3>date</h3>';
	while($row = $stmt->fetch(PDO::FETCH_ASSOC))
	{
		echo '<tr><td>';
		echo $row['visitId'];
		echo '</td><td> ';
		echo $row['dogID'];
        echo '</td><td> ';
		echo $row['date'];
		echo '</td></tr>';	
	}  
    echo '</table>';
	include("footer.html");
?>