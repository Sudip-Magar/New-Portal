import React from 'react'

function Footer() {
  return (
    <footer class="bg-violet-700 text-gray-300 py-8">
        
  <div class="container mx-auto px-4">
  <h2 className='text-3xl pb-7'>SKS News</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h5 class="text-lg font-semibold text-white mb-4">About Us</h5>
        <p class="text-sm">
          Stay updated with the latest news and stories from around the world. Your trusted source for reliable and breaking news.
        </p>
      </div>
      <div>
        <h5 class="text-lg font-semibold text-white mb-4">Quick Links</h5>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-white">Home</a></li>
          <li><a href="#" class="hover:text-white">Entertainment</a></li>
          <li><a href="#" class="hover:text-white">Technology</a></li>
          <li><a href="#" class="hover:text-white">Sports</a></li>
          <li><a href="#" class="hover:text-white">Health</a></li>
        </ul>
      </div>
      <div>
        <h5 class="text-lg font-semibold text-white mb-4">Contact Us</h5>
        <p class="text-sm">Email: info@SKSNewsPortal.com</p>
        <p class="text-sm">Phone: +977-1-42200103</p>
        <p class="text-sm">Address: teku, kalimati</p>
      </div>
    </div>

    <div class="mt-8 text-center">
      <p class="text-sm">&copy; 2024 NewsPortal. All Rights Reserved.</p>
    </div>
  </div>
</footer>

  )
}

export default Footer
