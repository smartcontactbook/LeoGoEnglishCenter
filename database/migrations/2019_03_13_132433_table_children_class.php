<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TableChildrenClass extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('children_class', function (Blueprint $table) {
            $table->string('Children_Class_ID');
            $table->string('Children_ID');
            $table->string('Class_ID');
            $table->primary('Children_Class_ID');
            $table->foreign('Children_ID')->references('Children_ID')->on('children');
            $table->foreign('Class_ID')->references('Class_ID')->on('class');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('children_class');
    }
}
