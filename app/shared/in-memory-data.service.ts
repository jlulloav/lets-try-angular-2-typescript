export class InMemoryDataService {
  createDb() {
    let feedback = [
      {id: 11, userName: 'Mr. Nice',comment:"Nice example trying angular 2"},
      {id: 12, userName: 'Narco',comment:"Bad example trying angular 2"},
      {id: 13, userName: 'Bombasto',comment:"No comment yet"}
     
    ];
    return {feedback};
  }
}
