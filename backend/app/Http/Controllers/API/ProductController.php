<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Http\Resources\UserResource;
use App\Models\Produto;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    public function index() {
        $product = Produto::paginate();

        return ProductResource::collection($product);
        // return Produto::all();
    }

    public function store(Request $request) {
        $data = $request->all();

        $product = Produto::create($data);

        return new ProductResource($product);
    }

}
