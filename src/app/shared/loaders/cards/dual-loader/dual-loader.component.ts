import { Component, Input } from '@angular/core';
import { IDualCardStyle } from 'src/app/modules/dashboard/models/single-card';

@Component({
    selector: '[tmr-dual-card-loader]',
    imports: [],
    template: `
    <div
      role="status"
      class="flex min-h-[{{
        cardStyle.container.height
      }}]  flex-col rounded-lg bg-background p-8 sm:flex-row animate-pulse">
      <!-- Image -->
      <div class="w-full min-h-[{{ cardStyle.image.height }}]  flex-1 bg-gray-300 rounded-md dark:bg-gray-700"></div>

      <!-- Content -->
      <div class="mt-4 flex flex-1 flex-col justify-between space-y-2 sm:ml-6 md:mt-0">
        <!-- Title -->
        <div>
          <div class="h-4 w-24 bg-gray-200 rounded-md dark:bg-gray-700 mb-2"></div>
          <div class="h-6 w-48 bg-gray-200 rounded-md dark:bg-gray-700"></div>
        </div>

        <div class="flex space-x-8">
          <!-- Avatar -->
          <div class="flex items-center space-x-2">
            <div class="h-7 w-7 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            <div class="flex flex-col space-y-1">
              <div class="h-3 w-20 bg-gray-200 rounded-md dark:bg-gray-700"></div>
              <div class="h-3 w-24 bg-gray-200 rounded-md dark:bg-gray-700"></div>
            </div>
          </div>

          <div class="flex items-center space-x-2">
            <div class="h-7 w-7 flex-shrink-0 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            <div class="flex flex-col space-y-1">
              <div class="h-3 w-16 bg-gray-200 rounded-md dark:bg-gray-700"></div>
              <div class="h-3 w-24 bg-gray-200 rounded-md dark:bg-gray-700"></div>
            </div>
          </div>
        </div>

        <div class="rounded-md border border-dashed border-border p-4 text-center">
          <div class="h-4 w-32 bg-gray-200 rounded-md dark:bg-gray-700 mb-2 mx-auto"></div>
          <div class="h-8 w-48 bg-gray-200 rounded-md dark:bg-gray-700 mb-2 mx-auto"></div>
          <div class="h-4 w-28 bg-gray-200 rounded-md dark:bg-gray-700 mx-auto"></div>
          <div class="mt-3 h-3 w-20 bg-gray-200 rounded-md dark:bg-gray-700 mx-auto"></div>
          <div class="h-3 w-16 bg-gray-200 rounded-md dark:bg-gray-700 mx-auto"></div>
        </div>

        <!-- Buttons -->
        <div class="flex items-center justify-between">
          <div class="h-10 w-24 rounded-md bg-gray-200 dark:bg-gray-700"></div>
          <div class="h-10 w-24 rounded-md bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
      <span class="sr-only">Loading...</span>
    </div>
  `,
    styles: ``
})
export class DualLoaderComponent {
  @Input() cardStyle: IDualCardStyle = {
    container: {
      height: '420px',
      width: '',
    },
    image: {
      height: '240px',
      width: '240px',
    },
  };
}
