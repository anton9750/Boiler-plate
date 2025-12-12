{/* <section>
    <figure class="chans">
      <img src="assets/images/image copy 2.png" alt="">
      <figcaption></figcaption>
    </figure>

    <figure class="chans">
      <img src="assets/images/image copy.png" alt="">
      <figcaption></figcaption>
    </figure>

    <figure class="chans">
      <img src="assets/images/image.png" alt="">
      <figcaption></figcaption>
    </figure>

    <div id="prev">
        <button><</button>
    </div>

    <div id="next">
        <button>></button>
    </div>
    <div class="text">
      <h1>our nature</h1>

    </div>
    </section> */}


// dette er hvordan jeg har lavet mit galleri












let indexpos = 0;

const myslides = document.getElementsByClassName('chans');

updateslides();

let previousbutton = document.getElementById('prev');
let nextbutton = document.getElementById('next');

previousbutton.addEventListener('click', () => {
    indexpos--;
    if (indexpos < 0) indexpos = myslides.length - 1;
    updateslides();
});

nextbutton.addEventListener('click', () => {
    indexpos++;
    if (indexpos > myslides.length - 1) indexpos = 0;
    updateslides();
});

function updateslides() {
 
    for (let i = 0; i < myslides.length; i++) {
        myslides[i].classList.remove('active');
    }


    myslides[indexpos].classList.add('active');

    console.log("vis slide " + indexpos);
}

