import { db } from "./firebase.js";

import {
  ref,
  push,
  set
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const form = document.getElementById("hotelForm");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const hotelName = document.getElementById("hotelName").value;
  const location = document.getElementById("location").value;
  const price = document.getElementById("price").value;

  try {

    const hotelRef = push(ref(db, "hotels"));

    await set(hotelRef, {
      name: hotelName,
      location: location,
      price: price,
      createdAt: Date.now()
    });

    alert("Hotel Added Successfully!");

    form.reset();

  } catch (error) {

    alert("Error: " + error.message);

  }

});
