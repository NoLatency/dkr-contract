pragma solidity ^0.5.0;

import "../ownership/Ownable.sol";
import "../token/KIP17/KIP17Token.sol";

contract DKReverse is KIP17Token, Ownable {
    constructor () public KIP17Token("Drawshop Kingdom Reverse", "DKR") {
    }
}