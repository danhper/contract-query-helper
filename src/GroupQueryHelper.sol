// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./interfaces/ICreatorGroup.sol";


contract GroupQueryHelper {
    struct GroupData {
        address director;
        address[] members;
    }

    function queryGroup(ICreatorGroup group) external view returns (GroupData memory) {
        uint256 membersCount = group.numberOfMembers();
        address [] memory members = new address[] (membersCount);

        for (uint256 i; i < membersCount; i++) {
            members[i] = group.members(i);
        }

        return GroupData({
            director: group.director(),
            members: members
        });
    }
}
