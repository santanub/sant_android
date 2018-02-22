import ajax from "./ajax.js";

export function fetch_data() {
  return ajax('/breakup_journeys', {method: 'GET'});
}

export function checkin(id) {
  return ajax('/breakup_journeys/' + id, {method: 'PUT'});
}
