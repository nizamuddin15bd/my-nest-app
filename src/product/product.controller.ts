import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service.js';
import { AuthGuard } from '../guards/auth/auth.guard.js';

@Controller('product')
export class ProductController {
  //   private readonly productService: ProductService;

  //   constructor(productService: ProductService) {
  //     this.productService = productService;
  //   }
  constructor(private readonly productService: ProductService) {}
  @Get()
  @UseGuards(AuthGuard)
  getProducts() {
    return this.productService.getAllProducts();
  }
  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productService.getProductById(Number(id));
  }
}
