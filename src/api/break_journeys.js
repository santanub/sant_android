import ajax from "./ajax.js";

export function fetch_data() {
  return ajax('/breakup_journeys', {method: 'GET'});
}
