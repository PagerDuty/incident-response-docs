// Rather than downloading every single slide, try to be nice to users and lazy load the images
// instead. This will only work if they have JavaScript enabled of course. The site should still
// function correctly for those without JavaScript.

// Returns true if *any* part of an element is in view on the page.
function inView(el)
{
  if (el instanceof jQuery) { el = el[0]; }

  var r, html;
  if ( !el || 1 !== el.nodeType ) { return false; }
  html = document.documentElement;
  r = el.getBoundingClientRect();

  return ( !!r
    && r.bottom >= 0
    && r.right >= 0
    && r.top <= html.clientHeight
    && r.left <= html.clientWidth
  );
}

// TODO: Implement this without jQuery. No need to load a 100k library for this.
$(function()
{
  // Add event handler to fade in images once they're loaded so it's not so jarring.
  // Transition is controlled via CSS classes "hidden" and "loaded".
  $(".article img").one("load", function()
  {
    $(this).parent().removeClass("hidden").addClass("loaded");
  });

  // Loop over every image/slide in the article.
  $(".article img").each(function()
  {
    // If the image is already loaded (i.e. was cached in browser), show it immediately.
    if (this.complete)
    {
      $(this).addClass("loaded");
    }
    // If the image hasn't already loaded.
    else
    {
      // Add CSS class to hide the image from view while loading.
      $(this).parent().addClass("hidden");

      // Remove the "src" attribute on images to stop them loading over the network. Keep the value
      // in "data-src" so we can retrieve it later.
      $(this).attr("data-src", $(this).attr("src")).removeAttr("src");
    }
  });

  // As page scrolls/resizes, check for images within viewable area.
  $(window).on("scroll resize load", function()
  {
    $(".article img").each(function()
    {
      // If it's in view, and hasn't been triggered to load yet.
      if (inView($(this)) && !$(this).attr("src"))
      {
        $(this).attr("src", $(this).attr("data-src")); // Swap back into "src" to load the image.
      }
    });
  });
});
