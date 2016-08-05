import { Component, OnInit } from '@angular/core';

import { Category } from './shared/category.model';
import { CategoryServices } from './shared/category.services';
import { CapitalizeFirstPipe } from '../pipe/capitalize-first.pipe';

@Component({
    selector: 'wwd-view',
    templateUrl: 'app/what-we-do/what-we-do.component.html',
    providers: [CategoryServices],
    pipes: [CapitalizeFirstPipe]
})
export class WhatWeDo implements OnInit {
    categories: Category[];
    title = "what we do section";
    constructor(private categoryService: CategoryServices) {

    }
    getCategories() {
        this.categoryService.getCategories().then(cat => this.categories = cat);
    }
    ngOnInit() {
        this.getCategories();
    }

}