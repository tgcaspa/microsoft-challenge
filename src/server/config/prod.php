<?php

// configure your app for the production environment

use Silex\Provider\DoctrineServiceProvider;

// Setup DB connection
require_once __DIR__ . '/db.inc.php';
global $db_config;
$app->register(new DoctrineServiceProvider(), array(
    'db.options' => array(
        'driver'        => 'pdo_mysql',
        'user'          => $db_config['user'],
        'password'      => $db_config['password'],
        'host'          => $db_config['host'],
        'dbname'        => $db_config['dbname'],
        'port'          => $db_config['port'],
        'charset'       => 'utf8',
        'driverOptions' => array(
            1002 => 'SET NAMES utf8',
        ),
    ),
));