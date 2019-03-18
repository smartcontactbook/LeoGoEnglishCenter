<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class lecturer extends Model
{
    protected $table='table_lecturer';
    protected $guarded= [];

    public function lecturer_account()
    {
    	return $this->hasOne('app\providers\lecturer_account');
    }

    public function class()
    {
    	return $this->hasMany('app\providers\class');
    }
}
