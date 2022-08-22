pragma solidity ^0.8.4;

import "./ERC20Mod.sol";

contract CharToken is ERC20Mod {
    constructor() ERC20Mod("CharToken", "CTK") {
        _mint(msg.sender, 10 * 10 ** decimals());
    }
}