import React from 'react'

function Card() {
  return (
    <div>
        <div class="max-w-sm bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
  <img class="w-full h-48 object-cover" src="https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg" alt="Card Cover" />

  <div class="p-5">
    <span class="inline-block px-2 py-1 mb-3 text-xs font-semibold tracking-wide text-blue-600 uppercase bg-blue-100 rounded-full">
      Technology
    </span>

    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
      Modern Web Design
    </h5>

    <p class="mb-4 font-normal text-gray-600 leading-relaxed">
      Learn how to build beautiful, responsive interfaces using Tailwind CSS and modern design principles.
    </p>

    <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300">
      Read more
      <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </a>
  </div>
</div>
      </div>
  )
}

export default Card

//now i can import the card i created anywhere 
