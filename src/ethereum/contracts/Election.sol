//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.22 <0.9.0;

contract Election {
    mapping(address => bool) admins;
    string name; // name of the election. example: for president
    string description; // description of the election
    bool running;

    constructor() {
        admins[msg.sender] = true;
        running = false;
    }

    modifier onlyAdmin() {
        require(admins[msg.sender] == true, "Only Admin");
        _;
    }

    function addAdmin(address _address) public onlyAdmin {
        admins[_address] = true;
    }

    /*****************************CANDIDATES SECTION*****************************/

    struct Candidate {
        string name;
        string info;
        bool exists;
    }
    mapping(string => Candidate) public candidates;
    string[] candidateNames;

    function addCandidate(string memory _candidateName, string memory _info)
        public
        onlyAdmin
    {
        Candidate memory newCandidate = Candidate({
            name: _candidateName,
            info: _info,
            exists: true
        });

        candidates[_candidateName] = newCandidate;
        candidateNames.push(_candidateName);
    }

    function getCandidates() public view returns (string[] memory) {
        return candidateNames;
    }

    /*****************************CANDIDATES SECTION*****************************/

    /*****************************ELECTION SECTION*****************************/

    function setElectionDetails(string memory _name, string memory _description)
        public
        onlyAdmin
    {
        name = _name;
        description = _description;
        running = true;
    }

    function getElectionName() public view returns (string memory) {
        return name;
    }

    function getElectionDescription() public view returns (string memory) {
        return description;
    }

    function getTotalCandidates() public view returns (uint256) {
        return candidateNames.length;
    }

    /*****************************ELECTION SECTION*****************************/

    /*****************************VOTER SECTION*****************************/

    struct Vote {
        address voterAddress;
        uint256 voterId;
        string voterName;
        string candidate;
    }
    Vote[] votes;
    mapping(uint256 => bool) public voterIds;

    function vote(
        uint256 _voterId,
        string memory _voterName,
        string memory _candidateName
    ) public {
        require(running == true);
        require(candidates[_candidateName].exists, "No such candidate");
        require(!voterIds[_voterId], "Already Voted");

        Vote memory newVote = Vote({
            voterAddress: msg.sender,
            voterId: _voterId,
            voterName: _voterName,
            candidate: _candidateName
        });

        votes.push(newVote);
        voterIds[_voterId] = true;
    }

    /*****************************VOTER SECTION*****************************/

    function getVotes() public view onlyAdmin returns (Vote[] memory) {
        return votes;
    }

    function getTotalVoter() public view returns (uint256) {
        return votes.length;
    }

    function endElection() public onlyAdmin {
        running = false;
    }

    function isElectionRunning() public view returns (bool) {
        return running;
    }
}
