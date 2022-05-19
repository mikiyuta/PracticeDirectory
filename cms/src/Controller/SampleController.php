<?php

namespace App\Controller;
 
class SampleController extends AppController{
    function test() {
        $text = 'この文字列をViewに出力します。';
        $this->set('text', $text);
    }

    function testresult(){
    }
}