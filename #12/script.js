/*

The national go-kart racing competition is taking place at your local town and you've been called for building the winners podium with the available wooden blocks. Thankfully you are in a wood-rich area, number of blocks are always at least 6.

Remember a classic racing podium has three platforms for first, second and third place. First place is the highest and second place is higher than third. Also notice that platforms are arranged as 2nd - 1st - 3rd.

The organizers want a podium that satisfies:

The first place platform has the minimum height possible
The second place platform has the closest height to first place
All platforms have heights greater than zero.
Task
Given the numbers of blocks available, return an array / tuple or another data structure depending on the language (refer sample tests) with the heights of 2nd, 1st, 3rd places platforms.

*/


function cleanedCounts(data) {
  let res = [];
  res.push(data[0]);
  
  data.forEach((i, idx) => {
    if (idx > 0) {
      if (i > res[res.length - 1]) res.push(i);
      else res.push(res[res.length - 1]);
    }
  })
  return res;
}