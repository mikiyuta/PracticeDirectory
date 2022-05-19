<?php 

echo $text; 
echo $this->Html->css('test');
echo $this->Html->script('test');

?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>test用</h1>
    <form action="/sample/testresult" method="POST">
        <input type="hidden text" name="_method">
        <input type="submit" onclick="button()">
        <div id="parallel">
            <p>11111</p>
            <p>22222</p>
            <p>33333</p>
            <p>44444</p>
            <p>55555</p>
        </div>
    </form>
</body>
</html>