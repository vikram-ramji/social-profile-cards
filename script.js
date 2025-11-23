const users = [
  {
    id: 1,
    fullName: "Sarah Johnson",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    profession: "Software Engineer",
    description:
      "Experienced full-stack developer passionate about building scalable web applications and open-source software.",
  },
  {
    id: 2,
    fullName: "Michael Chen",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    profession: "Graphic Designer",
    description:
      "Creative designer specializing in branding, UI/UX, and digital illustration with a keen eye for detail.",
  },
  {
    id: 3,
    fullName: "Emily Davis",
    image:
      "https://plus.unsplash.com/premium_photo-1669740216129-f14d50a3d823?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Content Writer",
    description:
      "Versatile writer creating engaging content for blogs, websites, and social media campaigns across various industries.",
  },
  {
    id: 4,
    fullName: "Jessica Garcia",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Project Manager",
    description:
      "Organized leader with a track record of delivering complex projects on time and within budget, fostering team collaboration.",
  },
];

const main = document.querySelector("main");

users.forEach(function ({ fullName, image, profession, description }) {
  main.innerHTML += `<div class="card">
      <div class="image">
        <img
          src="${image}"
          alt="${fullName}">
        <div class="overlay"></div>
      </div>
      <div class="details">
        <div>
          <h3>${fullName}</h3>
          <button><i class="ri-user-add-line"></i></button>
        </div>
        <h4>${profession}</h4>
        <p>${description}</p>
      </div>
    </div>`;
});

main.addEventListener("click", function (e) {
  const btn = e.target.closest("button");
  const name = btn?.parentElement.querySelector("h3");
  console.log(name);
  btn?.classList.toggle("added");
  if (!btn?.classList.contains("added")) {
    btn.innerHTML = `<i class="ri-user-add-line"></i>`;
    name.innerHTML = name.innerHTML.replace(`<i class="ri-check-line"></i>`, "");
  } else {
    btn.innerHTML = `<i class="ri-user-unfollow-line"></i>`;
    name.innerHTML += `<i class="ri-check-line"></i>`;
  }
});
