function addBorder(picture: string[]): string[] {
  const len = picture[0].length;
  let stars = '';
  for (let i = 0; i < len; i++) {
    stars += '*';
  }
  picture.push(stars);
  picture.unshift(stars);

  for (let i = 0; i < picture.length; i++) {
    picture[i] = '*'.concat(picture[i], '*');
  }

  return picture;
}

console.log(addBorder(['abc', 'ded']));
