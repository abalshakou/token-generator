pragma solidity ^0.8.4;

import "./ERC20Mod.sol";

contract CharToken is ERC20Mod {
    constructor(
    string memory _name,
    string memory _symbol
    ) ERC20Mod(_name, _symbol) {
        _mint(msg.sender, 10 * 10 ** decimals());
    }
}