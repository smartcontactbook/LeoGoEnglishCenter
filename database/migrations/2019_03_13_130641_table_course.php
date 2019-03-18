<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TableCourse extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('course', function (Blueprint $table) {
            $table->string('Course_ID');
            $table->string('Course_Name');
            $table->string('Description');
            $table->integer('Term');
            $table->string('Level_ID');
            $table->primary('Course_ID');
            $table->foreign('Level_ID')->references('Level_ID')->on('level');
            //$table->foreign('Level_ID')->references('Level_ID')->on('level');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('course');
    }
}
