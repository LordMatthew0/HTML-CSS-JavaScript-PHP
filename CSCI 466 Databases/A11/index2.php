<?php 
	include ("header.html");
	require ("conn.php");
    $stmt = $conn->query('select * from dogs;');
	echo '<table border="1">';
    echo '<tr><td>';
    echo '<h3>DogId</h3>';
    echo '</td><td>';
    echo '<h3>Dog Name</h3>';
    echo '</td><td>';
    echo '<h3>Breed</h3>';
	while($row = $stmt->fetch(PDO::FETCH_ASSOC))
	{
		echo '<tr><td>';
		echo $row['dogId'];
		echo '</td><td> ';
		echo $row['name'];
        echo '</td><td> ';
		echo $row['breed'];
		echo '</td></tr>';	
	}  
    echo '</table>';
	include("footer.html");
?>