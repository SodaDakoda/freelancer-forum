import { faker } from "@faker-js/faker";
/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = faker.person.fullName();

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
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
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
