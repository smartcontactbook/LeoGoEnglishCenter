<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TableChildren extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('children', function (Blueprint $table) {
            $table->string('Children_ID');
            $table->string('Description');
            $table->string('First_Name');
            $table->string('Last_Name');
            $table->string('Email');
            $table->string('Birth_Day');
            $table->string('Phone_Number');
            $table->tinyint('Gender');
            $table->string('Address');
            $table->primary('Children_ID');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('children');
    }
}
