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
            $table->primary('Class_ID');
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
