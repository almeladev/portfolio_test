import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { IndexComponent } from './index/index.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, BlogRoutingModule, MarkdownModule.forChild()],
})
export class BlogModule {}
