<?php

namespace app\app\controllers;

class CustomPagesController extends Controller{

    public function notFound (){
        $this->view('404');

    }

    public function notAuthroized(){
        
    }
    public function detals()
    {
        $this->view('details');
    }

    public function category()
    {
        $this->view('category');
    }
}
?>