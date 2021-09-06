## `TestRouter`



   DO NOT USE IN PRODUCTION. This is only intended to be used for
        tests and lacks slippage and callback caller checks.


### `mint(contract IUniswapV3Pool pool, int24 tickLower, int24 tickUpper, uint128 amount) → uint256, uint256` (external)





### `swap(contract IUniswapV3Pool pool, bool zeroForOne, int256 amountSpecified) → int256, int256` (external)





### `uniswapV3MintCallback(uint256 amount0Owed, uint256 amount1Owed, bytes data)` (external)





### `uniswapV3SwapCallback(int256 amount0Delta, int256 amount1Delta, bytes data)` (external)





### `_callback(uint256 amount0, uint256 amount1, bytes data)` (internal)






