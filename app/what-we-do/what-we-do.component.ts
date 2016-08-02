import { Component, OnInit } from '@angular/core';

import { Category } from './shared/category.model';
import { CategoryServices } from './shared/category.services';

@Component({
    selector: 'wwd-view',
    templateUrl: 'app/what-we-do/what-we-do.component.html',
    providers: [CategoryServices]
})
export class WhatWeDo implements OnInit {
    categories: Category[];
    title = "What we do section";
    constructor(private categoryService: CategoryServices) {

    }
    getCategories() {
        this.categoryService.getCategories().then(cat => this.categories = cat);
    }
    ngOnInit() {
        this.getCategories();
    }

}