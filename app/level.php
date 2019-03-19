<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class level extends Model
{
    protected $table='table_level';
    protected $guarded= [];

    public function course()
    {
    	return $this->hadMany('app\providers\course');
    }
}
