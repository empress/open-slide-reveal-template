import HistoryLocation from '@ember/routing/history-location';

export default HistoryLocation.extend({
  getHash() {
    return location.hash;
  }
});
