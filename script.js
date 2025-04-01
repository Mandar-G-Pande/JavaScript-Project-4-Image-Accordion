

const items = document.querySelectorAll(".item");
let imageURLs = [
  "LIme.png",
  "Strawberry.png",
  "Blackberry.png",
  "Orange.png",
];

//initially empty
let deviceType = "";
let events = {
  mouse: {
    start: "mouseover",
    end: "mouseout",
  },
  touch: {
    start: "touchstart",
    end: "touchend",
  },
};

const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

isTouchDevice();

items.forEach((item, index) => {
  let img = document.createElement("img");
  img.setAttribute("src", imageURLs[index]);
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";
  item.appendChild(img);

  //Initial CSS properties for all items
  item.style.flex = "1";
  item.style.transition = "flex 0.8s ease";

  item.addEventListener(events[deviceType].start, () => {
    item.style.flex = "9"; //Expand the item
  });
  item.addEventListener(events[deviceType].end, () => {
    item.style.flex = "1"; //Contract the item
  });
});


gsap.to("#text-animation h1", {
  transform: "translateX(-156%)",
  scrollTrigger: {
      trigger: "#text-animation",
      scroller: "body",
      start: "top 0%",
      end: "top -150%", // Fixed: added '%' to the end value
      scrub: 2,
      pin: true,
  }
});
