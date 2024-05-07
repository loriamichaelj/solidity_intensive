const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Types", () => {
  beforeEach(async () => {
    const Contract = await ethers.getContractFactory("Types1");
    contract = await Contract.deploy();
  });

  describe("Example 1", () => {
    it("demonstrates boolean values", async () => {
      expect(await contract.boolean1()).to.equal(true);
      expect(await contract.boolean2()).to.equal(false);
    });

    it("demonstrates uint values", async () => {
      expect(await contract.myUint1()).to.equal(1);
      expect(await contract.myUint2()).to.equal(0);
      expect(await contract.myUint3()).to.equal(0);
      expect(await contract.myUint4()).to.equal(0);
      expect(await contract.myUint5()).to.equal(0);
    });

    it("demonstrates int values", async () => {
      expect(await contract.myInt1()).to.equal(1);
      expect(await contract.myInt2()).to.equal(0);
      expect(await contract.myInt3()).to.equal(-1);
      expect(await contract.myInt4()).to.equal(0);
      expect(await contract.myInt5()).to.equal(0);
      expect(await contract.myInt5()).to.equal(0);
    });

    it("demonstrates string, byte32, address", async () => {
      expect(await contract.myString()).to.equal("My String");
      expect(await contract.myBytes32()).to.equal(
        "0x4d79204279746573203332000000000000000000000000000000000000000000"
      );
      expect(await contract.myAddress()).to.equal(
        "0x52bc44d5378309EE2abF1539BF71dE1b7d7bE3b5"
      );
    });
  });
});
