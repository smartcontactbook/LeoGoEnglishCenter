<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class lecturer_account extends Model
{
  	protected $table='table_lecturer_account';
    protected $guarded= [];

    public function lecturer()
    {
    	return $this->belongsTo('app\providers\lecturer');
    }
}
