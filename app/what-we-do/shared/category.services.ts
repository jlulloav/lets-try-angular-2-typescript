import { Injectable } from '@angular/core';

import { Category } from './category.model';
import { CATEGORIES } from './mock-categories';

@Injectable()
export class CategoryServices {
    getCategories() {
        return Promise.resolve(CATEGORIES);
    }
}