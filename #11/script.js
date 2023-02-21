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


function racePodium(blocks) {
  let ceil = Math.ceil(blocks / 3);
  let floor = Math.floor(blocks / 3);
  
  if ( (ceil + ceil + 1 + ceil - 1) == blocks && ceil - 1 != 0 ) return [ceil , ceil + 1 , ceil - 1];
  else if ( (floor + floor + 1 + floor - 1) == blocks && floor - 1 != 0 ) return [floor , floor + 1 , floor - 1];
  else if ( (ceil + ceil + 1 + ceil - 2) == blocks && ceil - 2 != 0 ) return [ceil , ceil + 1 , ceil - 2];
  else if ( (ceil + ceil + 1 + ceil - 3) == blocks && ceil - 3 != 0 ) return [ceil , ceil + 1 , ceil - 3];
  else if ( (floor + floor + 1 + floor - 2) == blocks && floor - 2 != 0 ) return [floor , floor + 1 , floor - 2];
  else if ( (floor + floor + 1 + floor - 3) == blocks && floor - 3 != 0 ) return [floor , floor + 1 , floor - 3];
  else if ( (ceil + ceil + 2 + ceil - 1) == blocks && ceil - 1 != 0 ) return [ceil , ceil + 2 , ceil - 1];
  else if ( (ceil + ceil + 2 + ceil - 2) == blocks && ceil - 2 != 0 ) return [ceil , ceil + 2 , ceil - 2];
  else if ( (floor + floor + 2 + floor - 1) == blocks && floor - 1 != 0 ) return [floor , floor + 2 , floor - 1];
  else if ( (floor + floor + 2 + floor - 2) == blocks && floor - 2 != 0 ) return [floor , floor + 2 , floor - 2];
}


console.log(racePodium(66127));