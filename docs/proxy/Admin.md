## `Admin`





### `onlyAdvisor()`





### `onlyAdmin()`






### `constructor(address _admin, address _advisor)` (public)





### `rebalance(address _hypervisor, int24 _baseLower, int24 _baseUpper, int24 _limitLower, int24 _limitUpper, address _feeRecipient, int256 swapQuantity)` (external)





### `emergencyWithdraw(address _hypervisor, contract IERC20 token, uint256 amount)` (external)





### `emergencyBurn(address _hypervisor, int24 tickLower, int24 tickUpper, uint128 liquidity)` (external)





### `transferAdmin(address newAdmin)` (external)





### `transferAdvisor(address newAdvisor)` (external)





### `prepareHVOwnertransfer(address _hypervisor, address newOwner)` (external)





### `fullfillHVOwnertransfer(address _hypervisor, address newOwner)` (external)





### `rescueERC20(contract IERC20 token, address recipient)` (external)






### `OwnerTransferPrepared(address hypervisor, address newOwner, address admin, uint256 timestamp)`





### `OwnerTransferFullfilled(address hypervisor, address newOwner, address admin, uint256 timestamp)`





