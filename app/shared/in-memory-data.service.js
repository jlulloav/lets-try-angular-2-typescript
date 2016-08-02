var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var feedback = [
            { id: 11, userName: 'Mr. Nice', comment: "Nice example trying angular 2" },
            { id: 12, userName: 'Narco', comment: "Bad example trying angular 2" },
            { id: 13, userName: 'Bombasto', comment: "No comment yet" }
        ];
        return { feedback: feedback };
    };
    return InMemoryDataService;
})();
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map