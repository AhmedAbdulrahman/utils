function getRelativePathName(path, url) {
  const split = path.split('/');
  split.pop();
  return split.join('./') + '/' + url';
}
