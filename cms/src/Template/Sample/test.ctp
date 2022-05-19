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
    <?= $this->Form->create(null, array('url' => array('controller' => 'sample', 'action' => 'testresult'))); ?>
    <label>名前：
        <input type="hidden text" name="name">
    </label>
    <label>年齢：
        <input type="hidden text" name="age">
    </label>
    <label>出身：
        <input type="hidden text" name="from">
    </label>
    <input type="submit" value="Post" onclick="button()"/>
    <?= $this->Form->end(); ?>

        <!-- <form action="testresult" method="POST">
        <label>名前：
            <input type="hidden text" name="_method">
        </label>
        <input type="submit" onclick="button()">
        </form> -->
</body>
</html>