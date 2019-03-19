<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class course extends Model
{
    protected $table='table_course';
    protected $guarded= [];

    public function lesson()
    {
    	return $this->hasMany('app\providers\lesson');
    }

    public function class()
    {
    	return $this->hasMany('app\providers\class');
    }

    public function level()
    {
    	return $this->belongsTo('app\providers\level');
    }
}
