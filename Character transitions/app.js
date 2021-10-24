// detects if document is loaded
document.addEventListener("DOMContentLoaded", (event) => {
  const speech = `Wake up to reality! Nothing ever goes as planned in this accursed world._S3P@R@T0R_ 
                  The longer you live, the more you realize that the only thing that truly_S3P@R@T0R_ 
                  exist in this reality are merely pain, suffering and futility. Listen , _S3P@R@T0R_
                  everywhere your look in this world, wherever there is light, there will _S3P@R@T0R_
                  always be shadows to be found as well. As long as the concept of _S3P@R@T0R_
                  victors,the vanquished will also exist. The selfish intent of wanting to_S3P@R@T0R_ 
                  love.There are nexuses, casual relationships that cannot be separated _S3P@R@T0R_
                  preserve peace, initiates wars and hatred is born in order to protect _S3P@R@T0R_
                  `;
  const heading = "The Ghost Of Uchiha";

  // Breaking the string into spans  of character
  const quote = document.querySelector(".madaraQuote");
  const newSpeech = speech.split("_S3P@R@T0R_").map((e) => {
    let x = e
      .split("")
      .map((ele) =>
        ele !== " "
          ? `<span class="pPieces">${ele}</span>`
          : `<span class="pPieces">${ele}</span>`
      );
    x.unshift("<span class='p_parent'>");
    x.push("</span>");
    return x.join("");
  });

  quote.innerHTML = newSpeech.join(" ");
  const headingTag = document.querySelector(".section_1 h1");
  headingTag.innerHTML = heading
    .split("")
    .map((e) =>
      e !== " "
        ? `<span class="hPieces">${e}</span>`
        : `<span class="hPieces spaceBetween">${e}</span>`
    )
    .join("");

  // Selecting all the spans of heading
  const selectHeader = document.querySelectorAll(".hPieces");
  /**
   * This function animates all the spans of .heading class
   * @function headerAnimation
   * @param {HTMLElement} span
   * @param {Number} delay
   */
  const headerAnimation = (span, delay) => {
    const animateHeading = (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.transitionDelay = `${delay}s`;
          e.target.style.transform = "scale(0.9)";
        }
        // else {
        //   e.target.style.transitionDelay = `0s`;
        //   e.target.style.transform = "scale(0)";
        // }
      });
    };
    const observer = new IntersectionObserver(animateHeading, {
      rootMargin: "-2px",
    });
    observer.observe(span);
  };
  // Initial delay for first span
  let delay = 0.22;
  // Looping through all spans and running headerAnimation function for each
  Array.from(selectHeader).forEach((span) => {
    headerAnimation(span, delay);
    delay += 0.12;
  });

  // Selecting all the spans of p tag
  const selectMadaraQuotes = document.querySelectorAll(".p_parent");
  /**
   * This function animates all the spans of .madaraQuote class
   * @function paraAnimation
   * @param {HTMLElement} span
   * @param {Number} delay
   */
  const paraAnimation = (span) => {
    const animateHeading = (entries) => {
      entries.forEach((e) => {
        // console.log(Array.from(e.target));
        console.log(e.target.childNodes);
        if (e.isIntersecting) {
          //   e.target.style.transitionDelay = `${delay}s`;
          let delay = 0.02;
          Array.from(e.target.childNodes).forEach((element) => {
            element.style.transitionDelay = `${delay}s`;
            element.style.transform = "translateY(0px)";
            element.style.opacity = "1";
            delay += 0.02;
          });
        } else {
          Array.from(e.target.childNodes).forEach((element) => {
            element.style.transitionDelay = `0s`;
            element.style.transform = "translateY(20px)";
            element.style.opacity = "0";
          });
        }
      });
    };
    const observer = new IntersectionObserver(animateHeading, {
      rootMargin: "-2px",
    });
    observer.observe(span);
  };
  let pDelay = 0.02;
  paraAnimation(Array.from(selectMadaraQuotes)[0], delay);

  Array.from(selectMadaraQuotes).forEach((span) => {
    // console.log(span);
    paraAnimation(span);
    // pDelay += 0.12;
  });
});
