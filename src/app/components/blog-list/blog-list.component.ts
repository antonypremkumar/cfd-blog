import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html'
})
export class BlogListComponent {
  posts = this.blogService.getPosts();

  constructor(private blogService: BlogService, private router: Router) {}

  openPost(id: string) {
    this.router.navigate(['/blog', id]);
  }
}
