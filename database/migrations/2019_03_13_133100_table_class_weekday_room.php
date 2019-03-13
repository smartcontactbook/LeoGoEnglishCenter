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
            $table->string('Class_ID');
            $table->string('Classroom_ID');
            $table->string('Weekday_ID');
            $table->string('Hours');
            $table->primary('Class_ID');
            $table->primary('Classroom_ID');
            $table->primary('Weekday_ID');
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
