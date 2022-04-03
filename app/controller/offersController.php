<?php 

namespace app\app\controllers;

use app\app\models\Book;
use app\app\models\Category;

class OffersController extends Controller{
 
    public function create(){
        $books=new Book();
        $categories=new Category();
        $allCategoires=$categories->getAll();
        $allbooks=$books->getAll();
        $viewConent=array('books'=>$allbooks,'categories'=>$allCategoires);
        $this->view('add_offer',$viewConent);
    }

    public function store(){
        if(isset($_POST['selected_books'])){
            $books=implode(",",$_POST['selected_boos']);

        }
        print_r($_POST);
    }
}
?>