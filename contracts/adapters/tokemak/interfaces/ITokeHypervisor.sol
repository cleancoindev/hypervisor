// SPDX-License-Identifier: GPL-3.0-only
pragma solidity =0.6.11;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol";

interface ITokeHypervisor {
  function deposit(
    uint256,
    uint256,
    address,
    address
  ) external returns (uint256);

  function withdraw(
    uint256,
    address,
    address,
    uint256,
    uint256
  ) external returns (uint256, uint256);


  function rebalance(
    int24 _baseLower,
    int24 _baseUpper,
    int24 _limitLower,
    int24 _limitUpper,
    address _feeRecipient,
    uint256 _amount0Min,
    uint256 _amount1Min
  ) external;

  function addBaseLiquidity(
    uint256 amount0, 
    uint256 amount1
  ) external;

  function addLimitLiquidity(
    uint256 amount0, 
    uint256 amount1
  ) external;   

  function pullLiquidity(
    uint256 shares,
    uint256 amount0Min,
    uint256 amount1Min
  ) external returns (
    uint256 base0,
    uint256 base1,
    uint256 limit0,
    uint256 limit1
  );

  function compound() external returns (
    uint128 baseToken0Owed,
    uint128 baseToken1Owed,
    uint128 limitToken0Owed,
    uint128 limitToken1Owed
  );

  function pool() external view returns (IUniswapV3Pool);

  function currentTick() external view returns (int24 tick);

  function token0() external view returns (IERC20);

  function token1() external view returns (IERC20);

  function deposit0Max() external view returns (uint256);

  function deposit1Max() external view returns (uint256);

  function balanceOf(address) external view returns (uint256);

  function approve(address, uint256) external returns (bool);

  function transferFrom(address, address, uint256) external returns (bool);

  function transfer(address, uint256) external returns (bool);

  function getTotalAmounts() external view returns (uint256 total0, uint256 total1);

  function pendingFees() external returns (uint256 fees0, uint256 fees1);
  
  function totalSupply() external view returns (uint256 );

  function setMaxTotalSupply(uint256 _maxTotalSupply) external;

  function setDepositMax(uint256 _deposit0Max, uint256 _deposit1Max) external;

  function setWhitelist(address _address) external;
  
  function removeWhitelisted() external;

  function setSlippage(uint24 slippage) external;

  function toggleWhitelist() external;

  function transferOwnership(address newOwner) external;

}