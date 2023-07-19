import HistoryLocation from '@ember/routing/history-location';

export default class PreserveHashLocation extends HistoryLocation {
  getHash() {
    return location.hash;
  }
}
