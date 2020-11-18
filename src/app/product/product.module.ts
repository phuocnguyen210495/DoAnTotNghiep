import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import {SharedModule} from '../shared/shared.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers
  ],
  imports: [
    CommonModule, // dùng cho thằng pipe: json
    ProductRoutingModule,
    SharedModule,
    MatTabsModule,
    MatIconModule,
    FormsModule,
    MatPaginatorModule,

  ],
  exports: [
    fromComponents.AProductListComponent
  ]
})
export class ProductModule { }
