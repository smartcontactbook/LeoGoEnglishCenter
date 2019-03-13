<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TableTutor extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tutor', function (Blueprint $table) {
            $table->string('Tutor_ID');
            $table->string('Description');
            $table->string('First_Name');
            $table->string('Last_Name');
            $table->string('Email');
            $table->string('Birth_Day');
            $table->string('Phone_Number');
            $table->tinyint('Gender');
            $table->string('Address');
            $table->primary('Tutor_ID');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tutor');
    }
}
