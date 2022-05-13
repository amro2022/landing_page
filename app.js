// Global variables.
var everySections = document.querySelectorAll("section");
var myList = document.getElementById("navbar__list");
var fragment = document.createDocumentFragment();

// Looping all the sections by for of.
// Creating and build dynamic navigation.
for (const section of everySections) {
	const lists = document.createElement("li");
	const anchor = document.createElement("a");
	anchor.setAttribute("href", `#${section.id}`);
	anchor.classList.add("menu__link");
	anchor.textContent = section.getAttribute("data-nav");
	lists.appendChild(anchor);
	// Adding smooth scroll by addVentListener and scrollIntoView.
	anchor.addEventListener("click", (element) => {
		element.preventDefault();
		section.scrollIntoView({
			behavior: "smooth",
		});
	});
	fragment.appendChild(lists);
}
myList.appendChild(fragment);

// // Main function and InterSection observer to
//  Add class 'active' to section when near top of viewport.
function activeFun() {
	// Options of IntersectionObserver.
	options = {
		root: null,
		rootMargin: "0px",
		threshold: "0.65",
	};
	let observer = new IntersectionObserver((entries) => {
		// Use forEach to set section at active.
		entries.forEach((ele) =>
			// If condition to get active class.
			{
				if (ele.isIntersecting) {
					for (let oneSection of everySections) {
						oneSection.classList.remove("your-active-class");
					}
					ele.target.classList.add("your-active-class");

					// Use forEach and if condition  to Scroll to section on link click.
					const eachList = document.querySelectorAll("li");
					eachList.forEach((ee) => {
						if (ee.innerText === ele.target.getAttribute("data-nav")) {
							eachList.forEach((el) => {
								el.classList.remove("active");
							});
							ee.classList.add("active");
						}
					});
				}
			}
		);
	}, options);
	everySections.forEach((section) => {
		observer.observe(section);
	});
}
window.addEventListener("scroll", activeFun);

// Creating and Add a scroll to top button on the page.
let myBtn = document.createElement("button");
myBtn.className = "btn";
myBtn.innerHTML = "up";
document.body.appendChild(myBtn);
// Use window.onscroll and function expression to declare the button.
window.onscroll = function () {
	if (window.scrollY >= 700) {
		myBtn.style.display = "block";
	} else {
		myBtn.style.display = "none";
	}
};
// Use onclick and function expression to فhe user presses the button to climb up smoothly.
myBtn.onclick = function () {
	window.scrollTo({
		left: 0,
		top: 0,
		behavior: "smooth",
	});
};
