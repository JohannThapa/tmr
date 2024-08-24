import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'tmr-simple-table-loader',
  standalone: true,
  imports: [NgFor],
  template: `
    <div role="status" class="flex-col rounded-lg bg-background px-8 py-8 sm:flex-row animate-pulse">
      <!-- Header -->
      <div class="mb-4 flex items-center justify-between">
        <div class="flex-col">
          <div class="h-4 w-32 bg-gray-200 rounded-md dark:bg-gray-700 mb-2"></div>
          <div class="h-3 w-24 bg-gray-200 rounded-md dark:bg-gray-700"></div>
        </div>
        <div class="h-10 w-24 rounded-md bg-gray-200 dark:bg-gray-700"></div>
      </div>

      <div class="relative overflow-x-auto">
        <div class="space-y-3">
          <!-- Table Headers -->
          <div class="flex justify-between text-xs uppercase">
            <div class="h-6 w-20 bg-gray-200 rounded-md dark:bg-gray-700"></div>
            <div class="h-6 w-20 bg-gray-200 rounded-md dark:bg-gray-700"></div>
            <div class="h-6 w-20 bg-gray-200 rounded-md dark:bg-gray-700"></div>
            <div class="h-6 w-20 bg-gray-200 rounded-md dark:bg-gray-700"></div>
            <div class="h-6 w-20 bg-gray-200 rounded-md dark:bg-gray-700"></div>
            <div class="h-6 w-20 bg-gray-200 rounded-md dark:bg-gray-700"></div>
          </div>

          <!-- Table Rows Header -->
          <div class="flex justify-between uppercase border-b border-dashed border-border hover:bg-card">
            <div class="flex items-center">
              <svg
                class="w-6 h-6 mr-3 text-gray-200 dark:text-gray-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div>
                <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-10 mb-1"></div>
                <div class="w-12 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
            </div>
            <div class="h-6 w-16 my-3  bg-gray-200 rounded-md dark:bg-gray-700"></div>
            <div class="h-6 w-16 my-3  bg-gray-200 rounded-md dark:bg-gray-700"></div>
            <div class="h-6 w-12 my-3  bg-gray-200 rounded-md dark:bg-gray-700"></div>
            <div class="h-6 w-20 my-3  bg-gray-200 rounded-md dark:bg-gray-700"></div>
            <div class="h-6 w-12 my-3  bg-gray-200 rounded-md dark:bg-gray-700"></div>
          </div>
          <!-- End Table Rows Header -->

          <!-- Table Rows Body -->
          <div
            *ngFor="let item of items"
            class="flex justify-between text-xs uppercase border-b border-dashed border-border hover:bg-card pb-3">
            <div class="flex items-center">
              <svg
                class="w-6 h-6 mr-3 text-gray-200 dark:text-gray-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div>
                <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-10 mb-1"></div>
                <div class="w-12 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
            </div>
            <div class="h-6 w-16  bg-gray-200 rounded-md dark:bg-gray-700"></div>
            <div class="h-6 w-16  bg-gray-200 rounded-md dark:bg-gray-700"></div>
            <div class="h-6 w-12  bg-gray-200 rounded-md dark:bg-gray-700"></div>
            <div class="h-6 w-20  bg-gray-200 rounded-md dark:bg-gray-700"></div>
            <div class="h-6 w-12  bg-gray-200 rounded-md dark:bg-gray-700"></div>
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
