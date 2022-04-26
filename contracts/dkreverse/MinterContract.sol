pragma solidity ^0.5.0;

import "./DKReverse.sol";

contract MinterContract is Ownable {
    using SafeMath for uint;
    address _tokenAddress;
    uint public lastTokenId;

    constructor(address tokenAddress) public {
        _tokenAddress = tokenAddress;
    }

    function setLastTokenId(uint newLastTokenId) public onlyOwner {
        lastTokenId = newLastTokenId;
    }

    function renounceMinter() public onlyOwner {
        DKReverse(_tokenAddress).renounceMinter();
    }
    
     function mint(address to, string memory prefix, uint count) public onlyOwner returns(uint, uint){
        uint start = lastTokenId.add(1);
        uint tokenId = start;

        for(uint i=0; i<count; i++) {
            string memory tokenURI = string(abi.encodePacked(prefix, uint2str(tokenId)));
            DKReverse(_tokenAddress).mintWithTokenURI(to, tokenId, tokenURI);
            tokenId = tokenId.add(1);
        }

        lastTokenId = tokenId - 1;

        return (start, lastTokenId);
    }

    function uint2str(uint _i) internal pure returns (string memory _uintAsString) {
        if (_i == 0) {
            return "0";
        }
        uint j = _i;
        uint len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint k = len - 1;
        while (_i != 0) {
            bstr[k--] = byte(uint8(48 + _i % 10));
            _i /= 10;
        }
        return string(bstr);
    }
}