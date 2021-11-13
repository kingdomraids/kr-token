const KRToken = artifacts.require("KRToken");
const SeedSale = artifacts.require("SeedSale");
const PrivateSale = artifacts.require("PrivateSale");
const Team = artifacts.require("Team");
const Advisor = artifacts.require("Advisor");
const Liquidity = artifacts.require("Liquidity");
const EcosystemFund = artifacts.require("EcosystemFund");
const Marketing = artifacts.require("Marketing");
const CompanyReserves = artifacts.require("CompanyReserves");

module.exports = async function (deployer) {    
    await deployer.deploy(KRToken);
    const krInstance = await KRToken.deployed();
    if(krInstance) {
        console.log("Token contract successfully deployed.")
        console.log(`Token contract address: ${krInstance.address}`);

        await deployer.deploy(SeedSale, krInstance.address);
        const seedSaleInstance = await SeedSale.deployed();
        if(seedSaleInstance) {
            console.log("Seed sale metric contract successfully deployed.")
            console.log(`Seed sale metric contract address: ${seedSaleInstance.address}`);
        }

        await deployer.deploy(PrivateSale, krInstance.address);
        const privateSaleInstance = await PrivateSale.deployed();
        if(privateSaleInstance) {
            console.log("Private sale metric contract successfully deployed.")
            console.log(`Private sale metric contract address: ${privateSaleInstance.address}`);
        }

        await deployer.deploy(Team, krInstance.address);
        const teamInstance = await Team.deployed();
        if(teamInstance) {
            console.log("Team metric contract successfully deployed.")
            console.log(`Team metric contract address: ${teamInstance.address}`);
        }

        await deployer.deploy(Advisor, krInstance.address);
        const advisorInstance = await Advisor.deployed();
        if(advisorInstance) {
            console.log("Advisor metric contract successfully deployed.")
            console.log(`Advisor metric contract address: ${advisorInstance.address}`);
        }

        await deployer.deploy(Liquidity, krInstance.address);
        const liquidityInstance = await Liquidity.deployed();
        if(liquidityInstance) {
            console.log("Liquidity metric contract successfully deployed.")
            console.log(`Liquidity metric contract address: ${liquidityInstance.address}`);
        }

        await deployer.deploy(EcosystemFund, krInstance.address);
        const ecosystemFundInstance = await EcosystemFund.deployed();
        if(ecosystemFundInstance) {
            console.log("Ecosystem Fund metric contract successfully deployed.")
            console.log(`Ecosystem Fund metric contract address: ${ecosystemFundInstance.address}`);
        }

        await deployer.deploy(Marketing, krInstance.address);
        const marketingInstance = await Marketing.deployed();
        if(marketingInstance) {
            console.log("Marketing metric contract successfully deployed.")
            console.log(`Marketing metric contract address: ${marketingInstance.address}`);
        }

        await deployer.deploy(CompanyReserves, krInstance.address);
        const companyReservesInstance = await CompanyReserves.deployed();
        if(companyReservesInstance) {
            console.log("Company reserves metric contract successfully deployed.")
            console.log(`Company reserves metric contract address: ${companyReservesInstance.address}`);
        }
    }
}
