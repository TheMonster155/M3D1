const navBarLinks = [
  {
    title: "Browse",
    href: "#",
  },
  {
    title: "Ladings",
    href: "#",
  },
  {
    title: "Pages",
    href: "#",
  },
  {
    title: "Accounts",
    href: "#",
  },
];

const nav = document.getElementById("nav_links");

const createNavbarLink = (singleLink) => {
    const li = document.createElement("li");
    li.classList.add("nav-item");
    const a = document.createElement("a");
    a.innerText = singleLink.title
    a.href = singleLink.href
    a.classList.add("nav-link");
    li.appendChild(a);
    nav.appendChild(li);
}


navBarLinks.forEach(navBarLink => {
    createNavbarLink(navBarLink)
});



const skills = [
    { text: "30,000 online colses ",  subtitle: "enjois varitis off fresh topics"  },
    { text: "exspert instrucion  ",  subtitle: "find the rais insctution for you "  },
    { text: "life time access  ",  subtitle: "learn on your scable"  },

]


const skillsContainer = document.getElementById("skills")

const createSkills  = ( singolSkill ) => {
    const div = document.createElement("div");
    div.classList.add("col-4")
    
}