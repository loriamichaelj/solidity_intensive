// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Types1 {
    bool public boolean1 = true;
    bool public boolean2; // default value is false

    uint public myUint1 = 1;
    uint public myUint2; // default value is 0

    uint8 public myUint3; // 8 bits stored in the unsigned integer
    uint16 public myUint4; // 16 bits stored in the unsigned integer
    uint256 public myUint5; // 256 bits stored in the unsigned integer

    int public myInt1 = 1;
    int public myInt2; // defualt value is 0
    int public myInt3 = - 1; // can be negative

    int8 public myInt4; // 8 bits stored in the integer
    int16 public myInt5; // 16 bits stored in the integer
    int256 public myInt6; // 256 bits stored in the integer

    // other common types
    string public myString = "My String";
    bytes32 public myBytes32 = "My Bytes 32";
    address public myAddress = 0x52bc44d5378309EE2abF1539BF71dE1b7d7bE3b5;
}