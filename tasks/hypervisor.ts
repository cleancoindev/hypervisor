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
      TickMath:"0x308C3E60585Ad4EAb5b7677BE0566FeaD4cb4746"
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


    const hypervisorFactory = await deployContract(
      'HypervisorFactory',
      await ethers.getContractFactory('HypervisorFactory',{
        libraries:{
          TickMath:args.TickMath
        }
      }),
      signer,
      [args.uniswapFactory]
    )

    //await hypervisorFactory.deployTransaction.wait(5)
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
      factory: "0x4213c6F3d78D5e794F26c0D2360c48b7d410C92f",  
      token0: "0x5B650f3897cc19869DFc36F863568b21BDb50CCF", 
      token1: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      fee: FeeAmount.MEDIUM,
      name: "Visor WETHVISR-ETH Uni v3",
      symbol: "vWETHVISR-ETHV3-1"
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

    await hypervisorFactory.createHypervisor(
      args.token0, args.token1, args.fee, args.name, args.symbol); 
    
    const hypervisorAddress = await hypervisorFactory.getHypervisor(args.token0, args.token1, args.fee)
    console.log("Hypervisor address",hypervisorAddress)
    const hypervisor = await ethers.getContractAt(
        'Hypervisor',
        hypervisorAddress,
        signer,
      )
    
    const poolAddress=await hypervisor.pool();

    console.log("Given Pool address",poolAddress)
    // verify

    await run('verify:verify', {
      address: hypervisor.address,
      constructorArguments: [poolAddress,signer.address,args.name,args.symbol],
    })

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

    const hypervisorAddress = "0x52e89a86c0baa4af691b2693d9e5363cc08845d5";
    // TODO cli args
    // goerli
    const args = {
      pool: "0xcd1f91f6c39929cecc89b4a2d29aaac887dd9f76",
      owner: signer.address,
      name: "Visor DAI-ETH Uni v3",
      symbol: "vDAI-ETHV3-1"
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
