// cycles through the relationship plots when you click the button
const plots = [
  {
    title: "G3 by studytime",
    img: "images/g3_studytime.png",
    caption: "Students who report higher studytime seem to have slightly higher median grades."
  },
  {
    title: "Absences vs G3",
    img: "images/g3_absences.png",
    caption: "There’s a general negative trend: more absences tends to go with lower grades."
  },
  {
    title: "G3 by internet access and subject",
    img: "images/g3_internet_subject.png",
    caption: "Internet access seems linked to slightly higher grades, and Portuguese looks a bit higher overall."
  }
];

let plotIndex = 0;

const titleEl = document.getElementById("relationship-title");
const imgEl = document.getElementById("relationship-img");
const captionEl = document.getElementById("relationship-caption");
const btn = document.getElementById("nextPlotBtn");

btn.addEventListener("click", () => {
  plotIndex = (plotIndex + 1) % plots.length;

  titleEl.textContent = plots[plotIndex].title;
  imgEl.src = plots[plotIndex].img;
  captionEl.textContent = plots[plotIndex].caption;
});
