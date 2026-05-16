export function scrollToSection(sectionId) {
  if (!sectionId) {
    return;
  }

  const target = document.getElementById(sectionId);

  if (!target) {
    return;
  }

  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
