<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TableClassWeekdayRoom extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('class_weekday_room', function (Blueprint $table) {
            $table->increments('ID');
            $table->string('Class_ID');
            $table->string('Classroom_ID');
            $table->string('Weekday_ID1');
            $table->string('Weekday_ID2');
            // $table->integer('Hours');
            // $table->time('Time_Start');
            // $table->time('Time_End');
            $table->foreign('Class_ID')->references('Class_ID')->on('class');
            $table->foreign('Classroom_ID')->references('Classroom_ID')->on('class_room');
            $table->foreign('Weekday_ID1')->references('Weekday_ID')->on('weekday');
            $table->foreign('Weekday_ID2')->references('Weekday_ID')->on('weekday');
         //   $table->primary('ID');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('class_weekday_room');
    }
}
