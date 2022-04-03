<?php

namespace app\app\controllers;

use app\app\models\books;

class BooksController extends Controller{

    function listAll(){
        $books=new Book();
        $allBooks=$books->getAll();
        //print_r($allBooks);

        $this->view('list_books',$allBooks);

    }
    function create(){
        $this->view('add_Book');

    }

    function store(){
        print_r($_POST);
        print_r($_FILES);
        $books=new Book();
        
        $books->name=$_POST['book_name'];
        $imageName=$this->uploadFile($_FILES['image']);
        $books->price=

        $books->image=$imageName!=null?$imageName:"default.png";
        $books->created_by=1;
        $books->is_active=$_POST['is_active'];

        $books->save();

    }
    function edit(){
        

    }
    function update(){

    }
    public function remove(){

    }


    public static function uploadFile(array $imageFile): string
    {
        // check images direction
        if (!is_dir(__DIR__ . '/../../public/img')) {
            mkdir(__DIR__ . '/../../public/img');
        }

        if ($imageFile && $imageFile['tmp_name']) {
            $image = explode('.', $imageFile['name']);
            $imageExtension = end($image);

            $imageName = uniqid(). "." . $imageExtension;
            $imagePath =  __DIR__ . '/../../public/img/' . $imageName;

            move_uploaded_file($imageFile['tmp_name'], $imagePath);

            return $imageName;
        }

        return null;
    }

    




}

?>