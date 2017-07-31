<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Note::class, function (Faker\Generator $faker) {
    $title = $faker->realText(50);
    $body = implode("\n\n", $faker->sentences());
    $func = $faker->word;
    $var = $faker->word;
    $string = $faker->word;
    return [
        'title' => $title,
        'text' => "$body\n\n```javascript\nfunction $func(arg) {\n  let $var = `{$string} \${arg}`\n  return $var; \n}\n```"
    ];
});

