const hre = require("hardhat");
const ethers = hre.ethers;
const { readConfig } = require("./helper.js");
async function main() {
    const claimID = "0x05a655ae976c362ae8c601392d94c15fb443ae5cb41e60d42b11f14f91d40516";
    // Get the CompensationManager contract
    const CompensationManager = await ethers.getContractFactory("CompensationManager");
    const ConfigManager = await ethers.getContractFactory("ConfigManager");
    const configManagerAddress = await readConfig(hre.network.name, "CONFIG_MANAGER");
    // Replace with the actual deployed contract address
    const compensationManagerAddress = await readConfig(hre.network.name, "COMPENSATION_MANAGER");
    const compensationManager = await CompensationManager.attach(compensationManagerAddress);

    const configManager = await ConfigManager.attach(configManagerAddress);
    try {

        let claimAmount = await compensationManager.getClaimableAmount(claimID);
        console.log("claimAmount ", claimAmount);
        const systemFeeRate = await configManager.getSystemCompensationFeeRate();
        const systemFee = claimAmount.mul(systemFeeRate).div(10000);
        console.log("systemFee ", systemFee);
        let gasLimit = await compensationManager.estimateGas.withdrawCompensation(
            claimID,{value:systemFee}
        );
        console.log("gasLimit ", gasLimit);
        // Call the claimIllegalSignatureCompensation method
        const tx = await compensationManager.withdrawCompensation(
            claimID,
            {value:systemFee}
        );

        console.log("Transaction sent. Waiting for confirmation...");
        const receipt = await tx.wait();
        console.log("Transaction confirmed. Transaction hash:", receipt.transactionHash);
    } catch (error) {
        console.error("Error claiming illegal signature compensation:", error);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });