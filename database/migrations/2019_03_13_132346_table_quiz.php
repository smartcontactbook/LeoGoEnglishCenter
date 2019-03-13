<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TableQuiz extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quiz', function (Blueprint $table) {
            $table->string('Quiz_ID');
            $table->string('Title');
            $table->integer('Correct');
            $table->integer('Wrong');
            $table->integer('Total');
            $table->bigint('Time_Test');
            $table->text('Intro');
            $table->string('Tag');
            $table->date('Date_Test');
            $table->string('Tutor_ID');
            $table->string('Lesson_ID');
            $table->primary('Quiz_ID');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('quiz');
    }
}
