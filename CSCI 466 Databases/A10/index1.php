<?php
	include ("header.html");
	require ("conn.php");
	$stmt = $conn->query('select Book.Title, Branch.BranchName, Inventory.OnHand from Book, Branch, Inventory where Book.BookCode = Inventory.BookCode and Inventory.BranchNum = Branch.BranchNum order by Branch.BranchName, Book.Title');
	echo '<table border="1">';
    echo '<tr><td>';
    echo '<h3>Title</h3>';
    echo '</td><td>';
    echo '<h3>Branch Name</h3>';
    echo '</td><td>';
    echo '<h3>OnHand</h3>';
	while($row = $stmt->fetch(PDO::FETCH_ASSOC))
	{
		echo '<tr><td>';
		echo $row['Title'];
		echo '</td><td> ';
		echo $row['BranchName'];
        echo '</td><td> ';
		echo $row['OnHand'];
		echo '</td></tr>';	
	}  
	echo '</table>';
	include("footer.html");
?>