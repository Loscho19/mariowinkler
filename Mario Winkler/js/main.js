const teams = document.querySelector(".teams");
const children = teams.children;
for (let index = 0; index < children.length; index++) {
  console.log(index);
  setTimeout(() => {
    children[index].style.display = "block";
  }, (index + 1) * 500);
}
