<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TableStaff extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('staff', function (Blueprint $table) {
            $table->string('Staff_ID');
            $table->string('Description');
            $table->string('First_Name');
            $table->string('Last_Name');
            $table->string('Email');
            $table->string('Birth_Day');
            $table->string('Phone_Number');
            $table->tinyint('Gender');
            $table->string('Address');
            $table->primary('Staff_ID');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('staff');
    }
}
