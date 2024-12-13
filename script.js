document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const mainTopics = document.getElementById("mainTopics");
  const hamburgerIcon = mobileNavToggle.querySelector(".hamburger-icon");
  const closeIcon = mobileNavToggle.querySelector(".close-icon");

  mobileNavToggle.addEventListener("click", () => {
    mainTopics.classList.toggle("show");
    hamburgerIcon.style.display = mainTopics.classList.contains("show")
      ? "none"
      : "inline";
    closeIcon.style.display = mainTopics.classList.contains("show")
      ? "inline"
      : "none";
  });

  // Search Functionality
  const searchInput = document.getElementById("searchInput");
  const subtopicCards = document.querySelectorAll(".subtopic-card");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    subtopicCards.forEach((card) => {
      const title = card.getAttribute("data-title").toLowerCase();
      card.style.display = title.includes(query) ? "grid" : "none";
    });
  });

  // Main Topic Selection
  const mainTopicElements = document.querySelectorAll(".main-topic");

  mainTopicElements.forEach((mainTopic) => {
    mainTopic.addEventListener("click", () => {
      // Deselect all main topics and hide all subtopics
      mainTopicElements.forEach((topic) => topic.classList.remove("selected"));
      subtopicCards.forEach((card) => (card.style.display = "none"));

      // Select clicked main topic
      mainTopic.classList.add("selected");

      // Show subtopics for the selected main topic
      const selectedSubtopicClass = mainTopic.getAttribute("data-subtopic");
      const selectedSubtopicCards = document.querySelectorAll(
        `.${selectedSubtopicClass}`
      );
      selectedSubtopicCards.forEach((card) => {
        card.style.display = "grid";
      });
    });
  });

  // Accessibility: Keyboard Navigation for Subtopic Cards
  subtopicCards.forEach((card) => {
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        const ctaButton = card.querySelector(".cta-button");
        if (ctaButton) {
          ctaButton.click();
        }
      }
    });
  });
});
