<?php

namespace App\Controller;

use Cake\Http\Client;

class TopController extends AppController {
    public function index() {
        echo "aaaaaaaaa" . "\n";

        $id = $this->getParam( "id" );
        $url = $this->getParam( "url" );
        $domain = $this->getParam( "domain" );
        $assetsPath = "https://" . $domain . "/assets";
        echo "bbbbbbbbb" . "\n";

        $option = array (
            "headers" => [
                'sugotoku'   => $id ,
            ]
        );
        echo "cccccccccc" . "\n";
        $response = $this->getHttp( $url , $option );
        echo "ddddddddd" . "\n";
        $body = str_replace("/assets", $assetsPath , $response->body() );
        

        $this->set( 'id', $id );
        $this->set( 'contentBody', $body );
        $this->set( 'domain', $domain );
        echo "eeeeeeeee" . "\n";
    }

    function getParam( $parameterName ) {
        $value = "";
        if (isset($_POST[ $parameterName ])){
            // post でパラメータを取得
            $value = $this->request->getData( $parameterName );
        } else {
            // get でも確認
            $value = $this->request->getQuery( $parameterName );
            if( $value == null ) {
                $value = "";
            }
        }
        return $value;
    }

    function getHttp( $url , $option ) {
        $client = new Client();
        $response = $client->get( $url , [], $option );
        return $response;
    }
    function postHttp( $url , $parameters , $option ) {
        $client = new Client();
        $response = $client->post( $url , $parameters , $option );
        return $response;
    }

}
