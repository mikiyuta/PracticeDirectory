<?php

namespace App\Controller;
 
class SampleController extends AppController{
    function test() {
        $text = 'この文字列をViewに出力します。';
        $this->set('text', $text);
    }

    function testresult(){
        // $text = $_POST['_method'];
        // $this->set('text', $text);

        if (!empty($this->request->data)) {
            //$name変数には「user1」が格納される
            $name = $this->request->data('name');
            $age = $this->request->data('age');
            $from = $this->request->data('from');
            // 以下保存ロジック
            $this->set('name', $name);
            $this->set('age', $age);
            $this->set('from', $from);
        }
    }
}