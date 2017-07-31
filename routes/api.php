<?php

use Illuminate\Http\Request;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, PUT, PATCH, DELETE, GET, OPTIONS');

Route::get('/notes', function() {
  return App\Note::all();
});

Route::get('/notes/{note}', function(App\Note $note) {
  return $note;
});


Route::post('/notes/{note}', function(App\Note $note) {
  $note->title = request()->title;
  $note->text = request()->text;
  $note->save();
  return $note;
});
