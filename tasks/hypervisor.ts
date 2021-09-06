import { expect } from 'chai'
import { constants, Wallet } from 'ethers'
import { formatEther, parseEther} from 'ethers/lib/utils'
import { task } from 'hardhat/config'
import { deployContract, signPermission } from './utils'
import {
    FeeAmount,
    TICK_SPACINGS,
    encodePriceSqrt,
    getPositionKey,
    getMinTick,
    getMaxTick
} from './shared/utilities'


const DAY = 60 * 60 * 24

task('deploy-hypervisor-factory', 'Deploy Hypervisor contract')
  .setAction(async (cliArgs, { ethers, run, network }) => {

    //TODO cli args
    // goerli
    const args = {
      uniswapFactory: "0x1f98431c8ad98523631ae4a59f267346ea31f984",
    };

    console.log('Network')
    console.log('  ', network.name)
    console.log('Task Args')
    console.log(args)

    // compile

    await run('compile')

    // get signer

    const signer = (await ethers.getSigners())[0]
    console.log('Signer')
    console.log('  at', signer.address)
    console.log('  ETH', formatEther(await signer.getBalance()))

    // deploy contracts

    const hypervisorFactoryFactory = await ethers.getContractFactory('HypervisorFactory')

    const hypervisorFactory = await deployContract(
      'HypervisorFactory',
      await ethers.getContractFactory('HypervisorFactory'),
      signer,
      [args.uniswapFactory]
    )

    await hypervisorFactory.deployTransaction.wait(5)
    await run('verify:verify', {
      address: hypervisorFactory.address,
      constructorArguments: [args.uniswapFactory],
    })
})

task('deploy-hypervisor', 'Deploy Hypervisor contract')
  .setAction(async (cliArgs, { ethers, run, network }) => {

    // TODO cli args
    // goerli
    const args = {
      factory: "0xC878c38F0Df509a833D10De892e1Cf7D361e3A67",  
      token0: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", 
      token1: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      fee: FeeAmount.MEDIUM,
      name: "Visor USDC-ETH Uni v3",
      symbol: "vUSDC-ETHV3-1"
    };

    console.log('Network')
    console.log('  ', network.name)
    console.log('Task Args')
    console.log(args)

    // compile

    await run('compile')

    // get signer

    const signer = (await ethers.getSigners())[0]
    console.log('Signer')
    console.log('  at', signer.address)
    console.log('  ETH', formatEther(await signer.getBalance()))

    const hypervisorFactory = await ethers.getContractAt(
      'HypervisorFactory',
      args.factory,
      signer,
    )

    const hypervisor = await hypervisorFactory.createHypervisor(
      args.token0, args.token1, args.fee, args.name, args.symbol) 
      // args.baseLower, args.baseUpper, args.limitLower, args.limitUpper 
    // )

    // verify

  }); 

task('verify-hypervisor', 'Deploy Hypervisor contract')
  .setAction(async (cliArgs, { ethers, run, network }) => {

    console.log('Network')
    console.log('  ', network.name)

    await run('compile')

    // get signer

    const signer = (await ethers.getSigners())[0]
    console.log('Signer')
    console.log('  at', signer.address)
    console.log('  ETH', formatEther(await signer.getBalance()))

    const hypervisorAddress = "0x716bd8A7f8A44B010969A1825ae5658e7a18630D";
    // TODO cli args
    // goerli
    const args = {
      pool: "0x8ad599c3A0ff1De082011EFDDc58f1908eb6e6D8",
      owner: signer.address,
      name: "Visor USDC-ETH Uni v3",
      symbol: "vUSDC-ETHV3-1"
    };
    console.log('Task Args')
    console.log(args)

    const hypervisor = await ethers.getContractAt(
      'Hypervisor',
      hypervisorAddress,
      signer,
    )

    // await hypervisor.deployTransaction.wait(5)
    await run('verify:verify', {
      address: hypervisor.address,
      constructorArguments: Object.values(args),
    })

  });



task('send-whitelist', 'append whitelist')
  .addFlag('verify', 'verify contracts on etherscan')
  .setAction(async (args, { ethers, run, network }) => {

    const fs = require('fs');
    const file = "wl.csv" //process.argv[2];
    let data = fs.readFileSync(file, 'UTF-8');
    let lines = data.split(/\r?\n/);
    let reference: any[] = [];
    let dests: any[] = [];
    let chunks: any[] = [];
    let chunk: any = {};
    let counter = 0;
    let chunkSize = 200; 
    let i = 0;
    lines.forEach((line: any) => {
      counter++;
      if(i <chunkSize) {
        dests.push(line);
        if( lines.length-1 == counter && line != '') {
        // last chunk
          chunk['dests'] = dests;
          chunks.push(chunk);
        }
      }
      else {
        chunk['dests'] = dests;
        chunks.push(chunk);
        chunk = {}
        dests = [];
        i = 0;
        if(line != '') dests.push(line);
      }
      if(line != '') reference.push(line); 
      i++;

    })
    // put chunks back together and check against orginal 
    
    let test: any[] = [];
    let item: any[] = [];
    for(let i=0; i<chunks.length; i++) {
        // console.log(chunks[i]['dests'].length);
      for(let j=0; j<chunks[i]['dests'].length; j++) {
        // console.log(chunks[i]['dests'][j]);
        item = [];
        item[0] = chunks[i]['dests'][j];
        test.push(item);
      }
    }
    console.log(test.length)
    console.log(reference.length)


// console.log(chunks);
    // for(let i=0; i<reference.length; i++) {
    //   assert( test[i][0] == reference[i][0]);
    // }

    
    console.log('Network')
    console.log('  ', network.name)
    console.log('Task Args')
    console.log(args)

    // // get signer

    const signer = (await ethers.getSigners())[0]
    console.log('Signer')
    console.log('  at', signer.address)
    console.log('  ETH', formatEther(await signer.getBalance()))

    // // compile

    await run('compile')

    const hypervisorAddress = "0x6C8116Abe5c5f2c39553c6F4217840E71462539C";

    const hypervisor = await ethers.getContractAt(
      'Hypervisor',
      hypervisorAddress,
      signer,
    )
    // let list = chunks[0].dests.splice(-1,1);
    // console.log(list);       
    // chunks[i].dests.pop()
    for(let i=3; i<chunks.length; i++) {
      chunks[i].dests.pop()
      console.log('chunk ', i, chunks[i].dests.length);
      let tx = await hypervisor.appendList(chunks[i].dests);
      console.log(i, tx.hash);//, chunks[i].dests);
      // for(let j=0; j<chunks[i].dests.length; j++) {
      //   console.log(i, j, chunks[i].dests[j]); 
      // } 
    }
      // console.log(chunks[i]);       
//if(chunks[0].dests[i] != '') 
// const tx = await signer.sendTransaction({
//       to: chunks[0].dests[i],
//       value: ethers.utils.parseEther("0.02")
// });
// let tx = await multisend.multisendToken(rewardsTokenAddress, chunks[i].dests, chunks[i].amounts); 
// console.log(i, tx.hash);//, chunks[i].dests);
// break;
});
