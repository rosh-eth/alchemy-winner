// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;



contract Contract {
    

function emitWinner(address winner) public {
    (bool success, ) = winner.call(abi.encodeWithSignature("attempt()"));
    require(success, "Failed to emit winner");

}

}
