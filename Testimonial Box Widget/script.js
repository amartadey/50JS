const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".roles-");

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Marketing",
    photo: "https://randomuser.me/api/portraits/women/46.jpg",
    test:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ullam, repellendus perferendis unde dignissimos id omnis quasi dicta quibusdam odio ab obcaecati at in, culpa doloremque qui saepe distinctio iusto odit quo eum natus voluptatibus? Aut magni rerum repudiandae laudantium earum illo necessitatibus sequi, vel nulla, doloremque, molestiae repellat. Accusamus.",
  },
  {
    name: "John Chu",
    position: "Sales",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
    test:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ullam, repellendus perferendis unde dignissimos id omnis quasi dicta quibusdam odio ab obcaecati at in, culpa doloremque qui saepe distinctio iusto odit quo eum natus voluptatibus? Aut magni rerum repudiandae laudantium earum illo necessitatibus sequi, vel nulla, doloremque, molestiae repellat. Accusamus.",
  },
  {
    name: "Radha Ghosh",
    position: "SEO",
    photo: "https://randomuser.me/api/portraits/women/30.jpg",
    test:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ullam, repellendus perferendis unde dignissimos id omnis quasi dicta quibusdam odio ab obcaecati at in, culpa doloremque qui saepe distinctio iusto odit quo eum natus voluptatibus? Aut magni rerum repudiandae laudantium earum illo necessitatibus sequi, vel nulla, doloremque, molestiae repellat. Accusamus.",
  },
  {
    name: "Samar Dhali",
    position: "Designer",
    photo: "https://randomuser.me/api/portraits/men/26.jpg",
    test:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ullam, repellendus perferendis unde dignissimos id omnis quasi dicta quibusdam odio ab obcaecati at in, culpa doloremque qui saepe distinctio iusto odit quo eum natus voluptatibus? Aut magni rerum repudiandae laudantium earum illo necessitatibus sequi, vel nulla, doloremque, molestiae repellat. Accusamus.",
  },
];

let idx = 1;

function updatetestimonial() {
  const { name, position, photo, test } = testimonials[idx];
  testimonial.innerHTML = test;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;
  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updatetestimonial, 10000);
