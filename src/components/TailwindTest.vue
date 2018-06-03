<template>
  <article class="container mx-auto px-4 font-serif text-grey-darkest leading-normal text-left">

    <div>
      <img class='img-90' src="https://web-und-die-welt.de/wp-content/uploads/2017/05/javascript-promise.png">
    </div>
    <header class="max-w-lg mx-auto my-8 text-center font-sans">
      <h1 class="font-medium">Einführung in JavaScript Promises</h1>
      <small class="text-grey">04/18, 2018 // JavaScript</small>
    </header>

    <main>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
        et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
      <h2>More content</h2>
      <p>
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
        facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis
        dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer dipiscing elit, sed diam nonummy nibh
        euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      </p>
      <h3>Deeper information</h3>
      <p>
        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat
        nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
        duis dolore te feugait nulla facilisi.
      </p>
      <h2>Finally</h2>
      <p>
        Ora et labora, pero sin ora. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
        ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
        consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
        praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
      </p>
    </main>
    <!-- <footer class='max-w-md mx-auto mt-16 py-16 border-t border-grey-light'>
      <div>
        <img src="https://secure.gravatar.com/avatar/78a9f39fcc745c86093d30b7984be06f?s=120&d=mm&r=g" alt="Rathes">
      </div>
      <div>
        <h2>Rathes Sachchithananthan</h2>
        <p>
          Soy un desarrollador web especializado en Laravel y VueJs que vive en Alemania. Sígueme en
          <a href="https://twitter.com/rswebdesigner">Twitter</a> y en
          <a href="https://github.com/rathesDot">
            GitHub</a>
        </p>
      </div>
    </footer> -->
    <!-- <footer class="lg:flex items-center w-1/2 mx-auto m-8 p-4 border border-grey-light">
      <div class="text-center">
        <img class="m-8" src="https://secure.gravatar.com/avatar/78a9f39fcc745c86093d30b7984be06f?s=120&d=mm&r=g" alt="Rathes">

      </div>
      <div class="text-center">
        <h2 class='mt-2'>Rathes Sachchithananthan</h2>
        <p class="m-8"> Soy un desarrollador web especializado en Laravel y VueJs que vive en Alemania. Sígueme en
          <a href="#">Twitter</a> y en
          <a href="#">GitHub</a>
        </p>
      </div>
    </footer> -->

    <div class="card-grid">
      <div class="card m-4">
        <img class="card-image" src="https://tailwindcss.com/img/card-top.jpg">
        <div class="card-content">
          <!-- Card Content -->
          <div class="card-heading">The Coldest Sunset</div>
          <p class="text-grey-darker text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
            praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="badge mr-2">#photography</span>
          <span class="badge mr-2">#travel</span>
          <span class="badge">#winter</span>
        </div>
      </div>
      <div class="card m-4">
        <img class="card-image" src="https://tailwindcss.com/img/card-top.jpg">
        <div class="card-content">
          <!-- Card Content -->
          <div class="card-heading">The Coldest Sunset</div>
          <p class="text-grey-darker text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
            praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="badge mr-2">#photography</span>
          <span class="badge mr-2">#travel</span>
          <span class="badge">#winter</span>
        </div>
      </div>
      <!-- <div class="rounded overflow-hidden shadow-lg m-4 flex-1 w-1/4"> -->
       <div class="card m-4">
        <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
        <!-- Card Content -->
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-grey-darker text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
            praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#photography</span>
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>
        </div>
      </div>

    </div>
    <footer class='md:flex border-t border-grey pin-b max-w-md mx-auto mt-16 py-16'>
      <div class="text-center">
        <img class="m-8 img-round" src="https://secure.gravatar.com/avatar/78a9f39fcc745c86093d30b7984be06f?s=120&d=mm&r=g" alt="Rathes">
      </div>
      <div class="text-center">
        <h2 class='mt-2'>Rathes Sachchithananthan</h2>
        <p class="m-8 px-2"> Soy un desarrollador web especializado en Laravel y VueJs que vive en Alemania. Sígueme en
          <a href="#">Twitter</a> y en
          <a href="#">GitHub</a>
        </p>
      </div>
    </footer>
  </article>
</template>

<script>
export default {
  name: 'TailwindTest'
}
</script>

<style>

</style>
