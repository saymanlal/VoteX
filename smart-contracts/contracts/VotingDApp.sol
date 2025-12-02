// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingDApp {
    struct Voter {
        string voterId;
        string state;
        bool hasVoted;
    }

    struct Party {
        string name;
        uint voteCount;
    }

    // Mapping party name => vote count
    mapping(string => Party) public parties;

    // Mapping voter ID => Voter data
    mapping(string => Voter) public voters;

    // Event emitted when a vote is cast
    event VoteCasted(string voterId, string state, string party);

    constructor(string[] memory partyNames) {
        for (uint i = 0; i < partyNames.length; i++) {
            parties[partyNames[i]] = Party(partyNames[i], 0);
        }
    }

    function vote(string memory voterId, string memory state, string memory partyName) public {
        require(!voters[voterId].hasVoted, "Voter has already voted.");
        require(bytes(parties[partyName].name).length != 0, "Invalid party name.");

        voters[voterId] = Voter(voterId, state, true);
        parties[partyName].voteCount += 1;

        emit VoteCasted(voterId, state, partyName);
    }

    function getVoteCount(string memory partyName) public view returns (uint) {
        return parties[partyName].voteCount;
    }

    function hasVoterVoted(string memory voterId) public view returns (bool) {
        return voters[voterId].hasVoted;
    }
}
