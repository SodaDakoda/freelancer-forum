import { faker } from "https://cdn.skypack.dev/@faker-js/faker";
/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===

// used AI to generate a longer list of Occupations

const OCCUPATIONS = [
  "Accountant",
  "Actor",
  "Architect",
  "Artist",
  "Baker",
  "Barber",
  "Bartender",
  "Biologist",
  "Bookkeeper",
  "Builder",
  "Bus Driver",
  "Carpenter",
  "Chef",
  "Chemist",
  "Civil Engineer",
  "Clergy Member",
  "Coach",
  "Computer Scientist",
  "Construction Worker",
  "Consultant",
  "Copywriter",
  "Customer Service Representative",
  "Data Analyst",
  "Data Scientist",
  "Dentist",
  "Designer",
  "Doctor",
  "Electrician",
  "Engineer",
  "Entrepreneur",
  "Farmer",
  "Fashion Designer",
  "Financial Advisor",
  "Firefighter",
  "Flight Attendant",
  "Florist",
  "Graphic Designer",
  "Hair Stylist",
  "Human Resources Manager",
  "Illustrator",
  "Interior Designer",
  "IT Specialist",
  "Journalist",
  "Judge",
  "Lawyer",
  "Librarian",
  "Machinist",
  "Marketing Manager",
  "Mathematician",
  "Mechanic",
  "Musician",
  "Nurse",
  "Optometrist",
  "Painter",
  "Paramedic",
  "Pharmacist",
  "Photographer",
  "Physician",
  "Pilot",
  "Plumber",
  "Police Officer",
  "Politician",
  "Professor",
  "Programmer",
  "Project Manager",
  "Psychologist",
  "Real Estate Agent",
  "Receptionist",
  "Researcher",
  "Retail Manager",
  "Salesperson",
  "Scientist",
  "Social Worker",
  "Software Developer",
  "Soldier",
  "Surgeon",
  "Teacher",
  "Technician",
  "Translator",
  "Truck Driver",
  "Veterinarian",
  "Video Editor",
  "Waiter",
  "Web Developer",
  "Welder",
  "Writer",
  "Zoologist",
];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function makePerson() {
  const name = faker.person.fullName();
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;
  return { name, occupation, rate };
}

const people = Array.from({ length: NUM_FREELANCERS }, makePerson);

function PersonBlock(solo) {
  const $person = document.createElement("div");
  $person.classList.add("solo");

  const $individual = document.createElement("p");
  $individual.classList.add("name");
  $individual.textContent = solo.name;

  const $occupy = document.createElement("p");
  $occupy.classList.add("occupation");
  $occupy.textContent = solo.occupation;

  const $hourly = document.createElement("p");
  $hourly.classList.add("rate");
  $hourly.textContent = `$${solo.rate}/hr`;

  $person.append($individual, $occupy, $hourly);
  return $person;
}

const $container = document.getElementById("freelancers-container");

$container.innerHTML = "";

const $headerRow = document.createElement("div");
$headerRow.classList.add("header-row");

const headers = ["Name", "Occupation", "Starting Rate"];

headers.forEach((headerText) => {
  const $header = document.createElement("h3");
  $header.classList.add("grid-header");
  $header.textContent = headerText;
  $headerRow.appendChild($header);
});

$container.appendChild($headerRow);

people.forEach((freelancer) => {
  const $row = document.createElement("div");
  $row.classList.add("solo");

  const $name = document.createElement("p");
  $name.classList.add("name");
  $name.textContent = freelancer.name;
  $row.appendChild($name);

  const $occupation = document.createElement("p");
  $occupation.classList.add("occupation");
  $occupation.textContent = freelancer.occupation;
  $row.appendChild($occupation);

  const $rate = document.createElement("p");
  $rate.classList.add("rate");
  $rate.textContent = `$${freelancer.rate}/hr`;
  $row.appendChild($rate);

  $container.appendChild($row);
});

function displayAverageRate() {
  const totalRate = people.reduce(
    (sum, freelancer) => sum + freelancer.rate,
    0
  );
  const avgRate = totalRate / people.length;

  const $average = document.createElement("p");
  $average.classList.add("average-rate");
  $average.textContent = `Average hourly rate: $${avgRate.toFixed(2)}`;

  const $avgContainer = document.createElement("div");
  $avgContainer.classList.add("average-rate-container");
  $avgContainer.appendChild($average);

  const $container = document.getElementById("freelancers-container");
  $container.insertAdjacentElement("beforebegin", $avgContainer);
}
displayAverageRate();
