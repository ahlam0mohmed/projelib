<?php
require_once __DIR__ . '/../vendor/autoload.php';

use app\app\controllers\AuthorsController;
use app\app\controllers\CategoriesController;
use app\app\controllers\BoksController;
use app\app\controllers\CustomPagesController;
use app\app\controllers\Login;
use app\app\controllers\OffersController;
use app\app\controllers\OrderController;
use app\app\controllers\PublishersController;
use app\app\system\AppSystem;
use app\app\system\Router;
use app\app\controllers\UsersController;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(dirname(__DIR__));//createImmutable(__DIR__);
$dotenv->load();

$config=array(
  'servername'=>$_ENV['DB_SERVER_NAME'],
  'dbname'=>$_ENV['DB_NAME'],
  'dbpass'=>$_ENV['DB_PASSWORD'],
  'username'=>$_ENV['DB_USERNAME']

);
$system=new AppSystem($config);

/** web routes  */
/**pages routes */
Router::get('/error',[CustomPagesController::class,'notFound']);
Router::get('/detal',[CustomPagesController::class,'detals']);
Router::get('/category',[CustomPagesController::class,'category']);

/**category routes */
Router::get('/categories',[CategoriesController::class,'listAll']);
Router::get('/add_category',[CategoriesController::class,'create']);
Router::get('/edit_category/{id}',[CategoriesController::class,'edit']);
Router::get('/remove_category',[CategoriesController::class,'remove']);
Router::post('/save_category',[CategoriesController::class,'store']);
Router::post('/update_category',[CategoriesController::class,'update']);
 
/**book routes */
Router::get('/books',[booksController::class,'listAll']);
Router::get('/add_book',[booksController::class,'create']);
Router::get('/edit_book/{id}',[booksController::class,'edit']);
Router::get('/remove_book',[booksController::class,'remove']);
Router::post('/save_book',[booksController::class,'store']);
Router::post('/update_book',[booksController::class,'update']);

/** offer routes  */
Router::get('/offers',[OffersController::class,'listAll']);
Router::get('/add_offer',[OffersController::class,'create']);
Router::get('/edit_offer/{id}',[OffersController::class,'edit']);
Router::get('/remove_offer/{id}/{name}',[OffersController::class,'remove']);
Router::post('/save_offer',[OffersController::class,'store']);
Router::post('/update_offer',[OffersController::class,'update']);


/**user routes */
Router::get('/new_user',[UsersController::class.'newUser']);

/** end of web routes */



$system->start();

