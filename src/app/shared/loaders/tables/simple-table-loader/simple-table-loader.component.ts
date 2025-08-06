import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'tmr-simple-table-loader',
  imports: [NgFor],
  template: `
    <div role="status" class="animate-pulse flex-col rounded-lg bg-background px-8 py-8 sm:flex-row">
      <!-- Header -->
      <div class="mb-4 flex items-center justify-between">
        <div class="flex-col">
          <div class="mb-2 h-4 w-32 rounded-md bg-gray-200 dark:bg-gray-700"></div>
          <div class="h-3 w-24 rounded-md bg-gray-200 dark:bg-gray-700"></div>
        </div>
        <div class="h-10 w-24 rounded-md bg-gray-200 dark:bg-gray-700"></div>
      </div>

      <div class="relative overflow-x-auto">
        <div class="space-y-3">
          <!-- Table Headers -->
          <div class="flex justify-between text-xs uppercase">
            <div class="h-6 w-20 rounded-md bg-gray-200 dark:bg-gray-700"></div>
            <div class="h-6 w-20 rounded-md bg-gray-200 dark:bg-gray-700"></div>
            <div class="h-6 w-20 rounded-md bg-gray-200 dark:bg-gray-700"></div>
            <div class="h-6 w-20 rounded-md bg-gray-200 dark:bg-gray-700"></div>
            <div class="h-6 w-20 rounded-md bg-gray-200 dark:bg-gray-700"></div>
            <div class="h-6 w-20 rounded-md bg-gray-200 dark:bg-gray-700"></div>
          </div>

          <!-- Table Rows Header -->
          <div class="flex justify-between border-b border-dashed border-border uppercase hover:bg-card">
            <div class="flex items-center">
              <svg
                class="mr-3 h-6 w-6 text-gray-200 dark:text-gray-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div>
                <div class="mb-1 h-3 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div class="h-2 w-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
            </div>
            <div class="my-3 h-6 w-16  rounded-md bg-gray-200 dark:bg-gray-700"></div>
            <div class="my-3 h-6 w-16  rounded-md bg-gray-200 dark:bg-gray-700"></div>
            <div class="my-3 h-6 w-12  rounded-md bg-gray-200 dark:bg-gray-700"></div>
            <div class="my-3 h-6 w-20  rounded-md bg-gray-200 dark:bg-gray-700"></div>
            <div class="my-3 h-6 w-12  rounded-md bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <!-- End Table Rows Header -->

          <!-- Table Rows Body -->
          <div
            *ngFor="let item of items"
            class="flex justify-between border-b border-dashed border-border pb-3 text-xs uppercase hover:bg-card">
            <div class="flex items-center">
              <svg
                class="mr-3 h-6 w-6 text-gray-200 dark:text-gray-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div>
                <div class="mb-1 h-3 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div class="h-2 w-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
            </div>
            <div class="h-6 w-16  rounded-md bg-gray-200 dark:bg-gray-700"></div>
            <div class="h-6 w-16  rounded-md bg-gray-200 dark:bg-gray-700"></div>
            <div class="h-6 w-12  rounded-md bg-gray-200 dark:bg-gray-700"></div>
            <div class="h-6 w-20  rounded-md bg-gray-200 dark:bg-gray-700"></div>
            <div class="h-6 w-12  rounded-md bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <!-- Table Rows End -->
        </div>
      </div>
      <span class="sr-only">Loading...</span>
    </div>
  `,
  styles: ``,
})
export class SimpleTableLoaderComponent {
  items = Array(5).fill(0);
}
