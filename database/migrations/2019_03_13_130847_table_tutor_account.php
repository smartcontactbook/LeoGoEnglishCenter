<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TableTutorAccount extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tutor_account', function (Blueprint $table) {
            $table->string('User_Name');
            $table->string('Password');
            $table->string('Tutor_ID');
            $table->primary('User_Name');
            $table->foreign('Tutor_ID')->references('Tutor_ID')->on('tutor');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tutor_account');
    }
}
