<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TableClass extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('class', function (Blueprint $table) {
            $table->string('Class_ID');
            $table->string('Class_Name');
            $table->date('Start_Date');
            $table->date('End_Date');
            $table->float('Tuition');
            $table->string('Lecturer_ID');
            $table->string('Tutor_ID');
            $table->string('Course_ID');
            $table->time('Time_Start');
            $table->time('Time_end');
            $table->primary('Class_ID');
            $table->foreign('Lecturer_ID')->references('Lecturer_ID')->on('lecturer');
            $table->foreign('Tutor_ID')->references('Tutor_ID')->on('tutor');
            $table->foreign('Course_ID')->references('Course_ID')->on('course');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('class');
    }
}
