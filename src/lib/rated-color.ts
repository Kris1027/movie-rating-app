export function ratedColor(rating: number) {
  if (rating >= 9) {
    return "#724e91";
  } else if (rating >= 7) {
    return "#60992d";
  } else if (rating >= 5) {
    return "#f3ca40";
  } else {
    return "#ff3a20";
  }
}
