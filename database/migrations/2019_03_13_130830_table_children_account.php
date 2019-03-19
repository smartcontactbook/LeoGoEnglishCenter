<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TableChildrenAccount extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('children_account', function (Blueprint $table) {
            $table->string('User_Name');
            $table->string('Password');
            $table->string('Children_ID');
            $table->primary('User_Name');
            $table->foreign('Children_ID')->references('Children_ID')->on('children');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('children_account');
    }
}
