import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  posts = [
    {
      id: 'cfd-001',
      title: 'Introduction to CFD with OpenFOAM',
      content: `
# Introduction

CFD is used to simulate fluid motion by solving Navier-Stokes equations:

$$
\\nabla \\cdot \\vec{u} = 0, \\quad \\rho\\left(\\frac{\\partial \\vec{u}}{\\partial t} + \\vec{u} \\cdot \\nabla \\vec{u}\\right) = -\\nabla p + \\mu \\nabla^2 \\vec{u}
$$

We use OpenFOAM for simulating incompressible flows.

\`\`\`bash
blockMesh
simpleFoam
\`\`\`
      `,
      author: 'Antony Premkumar',
      date: '2025-07-24'
    }
  ];

  getPosts() {
    return this.posts;
  }

  getPostById(id: string) {
    return this.posts.find(p => p.id === id);
  }
}
