<?php
namespace app\app\controllers;

use app\app\system\AppSystem;
use app\app\system\Request;
use app\app\system\Router;

class Controller{

   function view($viewName,$params=[]){
       AppSystem::$appSystem->router->view($viewName,$params);
   }

}
?>