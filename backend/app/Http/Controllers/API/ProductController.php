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

    public function destroy($id)
    {
        $product = Produto::findOrFail($id);
        $product->delete();
        return response()->json(['message' => 'Produto excluído com sucesso']);
    }

    public function update(Request $request, $id) {
        $product = Produto::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }
    
        $data = $request->all();
    
        $product->update($data);
    
        return new ProductResource($product);
    }

}
