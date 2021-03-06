<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TablePayment extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment', function (Blueprint $table) {
            $table->string('Payment_ID');
            $table->date('Payment_Date');
            $table->float('Amount');
            $table->string('Payment_Method_ID');
            $table->string('Children_ID');
            $table->string('Class_ID');
            $table->string('Status');
            $table->primary('Payment_ID');
            $table->foreign('Payment_Method_ID')->references('Payment_Method_ID')->on('payment_method');
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
        Schema::dropIfExists('payment');
    }
}
