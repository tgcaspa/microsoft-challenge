<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

$app->get('/api/contacts', function () use ($app) {
    try {
        $results = $app['db']->createQueryBuilder()
            ->select('name', 'phone')
            ->from('contacts')
            ->orderBy('name', 'ASC')
            ->execute()
            ->fetchAll();
        // returns as success data
        return $app->json($results, Response::HTTP_OK);
    } catch (Exception $e) {
        // returns as error data
        return $app->json($e->getMessage(), $e->getCode());
    }
});

$app->post('/api/contact', function (Request $request) use ($app) {
    $data = json_decode($request->getContent(), true);
    try {
        if(empty($data['name']) || empty($data['phone']) || !is_numeric($data['phone'])) {
            throw new InvalidArgumentException(
                "Invalid data were specified.",
                Response::HTTP_BAD_REQUEST
            );
        }

        $qb = $app['db']->createQueryBuilder();
        $qb->insert('contacts')
           ->values([
               'name'  => '?',
               'phone' => '?'
           ])
           ->setParameter(0, $data['name'])
           ->setParameter(1, $data['phone'])
           ->execute();

        // returns as success data
        return $app->json((int)$app['db']->lastInsertId(), Response::HTTP_OK);
    } catch (Exception $e) {
        // returns as error data
        return $app->json($e->getMessage(), $e->getCode());
    }
});

$app->error(function (\Exception $e, Request $request, $code) use ($app) {
    if ($app['debug']) return;

    switch($code) {
        case 404:
            $message = "No route found";
            break;
        default:
            $message = $e->getMessage();
            break;
    }
    return $app->json($message, $code);
});
