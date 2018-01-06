function slugify(str) {
  return slug(str.replace(/\./gi, '*'));
}
