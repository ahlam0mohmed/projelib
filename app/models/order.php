<?php

namespace app\app\models;

class Order extends Model{
    function __construct()
    {

        parent::$tblName="order_details";
    }
}
?>