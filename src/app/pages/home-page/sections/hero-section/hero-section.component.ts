import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LinksState } from '../../../../state/links';

@Component({
  selector: 'app-home-page-hero-section',
  imports: [NgOptimizedImage],
  template: `
    <!-- Hero Section -->
    <section class="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div class="flex items-center max-w-[760px]">
        <div class="text-left max-w-3xl px-6">
          <!-- Title -->
          <h1 class="text-4xl md:text-6xl font-extrabold text-gray-800">
            Hi, I'm <span class="text-purple-500">Leonardo</span>
          </h1>
          <!-- Subtitle -->
          <p class="mt-4 text-lg md:text-xl text-gray-600 text-balance">
            A Front-End Engineer creating dynamic and user-friendly web applications with full-stack capabilities.
          </p>
        </div>
        <div class="all-in-center rounded-full overflow-clip">
          <div class="rounded-full bg-purple-500 w-64 h-64"></div>
          <div class="rounded-full bg-purple-700 w-40 h-40 mr-4 mb-4"></div>
          <img 
            class="rounded-full"
            ngSrc="/assets/profile.png" 
            width="240" 
            height="240"
            alt="Me"
          />
        </div>
      </div>
      <div class="text-center max-w-3xl px-6">
        <!-- Call-to-action buttons -->
        <div class="mt-8 flex justify-center space-x-4">
          <a [href]="linkedinLink" target="_blank"
            class="border border-purple-500 text-purple-500 py-3 px-6 rounded-lg shadow-md hover:bg-purple-100 focus:ring-4 focus:ring-purple-200 transition">
            Let's Collaborate
          </a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .all-in-center {
      display: grid;
      place-items: end;
      >* {
        grid-row: 1;
        grid-column: 1;
      }
    }
  `
})
export class HeroSectionComponent {
  linkedinLink = inject(LinksState).linkedin
}
