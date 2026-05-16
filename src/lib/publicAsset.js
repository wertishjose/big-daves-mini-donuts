export function publicImage(path) {
  if (!path) {
    return "";
  }

  if (/^(https?:)?\/\//.test(path) || path.startsWith("data:") || path.startsWith("blob:")) {
    return path;
  }

  if (import.meta.env.BASE_URL !== "/" && path.startsWith(import.meta.env.BASE_URL)) {
    return path;
  }

  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${clean}`;
}
