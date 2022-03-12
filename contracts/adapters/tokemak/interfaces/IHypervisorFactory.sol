
interface IHypervisorFactory {

  function getHypervisor(address token0, address token1, uint24 fee) external returns (address hypervisor);
}
